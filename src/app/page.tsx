import { Header, Promo } from "@/components";
export default function Home() {
  return (
    <main className="mx-auto">
      <Header />
      <div className="pt-[120px]">
        <Promo />
      </div>
    </main>
  );
}
