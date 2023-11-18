'use client';
import React from 'react';
import Image from 'next/image'
import { useState, useEffect, SyntheticEvent } from 'react';
import { Footer, Answer, ScoreBoard, Loading, Header} from './components';
import { Bird, Score, InitBird, InitScore } from './types';
import { getRandomBird, getRandomAnswers } from './api';

function Game() {
  const [score, setScore] = useState<Score>(InitScore);
  const [bird, setBird] = useState<Bird>(InitBird);
  const [rawAnswers, setRawAnswers] = useState<string[]>([]);
  const [invalidAnswer, setInvalidAnswer] = useState("");
  const [validAnswer, setValidAnswer] = useState("");

  const randomizeQuestion = () : void => {
    const b = getRandomBird();
    const a = getRandomAnswers(b);
    setBird(b);
    setRawAnswers(a);
  }
  
  useEffect(() => {
    randomizeQuestion();
  }, []);

  const handleAnswerClick = (bird: Bird, event: SyntheticEvent) : void => {
    const target = event.target as HTMLElement;
    
    if(target.innerText === bird.name) {
      // This is a "win", moving to the next bird
      setValidAnswer(target.innerText)
      setScore((prevScore: Score) => {
        return {
          ...prevScore,
          score: prevScore.score + 1,
        }
      });

      setTimeout(() => {
        setValidAnswer("");
        randomizeQuestion();
      }, 300);

    } else {
      // This is a "lose", score is reset and the game continues
      setInvalidAnswer(target.innerText);
      setScore((prevScore: Score) => {
        return {
          previousScore: prevScore.score,
          highestScore: prevScore.score > prevScore.highestScore ? prevScore.score : prevScore.highestScore,
          score: 0,
        }
      });
    }
  };

  const answers = rawAnswers.map(answer => {
    return <Answer key={answer} answer={answer} validAnswer={validAnswer} invalidAnswer={invalidAnswer} onAnimationEnd={() => {setInvalidAnswer(""); setValidAnswer("")}} onClick={(event: SyntheticEvent) : void => { handleAnswerClick(bird, event)}} />
  });

  return (
    <main className="mt-8">
      <div className="max-w-xs max-h-xs m-auto">
        <Image
          className="m-auto"
          src={bird.image}
          alt="Ptak"
          width={250}
          height={250}
          priority
        />
    </div>
    <div className="mt-8 grid grid-cols-1 grid-rows-4 gap-y-5">
      {answers}
    </div>
    <ScoreBoard score={score} />
    </main>
  )
}

function Main() {
  return (
    <>
      <Header />
      <Game />
      <Footer />
    </>
  )
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
 
  useEffect(() => {
   if(isLoading) {
      setIsLoading(false)
   }
  }, [isLoading])

  return (
    <>
    { isLoading ? <Loading /> : <Main /> }
    </>
  )
}
