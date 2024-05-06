import { Header, Promo, Works, Skills, Footer } from "@/components";
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
      {/* <Relax /> */}
      <div className="pt-[160px]">
        <Footer />
      </div>
    </main>
  );
}
