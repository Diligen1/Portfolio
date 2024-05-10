import { Header, Promo, Works, Skills, Footer, Relax } from "@/components";
export default function Home() {
  return (
    <main className="mx-auto">
      <Header />
      <div className="pt-[80px]">
        <Promo />
      </div>
      <Works />
      <Skills />
      <Relax />
      <div className="pt-[160px]">
        <Footer />
      </div>
    </main>
  );
}
