'use client';

import { Score } from './types';

export function Answer(props: {answer: string, onClick: (any: any) => void}) {
  return (
    <div onClick={props.onClick} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <p className="font-normal text-gray-700 dark:text-gray-400">{props.answer}</p>
    </div>
  )
}
export function Header() {
  return (
  <h1 className="text-gray-300 text-4xl mb-10">Jaki to ptak?</h1>
  )
}

export function Loading() {
  const text = "Wyszukiwanie lornetką ptaka na niebie..."
  
  return (
    <h1 className="text-gray-300 text-4xl mb-10">{text}</h1>
  )
}

export function Footer() {
  return (
    <div className="w-full fixed bottom-2 text-center">marcin siepetowski 2023</div>
  )
}

export function ScoreBoard(props: {score: Score}) {
  return (
    <div className="w-6/12 mt-10">
      <p className="text-gray-300 text-xl">Poprawnych odpowiedzi: {props.score.score}</p>
      <p className="text-gray-300 text-xl">Ostatni wynik: {props.score.previousScore}</p>
      <p className="text-gray-300 text-xl">Najlepszy wynik: {props.score.highestScore}</p>
    </div>
  )
}
