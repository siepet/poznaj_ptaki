function getAnswerClasses(answer: string, validAnswer: string, invalidAnswer: string) : string {
  if (validAnswer === answer) {
    return "animate-scale bg-emerald-600"
  } else if (answer === invalidAnswer) {
    return "animate-shake bg-rose-900"
  } else {
    return "bg-emerald-900"
  }
}

export default function Answer(props: {answer: string, validAnswer: string, invalidAnswer: string, onAnimationEnd: (any: any) => void, onClick: (any: any) => void}) {
  let animateClassName = getAnswerClasses(props.answer, props.validAnswer, props.invalidAnswer);

  return (
    <div onClick={props.onClick} onAnimationEnd={props.onAnimationEnd} className={`${animateClassName} m-auto text-center text-base flex justify-center items-center w-64 h-20 md:w-44 lg:w-60 border-solid border-emerald-950 rounded-2xl`}>
      <span className="tracking-widest">{props.answer}</span>
    </div>
  )
}
