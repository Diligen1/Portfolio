"use client";
import { Ticker, Workers } from "@/components";
export default function Works() {
  return (
    <main className="mx-auto">
      <div className={` w-full h-[700px]`}>
        <Ticker />
        <div>{/* <Workers /> */}</div>
      </div>
    </main>
  );
}
