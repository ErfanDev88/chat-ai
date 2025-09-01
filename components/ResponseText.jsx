import React from "react";

export default function ResponseText({text}) {
  return (
    <div className="w-full flex justify-start items-start pt-[25px] pb-[130px] response">
      <div className="w-fit text-[14px] font-[600] text-[#222831] tracking-[1px] leading-[30px] px-[30px] py-[10px]">
        {text}
      </div>
    </div>
  );
}
