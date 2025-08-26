import React from 'react'

function TopicBtn({text}) {
  return (
    <button type="button" className="text-[15px] w-full flex justify-start text-[#DFD0B8] py-[8px] px-[19px] bg-[rgba(57,62,70,0.83)] shadow-none backdrop-blur-[8px] cursor-pointer">{text}</button>
  )
}

export default TopicBtn
