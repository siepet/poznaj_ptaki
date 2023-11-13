'use client';
import React from 'react';
import Image from 'next/image'
import { useState, useEffect, SyntheticEvent } from 'react';
import { Footer, Answer, ScoreBoard, Loading, Header } from './components';
import { Bird, Score, InitBird, InitScore } from './types';
import { getRandomBird, getRandomAnswers } from './api';

function Game() {
  const [score, setScore] = useState<Score>(InitScore);
  const [bird, setBird] = useState<Bird>(InitBird);
  const [rawAnswers, setRawAnswers] = useState<string[]>([]);

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
      setScore((prevScore: Score) => {
        return {
          ...prevScore,
          score: prevScore.score + 1,
        }
      });
    } else {
      // This is a "lose", score is reset and the game continues
      setScore((prevScore: Score) => {
        return {
          previousScore: prevScore.score,
          highestScore: prevScore.score > prevScore.highestScore ? prevScore.score : prevScore.highestScore,
          score: 0,
        }
      });
    }

    randomizeQuestion();
  };

  const answers = rawAnswers.map(answer => {
    return <Answer key={answer} answer={answer} onClick={(event: SyntheticEvent) : void => { handleAnswerClick(bird, event)}} />
  });

  return (
    <div className="">
    <Header />
    <Image
      className=""
      src={bird.image}
      alt="Ptak"
      width={250}
      height={250}
      priority
    />
    <div className="">
      {answers}
    </div>
    <ScoreBoard score={score} />
    <Footer />
    </div>
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
      <main className="">
      { isLoading ? <Loading /> : <Game /> }
      </main>
    </>
  )
}
