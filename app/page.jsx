"use client";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import laptopIcon from "@/public/laptopIcon.png";
import earthIcon from "@/public/earthIcon.png";
import radioIcon from "@/public/radioIcon.png";
import racecarIcon from "@/public/racecarIcon.png";
import SuggestBtn from "@/components/SuggestBtn";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [error, setError] = useState("");
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError("This field cannot be empty!");
    } else {
      setError("");
      router.push(`/chat?query=${encodeURIComponent(input)}`);
    }
    console.log(input);
  };

  return (
    <main className="m-auto">
      <div className="flex flex-col justify-between items-center gap-y-[70px]">
        <h1 className="text-[50px] font-[700] tracking-[2px] text-[#222831] flex justify-center items-center gap-x-[27px]">
          Welcome to ChatAi
          <svg
            width="76"
            height="81"
            viewBox="0 0 76 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.8188 46.9004C34.5188 46.6004 36.1192 47.7002 36.7192 49.7002C36.9192 50.6001 37.0194 51.6001 36.9194 52.5C36.2194 59 35.5196 65.5 34.6196 72C34.3196 74.7999 33.7192 77.4997 33.2192 80.0996C31.8193 79.8996 31.5188 78.9 31.3188 78C30.9188 75.7 30.4194 73.3996 30.4194 71.0996C30.3195 66.9997 30.4194 62.7995 30.4194 58.5996C30.4194 55.9998 30.4188 53.3 30.3188 50.7002C30.3188 48.5004 31.1192 47.2006 32.8188 46.9004ZM46.4194 40.5996C55.9194 40.2996 65.4195 40.2 74.9194 41C75.1193 41 75.3191 41.1002 75.519 41.2002V41.7998C73.7191 42.1998 71.819 42.8004 70.019 42.9004C62.5193 43.6004 55.1194 44.2998 47.6196 44.7998C46.4196 44.8998 45.0194 44.5996 43.9194 44.0996C42.4195 43.4996 42.5194 41.9002 43.9194 41.2002C44.7194 40.8002 45.6194 40.5996 46.4194 40.5996ZM2.51904 32C3.71904 32.1 4.91963 32.3004 6.11963 32.4004C13.2193 33.2004 20.2191 33.9998 27.3188 34.7998C28.1188 34.8998 28.8196 35.1002 29.6196 35.2002C29.5197 35.5002 29.519 35.7004 29.519 35.9004C26.0191 36.1004 22.519 36.6 19.019 36.5C14.1191 36.5 9.11916 36.2 4.21924 36C3.41927 36 2.61941 35.7996 1.91943 35.5996C0.91956 35.2996 0.319271 34.5002 0.519043 33.4004C0.719027 32.4005 1.51915 32.0001 2.51904 32ZM43.9194 0C44.3193 0.000335969 44.9189 0.999665 45.019 1.59961C45.219 2.7996 45.2188 4.10001 45.3188 5.5C45.1189 7.39999 44.9188 9.30021 44.8188 11.2002C44.6189 15.3001 44.5188 19.3005 44.3188 23.4004C44.2188 24.9002 44.019 26.4 43.519 27.7998C43.019 29.2998 42.0192 30.5 40.2192 30.5C38.4192 30.5 37.5194 29.2998 36.9194 27.7998C35.9195 25.0998 36.0196 22.3 36.6196 19.5C37.6196 14.7 38.7191 9.99978 40.019 5.2998C40.419 3.79988 41.2191 2.29994 42.019 1C42.319 0.5 43.3194 0 43.9194 0Z"
              fill="#222831"
            />
          </svg>
        </h1>
        <form
          className="flex flex-col justify-between items-center gap-y-[30px]"
          onSubmit={handleSubmit}
        >
          <p className="text-[23px] font-[500] text-[#222831] tracking-[1px]">
            What can I help with?
          </p>
          <div className="flex justify-center items-center bg-[#393E46] px-[16px] py-[13px] gap-x-[10px] input">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1.59961V16.5996M16.5 9.09961H1.5"
                stroke="#DFD0B8"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Ask anything"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="text-[#DFD0B8] bg-transparent border-none text-[15px] font-[300] w-[400px]"
            />
            <button
              type="submit"
              className="border-none rounded-full shadow-none bg-[#DFD0B8] flex justify-center items-center w-[30px] h-[30px] hover:bg-[#DFD0B8] cursor-pointer"
             
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.79908 7.09961L1 1.09961C5.3036 2.38412 9.36191 4.41327 13 7.09961C9.36212 9.78589 5.30404 11.815 1.00066 13.0996L2.79908 7.09961ZM2.79908 7.09961H7.73979"
                  stroke="#393E46"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          {error && (
            <span className="-mt-[13px] text-[14px] font-[300] text-[#972508]">
              {error}
            </span>
          )}
        </form>
        <section className="max-w-[800px] flex flex-wrap gap-[30px] justify-center">
          <div className="w-[365px] flex flex-col justify-between items-start p-[15px] gap-y-[23px] bg-[#393E46] suggestion">
            <h1 className="w-full text-[20px] font-[600] tracking-[1px] text-[#DFD0B8] flex justify-between items-start gap-x-[60px]">
              Programming & Tech
              <Image
                src={laptopIcon}
                alt="Programming"
                width={36}
                height={36}
              />
            </h1>
            <div className="flex flex-col gap-y-[10px] justify-center items-start">
              <SuggestBtn
                text={"How to start learning programming?"}
                setInput={setInput}
              />
              <SuggestBtn
                text={"What is Next.js used for?"}
                setInput={setInput}
              />
              <SuggestBtn
                text={"Best laptop for coding?"}
                setInput={setInput}
              />
            </div>
          </div>
          <div className="w-[365px] flex flex-col justify-between items-start p-[15px] gap-y-[23px] bg-[#393E46] suggestion">
            <h1 className="w-full text-[20px] font-[600] tracking-[1px] text-[#DFD0B8] flex justify-between items-start gap-x-[60px]">
              LIfestyle
              <Image src={earthIcon} alt="Programming" width={36} height={36} />
            </h1>
            <div className="flex flex-col gap-y-[10px] justify-center items-start">
              <SuggestBtn
                text={"How to lose weight without exercise?"}
                setInput={setInput}
              />
              <SuggestBtn
                text={"Best way to improve English speaking"}
                setInput={setInput}
              />
              <SuggestBtn
                text={"How to make money online?"}
                setInput={setInput}
              />
            </div>
          </div>
          <div className="w-[365px] flex flex-col justify-between items-start p-[15px] gap-y-[23px] bg-[#393E46] suggestion">
            <h1 className="w-full text-[20px] font-[600] tracking-[1px] text-[#DFD0B8] flex justify-between items-start gap-x-[60px]">
              Content & Media
              <Image src={radioIcon} alt="Programming" width={36} height={36} />
            </h1>
            <div className="flex flex-col gap-y-[10px] justify-center items-start">
              <SuggestBtn
                text={"How to start a YouTube channel?"}
                setInput={setInput}
              />
              <SuggestBtn
                text={"What is AI and how does it work?"}
                setInput={setInput}
              />
            </div>
          </div>
          <div className="w-[365px] flex flex-col justify-between items-start p-[15px] gap-y-[23px] bg-[#393E46] suggestion">
            <h1 className="w-full text-[20px] font-[600] tracking-[1px] text-[#DFD0B8] flex justify-between items-start gap-x-[60px]">
              Cars & Fun
              <Image
                src={racecarIcon}
                alt="Programming"
                width={36}
                height={36}
              />
            </h1>
            <div className="flex flex-col gap-y-[10px] justify-center items-start">
              <SuggestBtn
                text={"What is the fastest car in the world?"}
                setInput={setInput}
              />
              <SuggestBtn
                text={"Tell me a random fun fact"}
                setInput={setInput}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
