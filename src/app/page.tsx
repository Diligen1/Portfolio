import { Header, Promo } from "@/components";
export default function Home() {
  return (
    <main className="mx-auto">
      <Header />
      <div className="pt-[40px]">
        <Promo />
      </div>
    </main>
  );
}
