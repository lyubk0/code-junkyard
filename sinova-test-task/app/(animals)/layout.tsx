import { Header } from "@/shared/components";

export default function AnimalsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header isShowSearch={false} />
      {children}
    </main>
  );
}
