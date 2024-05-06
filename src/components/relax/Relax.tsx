"use client";
import ButtonRelax from "../common/BTNrelax/BTNrelax";
import "../../styles/globals.css";
export default function Relax() {
  return (
    <main id="relax" className="mx-auto">
      <div className="w-full h-[800px] flex justify-center items-center">
        <div
          className={` bg-[var(--second-color)]  flex flex-row w-[75%] h-[75%] rounded-[16px] relative border-[2px] `}
        >
          <div
            className={`bg-[var(--second-color)] w-[85%] h-full rounded-[12px] relative overflow-hidden flex flex-col justify-start `}
          >
            <div className="w-[350px] h-[20%] pl-[40px] flex flex-row items-center">
              <div
                style={{ fontFamily: "Stark" }}
                className={` bg-[var(--text-color)] text-[var(--background-fon)] w-[60px] h-[60px] rounded-[4px]  flex justify-center items-center text-[32px]`}
              >
                CK
              </div>
              <p
                style={{ fontFamily: "Caviar" }}
                className={`text-[var(--text-color)] pl-[20px] tracking-[8px] text-[14px]`}
              >
                CREATOR <br /> KUBA
              </p>
            </div>
            <div className="w-[350px] h-[50%]  flex flex-col justify-center gap-[20px] ">
              <p
                style={{ fontFamily: "Caviar" }}
                className={`text-[44px] pl-[40px] text-[var(--text-color)]`}
              >
                FOR <br /> RELAXATION
              </p>
              <p
                style={{ fontFamily: "Acline" }}
                className={`pl-[40px] text-[16px] text-[var(--text-color)]`}
              >
                While deeply engrossed in coding, I frequently find myself
                immersed in the captivating melodies of the following songs or
                compositions.
              </p>
            </div>
            <div className=" w-[350px] h-[30%]  flex flex-col justify-center pl-[40px]">
              <ButtonRelax />
            </div>
          </div>
          <div
            className={`bg-[var(--background-fon)] border-x-[2px] rounded-r-[12px] w-[15%] h-full ]`}
          ></div>
          <div
            className={` border-[8px] w-[782px] h-[75%] overflow-hidden  absolute right-[-120px] top-[50%] translate-y-[-50%] rounded-[16px]`}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/FFfdyV8gnWk?si=gW0OcY76XhiEXy1L"
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
