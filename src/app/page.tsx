import { Header, Promo, Works, Skills } from "@/components";
export default function Home() {
  return (
    <main className="mx-auto">
      <Header />
      <div className="pt-[40px]">
        <Promo />
      </div>
      <Works />
      <div className="py-[140px]">
        <Skills />
      </div>
    </main>
  );
}
