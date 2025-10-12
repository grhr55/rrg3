
'use client'

import Image from "next/image";


import {  useState } from "react";



export default function Heder() {

    const navigaat = ['media', 'films', 'actors', 'news', 'categories'];
  return (
<div className=" relative ">
    <div className="w-[100%]  z-0 h-[1100px] bg-[rgba(30,37,56,1)]">
    <div className="w-[100%]  z-10 h-[1100px] bg-[url('/img/efe.png')] bg-cover bg-center">

    <div className="flex  min-[1058px]:justify-center  max-[1058px]:justify-around  2xl:gap-[130px] xl:gap-[70px] max-[500px]:gap-[20px] mx-[30px]">


   <div className="flex gap-[4px] min-[1058px]:hidden">
             <Image
          src="/img/Меню.png"
          width={28}
          height={27}
          alt="User Avatar"
          className=" w-[28px]  mx-auto mt-[15px] hover:scale-140 transition duration-400 ease-in-out h-[27px]"
        />
         

                  <Image
          src="/img/Поиск.png"
          width={28}
          height={27}
          alt="User Avatar"
          className=" w-[28px] mx-auto mt-[15px] hover:scale-140 transition duration-400 ease-in-out h-[27px]"
        />
  
   </div>

 
                    <Image
          src="/img/Copilot_20251012_035756.png"
          width={200}
          height={200}
          alt="Logo"
          className="  2xl:w-[200px] xl:h-[200px] lg:w-[200px] lg:h-[200px] md:h-[200px] md:w-[200px] sm:h-[200px] sm:w-[200px]  w-[100px] h-[100px] xl:w-[200px]   2xl:h-[200px]"
        />
        

   

  <div className=" hidden min-[1058px]:flex">
             <div className='flex justify-center  pt-[100px]  h-[5px] 2xl:gap-[70px] xl:gap-[50px] gap-[30px] text-[20px]    text-amber-50'>

<a href="#" className="nosifer-regular hover:text-red-700 hover:duration-300 hover:underline  hover:scale-115 text-[17px]">Media</a>
<a href="#" className="nosifer-regular hover:text-red-700 hover:duration-300 hover:underline  hover:scale-115 text-[17px]">Movies</a>
<a href="#" className="nosifer-regular hover:text-red-700 hover:duration-300 hover:underline hover:scale-115 text-[17px]">ACTORS</a>
<a href="#" className="nosifer-regular hover:text-red-700 hover:duration-300 hover:underline  hover:scale-115 text-[17px]">NEWS</a>
<a href="#" className="nosifer-regular  hover:text-red-700 hover:duration-300  hover:underline  hover:scale-115 text-[17px]">CATEGORIES</a>


   </div>
  </div>
<div className="hidden min-[1058px]:flex">
    <div className="flex mt-[80px]    gap-[12px]"> 
       <a href="#" className="w-[55px] h-[52px] rounded-[20px]  hover:scale-110 bg-[rgba(255,255,255,1)]">

                  <Image
          src="/img/Vector.png"
          width={25}
          height={25}
          alt="User Avatar"
          className=" w-[25px] mx-auto mt-[15px] hover:scale-140 transition duration-400 ease-in-out h-[25px]"
        />
   </a>
   <button className="w-[138px] hover:scale-110 h-[53px] font-semibold text-[rgba(255,255,255,1)] rounded-[15px]  shadow-[0_0_10px_2px_rgba(173,216,230,0.6)]     bg-[rgba(54,87,203,1)] ">
    Войти
   </button>
</div>
</div>
  

  <div className="flex min-[1058px]:hidden">
      <button className=" min-[500px]:w-[138px]  max-[500px]:w-[90px] min-[500px]:h-[53px] max-[500px]:h-[30px]  hover:scale-110  font-semibold text-[rgba(255,255,255,1)] rounded-[15px]  shadow-[0_0_10px_2px_rgba(173,216,230,0.6)]  bg-[rgba(54,87,203,1)] ">
    Войти
   </button>
  </div>
    </div>
   





   


    </div>
       
       
    
  
</div>
</div>

  );
}
