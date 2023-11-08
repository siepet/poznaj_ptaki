'use client';
import React from 'react';
import Image from 'next/image'
import { useState, useEffect, SyntheticEvent } from 'react';
import { Answer } from './components';
import { getRandomBird, getRandomAnswers, Bird } from './api';


function handleAnswerClick(bird: Bird, event: SyntheticEvent) : void {
  const target = event.target as HTMLElement;

  if(target.innerText === bird.name) {
    alert("good job");
  }
};

function Loading() {
  const text = "Wyszukiwanie lornetką ptaka na niebie..."
  return (
    <h1 className="text-gray-300 text-4xl mb-10">{text}</h1>
  )
}

function Game(props: {bird: Bird, rawAnswers: string[]}) {
  const answers = props.rawAnswers.map(answer => {
    return <Answer key={answer} answer={answer} onClick={(event: SyntheticEvent) : void=> { handleAnswerClick(props.bird, event)}} />
  });

  return (
    <>
    <h1 className="text-gray-300 text-4xl mb-10">Jaki to ptak?</h1>
    <Image
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
      src={props.bird.image}
      alt="Ptak"
      width={250}
      height={250}
      priority
    />
    <div className="flex justify-evenly w-6/12 mt-10">
      {answers}
    </div>
    </>
  )
}

export default function Home() {
  const [bird, setBird] = useState<Bird>({ id: 0, name: "", image: "http://via.placeholder.com/150" });
  const [rawAnswers, setRawAnswers] = useState<string[]>([]);

  const [isLoading, setIsLoading] = useState(true)
 
  useEffect(() => {
   if(isLoading) {
      const b = getRandomBird();
      const a = getRandomAnswers(b);
      setBird(b);
      setRawAnswers(a);

      setIsLoading(false)
   }
  }, [isLoading])

  return (
    <main className="flex flex-col items-center justify-between p-24">
     { isLoading ? <Loading /> : <Game bird={bird} rawAnswers={rawAnswers} /> }
    </main>
  )
}
