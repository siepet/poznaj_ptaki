import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto bottom-0 w-full text-sm text-center mb-1 flex justify-evenly">
      <Link href="/about">informacje</Link>
      <span className="mx-1">marcin siepetowski {year}</span>
      <Link href="/">zgadywanka</Link>
    </footer>
  )
}