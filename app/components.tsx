'use client';

import { Score } from './types';

export function Answer(props: {answer: string, onClick: (any: any) => void}) {
  return (
    <div onClick={props.onClick} className="m-auto text-center text-base flex justify-center items-center w-64 h-20 bg-emerald-900 border-solid border-emerald-950 rounded-2xl">
      <span className="tracking-widest">{props.answer}</span>
    </div>
  )
}
export function Header() {
  return (
    <header className="text-center mt-8">
      <h1 className="text-2xl">Jaki to ptak?</h1>
    </header>
  )
}

export function Loading() {
  const text = "Wyszukiwanie lornetką ptaka na niebie..."
  
  return (
    <header className="text-center mt-8">
      <h1 className="text-2xl">{text}</h1>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="mt-auto bottom-0 w-full text-sm text-center mb-1">
      marcin siepetowski 2023
    </footer>
  )
}

export function ScoreBoard(props: {score: Score}) {
  // <p className="">Ostatni wynik: {props.score.previousScore}</p>
  return (
    <div className="w-64 m-auto text-sm flex flex-row justify-around">
      <span className="">Wynik: {props.score.score}</span>
      <span className="">Najlepszy: {props.score.highestScore}</span>
    </div>
  )
}
