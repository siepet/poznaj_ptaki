'use client';

export function Answer(props: {answer: string, onClick: (any: any) => void}) {
  return (
    <div onClick={props.onClick} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <p className="font-normal text-gray-700 dark:text-gray-400">{props.answer}</p>
    </div>
  )
}
