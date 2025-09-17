import React from 'react'

function SuggestBtn({text, setInput}) {
  return (
    <button onClick={()=>setInput(text)} type="button" className='bg-[#222831] w-full text-[14px] text-[#FFEAC9] font-[200] tracking-[1px] px-[10px] py-[6px] border-none shadow-none cursor-pointer hover:bg-[#1D222A] text-start'>{text}</button>
  )
}

export default SuggestBtn
