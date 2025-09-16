"use client";
import Image from "next/image";
import React, { useState } from "react";
import signinIll from "@/public/signin-ill.png";
import bluelogo from "@/public/blueLogo.png";
import Link from "next/link";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    uppercase: false,
    number: false,
  });

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
    return {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
    };
  };

  const checkEmailExists = async (email) => {
    try {
      const res = await fetch(
        `http://localhost:1337/api/users?filters[email][$eq]=${email}`
      );
      const data = await res.json();
      return data?.data?.length > 0;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // validation
    if (!email) newErrors.email = "Email is required";
    else if (!validateEmail(email)) newErrors.email = "Email is invalid";

    const passValidation = validatePassword(password);
    setPasswordValidation(passValidation);
    if (!password) newErrors.password = "Password is required";
    else if (!passValidation.length || !passValidation.uppercase || !passValidation.number)
      newErrors.password = "Password does not meet the requirements";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // login 
    try {
      const res = await fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        identifier: email.trim(), 
        password: password.trim()
      }),
    });

      const data = await res.json();

     if (!res.ok) {
      const errorMessage =
        data.error?.message ||
        (Array.isArray(data.message) ? data.message[0].messages[0].message : null) ||
        "Email or password is incorrect";

      setErrors({ general: "Incorrect email or password. If you don't have an account, please sign up." });
      return;
    }

      localStorage.setItem("token", data.jwt);
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "/";
    } catch (err) {
      console.error("Network error:", err);
      setErrors({ general: "Network err" });
    }
  };

  return (
    <div className="pl-[150px] w-full flex justify-between items-center signup">
      <main className="w-[50%] h-full flex flex-col justify-start items-start gap-y-[150px] pt-[30px]">
        <h1 className="font-bold tracking-[4px] text-[37px] text-[#222831] gap-x-[20px] flex justify-center items-center">
          <Image
            src={bluelogo}
            alt="ChatAi | Ai assistant"
            width={38}
            height={49}
          />
          <span>ChatAi</span>
        </h1>
        <form
          className="flex flex-col justify-between items-center gap-y-[40px] text-[#222831] py-[40px] px-[40px] w-[65%] form"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col justify-center items-center gap-y-[10px]">
            <h1 className="font-[700] text-[30px] tracking-[2%]">
              Lets Sign In into Chat.ai
            </h1>
            <span className="text-[14px] font-[400] tracking-[2%]">
              Don’t have an Account?
              <Link
                href={"/signup"}
                className="font-[500] text-[#324158] no-underline"
              >
                signup
              </Link>
            </span>
          </div>
          <div className="flex flex-col justify-center items-start w-full gap-y-[25px]">
            <div className="flex flex-col justify-center items-start gap-y-[7px] w-full">
              <label htmlFor="email" className="font-[500] text-[17px]">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-[#DFD0B8] border-none text-[15px] font-[300] w-full flex justify-center items-center bg-[#393E46] px-[16px] py-[13px] input outline-none"
              />
              {errors.email && (
                <span className="text-[#972508] text-[14px] font-[300]">
                  {errors.email}
                </span>
              )}
              {errors.general && (
                <span className="text-[#972508] text-[14px] font-[300]">
                  {errors.general}
                </span>
              )}
            </div>
            <div className="flex flex-col justify-center items-start gap-y-[7px] w-full">
              <label htmlFor="Password" className="font-[500] text-[17px]">
                Password
              </label>
              <div className="w-full flex justify-center items-center bg-[#393E46] px-[16px] py-[13px] gap-x-[10px] input">
                <input
                  id="Password"
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-[#DFD0B8] bg-transparent border-none text-[15px] font-[300] w-full"
                />
                <button
                  type="button"
                  className="border-none shadow-none bg-transparent hover:bg-transparent flex justify-center items-center cursor-pointer opacity-[60%]"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  {isPasswordVisible ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.52698 9.2415C1.47522 9.08594 1.47522 8.91781 1.52698 8.76225C2.56723 5.6325 5.51998 3.375 8.99998 3.375C12.4785 3.375 15.4297 5.63025 16.4722 8.7585C16.5247 8.91375 16.5247 9.08175 16.4722 9.23775C15.4327 12.3675 12.48 14.625 8.99998 14.625C5.52148 14.625 2.56948 12.3697 1.52698 9.2415Z"
                        stroke="#DFD0B8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.25 9C11.25 9.59674 11.0129 10.169 10.591 10.591C10.169 11.0129 9.59674 11.25 9 11.25C8.40326 11.25 7.83097 11.0129 7.40901 10.591C6.98705 10.169 6.75 9.59674 6.75 9C6.75 8.40326 6.98705 7.83097 7.40901 7.40901C7.83097 6.98705 8.40326 6.75 9 6.75C9.59674 6.75 10.169 6.98705 10.591 7.40901C11.0129 7.83097 11.25 8.40326 11.25 9Z"
                        stroke="#DFD0B8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.98494 5.16725C2.28328 5.99538 1.7608 6.9599 1.45044 8C2.41944 11.2535 5.43294 13.625 8.99994 13.625C9.74469 13.625 10.4647 13.5215 11.1472 13.3287M4.67094 3.671C5.95542 2.8234 7.461 2.37266 8.99994 2.375C12.5669 2.375 15.5797 4.7465 16.5487 7.9985C16.0177 9.7755 14.8777 11.3087 13.3289 12.329M4.67094 3.671L2.24994 1.25M4.67094 3.671L7.40844 6.4085M13.3289 12.329L15.7499 14.75M13.3289 12.329L10.5914 9.5915C10.8004 9.38255 10.9661 9.13449 11.0792 8.86149C11.1923 8.58848 11.2505 8.29587 11.2505 8.00037C11.2505 7.70488 11.1923 7.41227 11.0792 7.13926C10.9661 6.86626 10.8004 6.6182 10.5914 6.40925C10.3825 6.2003 10.1344 6.03455 9.86143 5.92147C9.58842 5.80839 9.29581 5.75018 9.00031 5.75018C8.70482 5.75018 8.41221 5.80839 8.1392 5.92147C7.8662 6.03455 7.61814 6.2003 7.40919 6.40925M10.5907 9.59075L7.40994 6.41"
                        stroke="#DFD0B8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <>
                  <span className="text-[#972508] text-[14px] font-[300]">
                    {errors.password}
                  </span>

                  <ul className="text-[14px] font-[300] text-[#972508]">
                    <li
                      className={
                        passwordValidation.length ? "text-[#089759]" : ""
                      }
                    >
                      At least 8 characters
                    </li>
                    <li
                      className={
                        passwordValidation.uppercase ? "text-[#089759]" : ""
                      }
                    >
                      Contains uppercase letter
                    </li>
                    <li
                      className={
                        passwordValidation.number ? "text-[#089759]" : ""
                      }
                    >
                      Contains a number
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#393E46] px-[15px] py-[11px] gap-x-[10px] cursor-pointer flex justify-center items-center text-[15px] font-medium text-[#DFD0B8]"
          >
            <span>Sign in</span>
            <svg
              width="21"
              height="9"
              viewBox="0 0 21 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 0.75L19.5 4.5M19.5 4.5L15.75 8.25M19.5 4.5H1.5"
                stroke="#DFD0B8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
      </main>
      <section className="w-[50%] h-full flex justify-center items-center">
        <Image src={signinIll} alt="ChatAi" className="w-[80%] h-auto" />
      </section>
    </div>
  );
}
