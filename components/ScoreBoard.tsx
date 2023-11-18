import { Score } from "../app/types";

export default function ScoreBoard(props: {score: Score}) {
  return (
    <div className="w-64 mt-5 mb-5 m-auto text-sm flex flex-row justify-around">
      <span className="">Wynik: {props.score.score}</span>
      <span className="">Najlepszy: {props.score.highestScore}</span>
    </div>
  )
}