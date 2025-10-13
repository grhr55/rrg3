
'use client'

import Image from "next/image";


import {  useState } from "react";



export default function Heder() {

    const navigaat = ['media', 'films', 'actors', 'news', 'categories'];
  return (
<div className=" relative ">
    <div className="w-[100%]  z-0 h-[1100px] bg-[rgba(30,37,56,1)]">
    <div className="w-[100%]  z-10 h-[1100px] bg-[url('/img/efe.png')] bg-cover bg-center">

    <div className="flex  min-[1058px]:justify-center  max-[1058px]:justify-around  2xl:gap-[130px] xl:gap-[70px] max-[500px]:gap-[5px] min-[400px]:mx-[30px] max-[400px]:mx-[10px]">


   <div className="flex gap-[4px] min-[600px]:hidden">


      <a href="#" className="min-[400px]:w-[55px] max-[400px]:w-[44px] min-[400px]:h-[52px] max-[400px]:h-[42px] min-[400px]:rounded-[20px] max-[400px]:rounded-[15px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-[80px] sm:mt-[80px] mt-[50px]   hover:scale-110 bg-[rgba(255,255,255,1)]">

     <div className=" min-[400px]:ml-[15px]  max-[400px]:ml-[10px]  min-[400px]:mt-[15px] max-[400px]:mt-[10px]">
       <div className="w-[25px] h-[3px] my-[6px] bg-[#608fc5]"></div>
       <div className="w-[25px] h-[3px] my-[6px] bg-[#608fc5]"></div>
        <div className="w-[25px] h-[3px] bg-[#608fc5]"></div>
     </div>
   </a>
   </div>



   <div className="flex gap-[4px] min-[1058px]:hidden">


      <a href="#" className="min-[400px]:w-[55px] max-[400px]:w-[44px] min-[400px]:h-[52px] max-[400px]:h-[42px] min-[400px]:rounded-[20px] max-[400px]:rounded-[15px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-[80px] sm:mt-[80px] mt-[50px]   hover:scale-110 bg-[rgba(255,255,255,1)]">

                  <Image
          src="/img/Vector.png"
          width={25}
          height={25}
          alt="User Avatar"
          className=" w-[25px] mx-auto  min-[400px]:mt-[15px] max-[400px]:mt-[10px]  hover:scale-140 transition duration-400 ease-in-out h-[25px]"
        />
   </a>
   </div>
   

 
                    <Image
          src="/img/Copilot_20251012_035756.png"
          width={200}
          height={200}
          alt="Logo"
          className="  2xl:w-[200px] xl:h-[200px] lg:w-[200px] lg:h-[200px] md:h-[200px] md:w-[200px] sm:h-[200px] sm:w-[200px]  min-[400px]:w-[140px] max-[400px]:w-[125px]  min-[400px]:h-[140px] max-[400px]:h-[125px]  xl:w-[200px]   2xl:h-[200px]"
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
   <button className="w-[138px] nosifer-regular hover:scale-110 h-[53px] font-semibold text-[#ac1920] hover:text-red-600      rounded-[15px]  shadow-[0_0_10px_2px_rgba(173,216,230,0.6)]     bg-[#f1f1f1] ">
    Enter
   </button>
</div>
</div>
  

  <div className="flex min-[1058px]:hidden">
      <button className=" min-[500px]:w-[138px] nosifer-regular text-red-700  max-[500px]:w-[90px] min-[500px]:h-[53px] max-[500px]:h-[52px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-[80px] sm:mt-[80px] mt-[50px]   hover:scale-110  font-semibold  rounded-[20px]  shadow-[0_0_10px_2px_rgba(173,216,230,0.6)]  bg-[#f1f1f1] ">
    Enter
   </button>
  </div>
    </div>
   





   


    </div>
       
       
    
  
</div>
</div>

  );
}
