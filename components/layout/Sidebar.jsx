"use client";
import React, { useState } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import TopicBtn from "../TopicBtn";
import avatar from "@/public/avatar.png";

function Sidebar() {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <nav className="flex flex-col justify-between w-auto h-screen sidebar py-[25px] px-[20px] pr-[30px] text-[#DFD0B8] relative">
      <button
        onClick={() => setIsOpened(!isOpened)}
        type="button"
        className="w-[33px] h-[30px] border-none absolute right-[-10px] top-[4%] cursor-pointer flex justify-center items-center bg-[rgba(57,62,70,0.50)] backdrop-blur-[4px] navigator"
      >
        {isOpened ? (
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 14.5L1 8L9 1.5"
              stroke="#DFD0B8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{rotate: '180deg'}}
          >
            <path
              d="M9 14.5L1 8L9 1.5"
              stroke="#DFD0B8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      <div className="flex flex-col gap-y-[40px] justify-between items-start">
        <h1 className="font-bold tracking-[4px] text-[37px] flex justify-center items-center">
          <Image src={logo} alt="ChatAi | Ai assistant" />
          {isOpened ? <span>ChatAi</span> : null}
        </h1>
        <button
          type="button"
          className="bg-[#393E46] px-[15px] py-[11px] gap-x-[10px] cursor-pointer flex justify-center items-center text-[14px] font-medium text-[#DFD0B8]"
        >
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0517 4.23916L15.4575 2.83249C15.7506 2.53943 16.148 2.37479 16.5625 2.37479C16.977 2.37479 17.3744 2.53943 17.6675 2.83249C17.9606 3.12556 18.1252 3.52304 18.1252 3.93749C18.1252 4.35195 17.9606 4.74943 17.6675 5.04249L8.81833 13.8917C8.37777 14.332 7.83447 14.6556 7.2375 14.8333L5 15.5L5.66667 13.2625C5.8444 12.6655 6.16803 12.1222 6.60833 11.6817L14.0517 4.23916ZM14.0517 4.23916L16.25 6.43749M15 12.1667V16.125C15 16.6223 14.8025 17.0992 14.4508 17.4508C14.0992 17.8024 13.6223 18 13.125 18H4.375C3.87772 18 3.40081 17.8024 3.04917 17.4508C2.69754 17.0992 2.5 16.6223 2.5 16.125V7.37499C2.5 6.87771 2.69754 6.4008 3.04917 6.04917C3.40081 5.69754 3.87772 5.49999 4.375 5.49999H8.33333"
              stroke="#DFD0B8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {isOpened ? <span>New Chat</span> : null}
        </button>
        {isOpened ? (
          <div className="w-full flex flex-col justify-center items-start py-[12px] gap-y-[10px] topics">
            <span className="text-[14px] font-light tracking-[2px]">
              Saved Topics
            </span>
            <TopicBtn text={"how to create a database"} />
            <TopicBtn text={"What is nextJS?"} />
            <TopicBtn text={"Best CMS for React"} />
            <TopicBtn text={"A list of popular fonts"} />
          </div>
        ) : null}
      </div>

      <div className="w-full flex justify-start items-center gap-x-[20px] py-[12px] profile">
        <button
          type="button"
          className="bg-[#393E46] gap-x-[15px] py-[9px] px-[16px] cursor-pointer flex justify-center items-center text-[16px] font-medium text-[#DFD0B8]"
        >
          <Image src={avatar} alt="ChatAi | Ai assistant" />
          {isOpened ? <span>Erfan Rezaie</span> : null}
        </button>
        {isOpened ? (
          <button
            type="button"
            className="cursor-pointer border-none shadow-none bg-transparent"
          >
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0909 8.5V4.125C13.0909 3.42881 12.8179 2.76113 12.332 2.26884C11.8462 1.77656 11.1872 1.5 10.5 1.5H3.59091C2.90376 1.5 2.24475 1.77656 1.75886 2.26884C1.27297 2.76113 1 3.42881 1 4.125V19.875C1 20.5712 1.27297 21.2389 1.75886 21.7312C2.24475 22.2234 2.90376 22.5 3.59091 22.5H10.5C11.1872 22.5 11.8462 22.2234 12.332 21.7312C12.8179 21.2389 13.0909 20.5712 13.0909 19.875V15.5M16.5455 15.5L20 12M20 12L16.5455 8.5M20 12H5.31818"
                stroke="#DFD0B8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ) : null}
      </div>
    </nav>
  );
}

export default Sidebar;
