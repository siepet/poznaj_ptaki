
export default function Header(props: {title: string}) {
  return (
    <header className="text-center mt-8">
      <h1 className="text-2xl md:text-3xl">{props.title}</h1>
    </header>
  )
}