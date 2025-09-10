"use client";
import React, { useEffect, useState } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import TopicBtn from "../TopicBtn";
import avatar from "@/public/avatar.png";
import loginIll from "@/public/loginILL.png";
import { useRouter } from "next/navigation";

function Sidebar() {
  const router = useRouter();
  const [isOpened, setIsOpened] = useState(true);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const getInitials = (fullName) => {
    if (!fullName) return "";
    const words = fullName.trim().split(" ");
    return words.map((word) => word[0].toUpperCase()).join("");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsLoggedin(true);
      setProfile(getInitials(parsedUser.name));
    }
    console.log(storedUser);
  }, []);

  return (
    <nav className="flex flex-col justify-between w-auto h-screen sidebar py-[25px] px-[20px] pr-[30px] text-[#DFD0B8] relative">
      {isLoggedin ? (
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
              style={{ rotate: "180deg" }}
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
      ) : null}
      <div className="flex flex-col gap-y-[40px] justify-between items-start">
        <h1 className="font-bold tracking-[4px] text-[37px] flex justify-center items-center">
          <Image src={logo} alt="ChatAi | Ai assistant" />
          {isOpened ? <span>ChatAi</span> : null}
        </h1>
        <button
          type="button"
          className=" bg-[#393E46] px-[15px] py-[11px] gap-x-[10px] cursor-pointer flex justify-center items-center text-[14px] font-medium text-[#DFD0B8]"
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

        {isLoggedin ? null : (
          <section className="Sidebarlogin p-[10px] flex flex-col justify-center items-center bg-[#393E46]">
            <Image src={loginIll} alt="ChatAi | Ai assistant" />
            <span className="font-[600] text-[14px]">
              Try Advanced features for free
            </span>
            <p className="font-[300] text-[12px] w-[210px] text-center">
              Get smarter responses, upload files and more by logging in
            </p>

            <div className="flex justify-between items-between gap-x-[20px] mt-[10px]">
              <button
                type="button"
                className="signup text-[#393E46] p-[8px] text-[13px] font-[500] border-none flex items-center justify-center gap-x-[4px] "
                onClick={() => router.push("/signup")}
              >
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 4.75V7.24999M13 7.24999V9.74999M13 7.24999H15.5M13 7.24999H10.5M8.625 3.8125C8.625 4.55842 8.32868 5.27379 7.80124 5.80123C7.27379 6.32868 6.55842 6.62499 5.8125 6.62499C5.06658 6.62499 4.35121 6.32868 3.82376 5.80123C3.29632 5.27379 3 4.55842 3 3.8125C3 3.06658 3.29632 2.35121 3.82376 1.82376C4.35121 1.29632 5.06658 1 5.8125 1C6.55842 1 7.27379 1.29632 7.80124 1.82376C8.32868 2.35121 8.625 3.06658 8.625 3.8125ZM0.5 14.5292V14.4375C0.5 13.0285 1.05971 11.6773 2.056 10.681C3.05228 9.6847 4.40354 9.12499 5.8125 9.12499C7.22146 9.12499 8.57272 9.6847 9.569 10.681C10.5653 11.6773 11.125 13.0285 11.125 14.4375V14.5283C9.52123 15.4942 7.68384 16.0031 5.81167 16C3.86917 16 2.05167 15.4625 0.5 14.5283V14.5292Z"
                    stroke="#393E46"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Sign up
              </button>
              <button
                type="button"
                className="login bg-transparent shadow-none text-[#DFD0B8] p-[8px] px-[11px] text-[13px] font-[500] border-none flex items-center justify-center gap-x-[4px] "
                onClick={() => router.push("/login")}
              >
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4375 6.25732V2.81982C10.4375 2.27282 10.2202 1.74821 9.83341 1.36142C9.44661 0.974623 8.92201 0.757324 8.375 0.757324H2.875C2.32799 0.757324 1.80339 0.974623 1.41659 1.36142C1.0298 1.74821 0.8125 2.27282 0.8125 2.81982V15.1948C0.8125 15.7418 1.0298 16.2664 1.41659 16.6532C1.80339 17.04 2.32799 17.2573 2.875 17.2573H8.375C8.92201 17.2573 9.44661 17.04 9.83341 16.6532C10.2202 16.2664 10.4375 15.7418 10.4375 15.1948V11.7573M7 6.25732L4.25 9.00732M4.25 9.00732L7 11.7573M4.25 9.00732H15.9375"
                    stroke="#DFD0B8"
                    strokeinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Login
              </button>
            </div>
          </section>
        )}

        {isLoggedin ? (
          isOpened ? (
            <div className="w-full flex flex-col justify-center items-start py-[12px] gap-y-[10px] topics">
              <span className="text-[14px] font-light tracking-[2px]">
                Saved Topics
              </span>
              <TopicBtn text={"how to create a database"} />
              <TopicBtn text={"What is nextJS?"} />
              <TopicBtn text={"Best CMS for React"} />
              <TopicBtn text={"A list of popular fonts"} />
            </div>
          ) : null
        ) : null}
      </div>

      {isLoggedin ? (
        <div className="w-full flex justify-start items-center gap-x-[20px] py-[12px] profile">
          <button
            type="button"
            className="bg-[#393E46] gap-x-[15px] py-[9px] px-[16px] cursor-pointer flex justify-center items-center text-[16px] font-medium text-[#DFD0B8]"
          >
            <span className="rounded-full flex justify-center items-center w-[35px] h-[35px] bg-[#DFD0B8] text-[#222831] text-[14px] font-[500] tracking-[1px]">
              {profile}
            </span>
            {isOpened ? (
              <span>
                {user.name}
              </span>
            ) : null}
          </button>
          {isOpened ? (
            <button
              type="button"
              className="cursor-pointer border-none shadow-none bg-transparent hover:bg-transparent"
              onClick={handleLogout}
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
      ) : null}
    </nav>
  );
}

export default Sidebar;
