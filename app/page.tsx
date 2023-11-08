'use client';
import React from 'react';
import Image from 'next/image'
import { useState, useEffect, SyntheticEvent } from 'react';
import { Answer, ScoreBoard, Loading } from './components';
import { Bird, Score } from './types';
import { getRandomBird, getRandomAnswers } from './api';

const InitScore : Score = {
    score: 0,
    highestScore: 0,
    previousScore: 0,
}

const InitBird : Bird = {
  id: 0,
  name: "",
  image: "",
}

function Game() {
  const [score, setScore] = useState<Score>(InitScore);
  const [bird, setBird] = useState<Bird>(InitBird);
  const [rawAnswers, setRawAnswers] = useState<string[]>([]);

  useEffect(() => {
    const b = getRandomBird();
    const a = getRandomAnswers(b);
    setBird(b);
    setRawAnswers(a);
  }, []);

  const handleAnswerClick = (bird: Bird, event: SyntheticEvent) : void => {
    const target = event.target as HTMLElement;
      
      if(target.innerText === bird.name) {
        setScore((prevScore: Score) => {
          return {
            ...prevScore,
            score: prevScore.score + 1,
          }
        });
        const b = getRandomBird();
        const a = getRandomAnswers(b);
        setBird(b);
        setRawAnswers(a);
      } else {
        setScore((prevScore: Score) => {
          return {
            ...prevScore,
            previousScore: prevScore.score,
            highestScore: prevScore.score > prevScore.highestScore ? prevScore.score : prevScore.highestScore,
            score: 0,
          }
        });
      }
  };

  const answers = rawAnswers.map(answer => {
    return <Answer key={answer} answer={answer} onClick={(event: SyntheticEvent) : void => { handleAnswerClick(bird, event)}} />
  });

  return (
    <>
    <h1 className="text-gray-300 text-4xl mb-10">Jaki to ptak?</h1>
    <Image
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
      src={bird.image}
      alt="Ptak"
      width={250}
      height={250}
      priority
    />
    <div className="flex justify-evenly w-6/12 mt-10">
      {answers}
    </div>
    <ScoreBoard score={score} />
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
    <main className="flex flex-col items-center justify-between p-24">
     { isLoading ? <Loading /> : <Game /> }
    </main>
  )
}
