import { Header, Footer } from "@/app/components";

export default function Layout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <Header title={title} />
      {children}
      <Footer />
    </>
  );
}
