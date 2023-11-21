"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect, SyntheticEvent } from "react";
import { Answer, ScoreBoard, Layout } from "./components";
import { Bird, Score, InitBird, InitScore } from "./types";
import { getRandomBird, getRandomAnswers, loadScores, saveScores } from "./api";

function Game(props: { score: Score }) {
  const [score, setScore] = useState<Score>(InitScore);
  const [bird, setBird] = useState<Bird>(InitBird);
  const [rawAnswers, setRawAnswers] = useState<string[]>([]);
  const [invalidAnswer, setInvalidAnswer] = useState("");
  const [validAnswer, setValidAnswer] = useState("");

  const randomizeQuestion = (): void => {
    const b = getRandomBird();
    const a = getRandomAnswers(b);
    setBird(b);
    setRawAnswers(a);
  };

  useEffect(() => {
    setScore(props.score);
    randomizeQuestion();
  }, []);

  const handleAnswerClick = (bird: Bird, event: SyntheticEvent): void => {
    const target = event.target as HTMLElement;

    if (target.innerText === bird.name) {
      // This is a "win", moving to the next bird
      setValidAnswer(target.innerText);
      setScore((prevScore: Score) => {
        return {
          ...prevScore,
          score: prevScore.score + 1,
        };
      });

      setTimeout(() => {
        setValidAnswer("");
        randomizeQuestion();
      }, 300);
    } else {
      // This is a "lose", score is reset and the game continues
      setInvalidAnswer(target.innerText);
      setScore((prevScore: Score) => {
        let scores = {
          previousScore: prevScore.score,
          highestScore:
            prevScore.score > prevScore.highestScore
              ? prevScore.score
              : prevScore.highestScore,
          score: 0,
        };

        saveScores(scores);
        return scores;
      });
    }
  };

  const answers = rawAnswers.map((answer) => {
    return (
      <Answer
        key={answer}
        answer={answer}
        validAnswer={validAnswer}
        invalidAnswer={invalidAnswer}
        onAnimationEnd={() => {
          setInvalidAnswer("");
          setValidAnswer("");
        }}
        onClick={(event: SyntheticEvent): void => {
          handleAnswerClick(bird, event);
        }}
      />
    );
  });

  return (
    <main className="mt-8 max-w-xs max-h-xs m-auto md:max-w-md md:max-h-md lg:max-w-lg lg:max-h-lg md:w-1/2">
      <div className="m-auto">
        <Image
          className="m-auto"
          src={bird.image}
          alt="Ptak"
          width={250}
          height={250}
          priority
        />
      </div>
      <div className="mt-8 grid grid-cols-1 grid-rows-4 gap-y-5 md:grid-cols-2 md:grid-rows-2 md:gap-y-5 md:gap-x-5">
        {answers}
      </div>
      <ScoreBoard score={score} />
    </main>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState<Score>(InitScore);

  useEffect(() => {
    if (isLoading) {
      setScore(loadScores());
      setIsLoading(false);
    }
  }, [isLoading]);

  const loadingTitle = "Wyszukiwanie lornetką ptaka na niebie...";
  const title = isLoading ? loadingTitle : "Jaki to ptak?";

  return (
    <Layout title={title}>{isLoading ? <></> : <Game score={score} />}</Layout>
  );
}
