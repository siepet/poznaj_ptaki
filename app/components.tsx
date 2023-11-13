'use client';

import { Score } from './types';

export function Answer(props: {answer: string, onClick: (any: any) => void}) {
  return (
    <div onClick={props.onClick} className="">
      <p className="">{props.answer}</p>
    </div>
  )
}
export function Header() {
  return (
  <h1 className="">Jaki to ptak?</h1>
  )
}

export function Loading() {
  const text = "Wyszukiwanie lornetką ptaka na niebie..."
  
  return (
    <h1 className="">{text}</h1>
  )
}

export function Footer() {
  return (
    <div className="">marcin siepetowski 2023</div>
  )
}

export function ScoreBoard(props: {score: Score}) {
  return (
    <div className="">
      <p className="">Poprawnych odpowiedzi: {props.score.score}</p>
      <p className="">Ostatni wynik: {props.score.previousScore}</p>
      <p className="">Najlepszy wynik: {props.score.highestScore}</p>
    </div>
  )
}
