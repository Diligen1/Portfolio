import { Header, Promo, Works, Skills, Relax } from "@/components";
export default function Home() {
  return (
    <main className="mx-auto">
      <Header />
      <div className="pt-[80px]">
        <Promo />
      </div>
      <Works />
      <div className="py-[140px]">
        <Skills />
      </div>
      <Relax />
    </main>
  );
}
