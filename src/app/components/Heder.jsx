
'use client'

import Image from "next/image";


import {  useState , useEffect} from "react";



export default function Heder() {
  const [fynts, setfynts] =useState(true)
  const [nav ,setnav] = useState(null)
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prev => !prev);
  const [hovered, setHovered] = useState(null);


   const products = [
    {img:'/img/image 1.png',name:'Joker',kateor:'fantasy,', video:'/img/576048.mp4'},
     {img:'/img/image 2 (2).png',name:'Gentlemen',kateor:'action films',video:'/img/576048.mp4'},
      {img:'/img/image 2.png',name:'Star Wars',kateor:'adventures',video:'/img/576048.mp4'},
       {img:'/img/image 2 (1).png',name:'Joker',kateor:'comedy',video:'/img/576048.mp4'},
        {img:'/img/image 1.png',name:'Joker',kateor:'fantasy,', video:'/img/576048.mp4'},
     {img:'/img/image 2 (2).png',name:'Gentlemen',kateor:'action films',video:'/img/576048.mp4'},
      {img:'/img/image 2.png',name:'Star Wars',kateor:'adventures',video:'/img/576048.mp4'},
       {img:'/img/image 2 (1).png',name:'Joker',kateor:'comedy',video:'/img/576048.mp4'},

        {img:'/img/image 1.png',name:'Joker',kateor:'fantasy,', video:'/img/576048.mp4'},
     {img:'/img/image 2 (2).png',name:'Gentlemen',kateor:'action films',video:'/img/576048.mp4'},
      {img:'/img/image 2.png',name:'Star Wars',kateor:'adventures',video:'/img/576048.mp4'},
       {img:'/img/image 2 (1).png',name:'Joker',kateor:'comedy',video:'/img/576048.mp4'},
        {img:'/img/image 1.png',name:'Joker',kateor:'fantasy,', video:'/img/576048.mp4'},
     {img:'/img/image 2 (2).png',name:'Gentlemen',kateor:'action films',video:'/img/576048.mp4'},
      {img:'/img/image 2.png',name:'Star Wars',kateor:'adventures',video:'/img/576048.mp4'},
       {img:'/img/image 2 (1).png',name:'Joker',kateor:'comedy',video:'/img/576048.mp4'},
        {img:'/img/image 1.png',name:'Joker',kateor:'fantasy,', video:'/img/576048.mp4'},
     {img:'/img/image 2 (2).png',name:'Gentlemen',kateor:'action films',video:'/img/576048.mp4'},
      {img:'/img/image 2.png',name:'Star Wars',kateor:'adventures',video:'/img/576048.mp4'},
       {img:'/img/image 2 (1).png',name:'Joker',kateor:'comedy',video:'/img/576048.mp4'},
        {img:'/img/image 1.png',name:'Joker',kateor:'fantasy,', video:'/img/576048.mp4'},
     {img:'/img/image 2 (2).png',name:'Gentlemen',kateor:'action films',video:'/img/576048.mp4'},
      {img:'/img/image 2.png',name:'Star Wars',kateor:'adventures',video:'/img/576048.mp4'},
       {img:'/img/image 2 (1).png',name:'Joker',kateor:'comedy',video:'/img/576048.mp4'},
        {img:'/img/image 1.png',name:'Joker',kateor:'fantasy,', video:'/img/576048.mp4'},
     {img:'/img/image 2 (2).png',name:'Gentlemen',kateor:'action films',video:'/img/576048.mp4'},
      {img:'/img/image 2.png',name:'Star Wars',kateor:'adventures',video:'/img/576048.mp4'},
       {img:'/img/image 2 (1).png',name:'Joker',kateor:'comedy',video:'/img/576048.mp4'},



        {img:'/img/image 1.png',name:'Joker',kateor:'fantasy,', video:'/img/576048.mp4'},
     {img:'/img/image 2 (2).png',name:'Gentlemen',kateor:'action films',video:'/img/576048.mp4'},
      {img:'/img/image 2.png',name:'Star Wars',kateor:'adventures',video:'/img/576048.mp4'},
       {img:'/img/image 2 (1).png',name:'Joker',kateor:'comedy',video:'/img/576048.mp4'},
       
      
       
   ]




  const filter = () => {
     if(!fynts){
      setfynts(true)
     }
      setfynts(false)
  }


  useEffect(() => {
  setVisibleCount(8); 
}, [selectedGenre]);



    const filteredProducts = selectedGenre === 'All' ? products : products.filter((product) => product.kateor.toLowerCase() === selectedGenre.toLowerCase());

    

    


    const genres = ['All', 'action films', 'adventures', 'comedy', 'fantasy', 'thrillers', 'drama'];

    const navigaat = ['media', 'films', 'actors', 'news', 'categories'];
  return (
    <div className="group relative ">
    <div className="w-[100%]  z-0 h-[100%]  bg-[rgba(30,37,56,1)]" >
    <div className="w-[100%]  z-10 h-[100%]  bg-[url('/img/efe.png')] bg-cover bg-center">

 <div className="flex min-[501px]:hidden">
        {!fynts && (
<div className="fixed inset-0 z-50 bg-[#333333eb] flex flex-col items-center justify-start p-6 space-y-6">

 
  <div className="mb-[100px]  flex">
    <Image
      src="/img/Copilot_20251012_035756.png"
      width={125}
      height={125}
      alt="User Avatar"
      className="w-[125px] min-[400px]:ml-[100px] max-[400px]:ml-[90px] h-[125px] rounded-full shadow-lg"
    />
    <button className=" min-[400px]:ml-[90px] max-[400px]:ml-[70px] text-[25px] text-blue-600" onClick={ () => setfynts(!false)}>X</button>
  </div>
  

  
  <nav className="flex  text-amber-50 flex-wrap mx-[200px] justify-center gap-10">
    {["Media", "Movies", "ACTORS", "NEWS", "CATEGORIES"].map((item) => (
      <a
        key={item}
        href="#"
        className="nosifer-regular text-[17px] text-center transition duration-300 transform hover:text-red-700 hover:underline hover:scale-110"
      >
        {item}
      </a>
    ))}
  </nav>

</div>

)}
 </div>

    <div className="flex  min-[1058px]:justify-center  max-[1058px]:justify-around  2xl:gap-[130px] xl:gap-[70px] max-[500px]:gap-[5px] min-[400px]:mx-[30px] max-[400px]:mx-[10px]">


   <div className="flex gap-[4px] min-[500px]:hidden">


   

    <button onClick={() => {filter(true);setIsOpen(false) }} className="min-[400px]:w-[55px]   max-[400px]:w-[44px] min-[400px]:h-[52px] max-[400px]:h-[42px] min-[400px]:rounded-[20px] max-[400px]:rounded-[15px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-[80px] sm:mt-[80px] mt-[50px]   hover:scale-110 bg-[rgba(255,255,255,1)]">
     <div className=" min-[400px]:ml-[15px]  max-[400px]:ml-[10px]  min-[400px]:mb-[0px] max-[400px]:mb-[3px]">
       <div className="w-[25px] h-[3px] my-[6px] bg-[#608fc5]"></div>
       <div className="w-[25px] h-[3px] my-[6px] bg-[#608fc5]"></div>
        <div className="w-[25px] h-[3px] bg-[#608fc5]"></div>
     </div>
   </button>




   


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
<a href="#" className="nosifer-regular hover:text-red-700 hover:duration-300  hover:underline  hover:scale-115 text-[17px]">CATEGORIES</a>


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
   <button className="w-[138px] cursor-pointer nosifer-regular hover:scale-110 h-[53px] font-semibold text-[#ac1920] hover:text-red-600      rounded-[15px]  shadow-[0_0_10px_2px_rgba(173,216,230,0.6)]     bg-[#f1f1f1] ">
    Enter
   </button>
</div>
</div>
  

  <div className="flex min-[1058px]:hidden">
      <button className=" cursor-pointer min-[500px]:w-[138px] nosifer-regular text-red-700  max-[500px]:w-[90px] min-[500px]:h-[53px] max-[500px]:h-[52px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-[80px] sm:mt-[80px] mt-[50px]   hover:scale-110  font-semibold  rounded-[20px]  shadow-[0_0_10px_2px_rgba(173,216,230,0.6)]  bg-[#f1f1f1] ">
    Enter
   </button>
  </div>
    </div>



  <div className="flex justify-center  ">
     <div className="hidden min-[1420px]:flex">
       <h2 className="text-[38px] text-[#316614] nosifer-regular">Now at the cinema</h2>
     </div>

    <div className="hidden min-[1420px]:flex">
      <div className="w-[60px] mt-[23px] mx-[50px] h-[3px] bg-amber-50"></div>
    </div>
   
<div className="hidden min-[600px]:flex">
    {genres.map((genre, index) => (
  <button onClick={() => {setSelectedGenre(genre);setnav(null);}}  key={index} className={`mx-2  cursor-pointer   nosifer-regular min-[700px]:text-[13px] max-[700px]:text-[10px]  text-[#73848c] hover:text-[#fbff00] hover:underline transition duration-300 ${selectedGenre === genre ? 'text-[#fbff00]':'text-[#73848c]' }   `}>
    {genre}
  </button>
))}
</div>

<div>
</div>


  </div>



<div className="flex flex-col items-center my-8 min-[600px]:hidden">
  <h2 className="nosifer-regular text-[15px] text-[#00e132] mb-4">
    Now at the cinema
  </h2>

  <div className="w-full max-w-xs bg-gray-800 border border-gray-600 rounded-lg shadow-md">
    <button
      onClick={toggleMenu}
      className="w-full flex items-center justify-center py-3 bg-[#008667] text-white rounded-t-lg  transition duration-200"
      aria-label="Toggle menu"
    >
      <span className="text-lg font-bold">☰</span>
    </button>

    {isOpen && (
      <ul className="flex flex-col divide-y divide-gray-700">
        {genres.map((genre, index) => (
          <li key={index}>
            <button
              onClick={() => {
                setSelectedGenre(genre);
                setnav(null);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-[12px] nosifer-regular transition duration-300 
                ${selectedGenre === genre ? 'text-yellow-400 underline' : 'text-gray-300'} 
                hover:text-yellow-300 hover:underline`}
            >
              {genre}
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
</div>


<div>
    <div className="flex justify-center   2xl:mx-[90px] xl:mx-[170px] min-[1000px]:mx-[170px] max-[1200px]:mx-[20px] flex-wrap mt-[50px] min-[500px]:gap-[22px] max-[500px]:gap-[13px]">
    {filteredProducts.slice(0, visibleCount).map((product,index)=> (
<div  key={index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}>


   {hovered === index ? (
            <video
              src={product.video} 
              autoPlay
              muted
              loop
              className="2xl:w-[330px] xl:w-[330px] xl:max-[1453px]:w-[202px]  lg:w-[202px] min-[500px]:w-[202px] max-[500px]:w-[160px]   2xl:h-[440px] xl:h-[440px] xl:max-[1453px]:h-[270px] lg:h-[270px]   min-[500px]:h-[270px]  max-[500px]:h-[212px] rounded-[15px] object-cover"
            />
          ) : (
                        <Image
  src={product.img}
  width={330}
  height={440}
  alt={product.name}
  className=" 2xl:w-[330px] xl:w-[330px] xl:max-[1453px]:w-[202px]  lg:w-[202px] min-[500px]:w-[202px] max-[500px]:w-[160px]   2xl:h-[440px] xl:h-[440px] xl:max-[1453px]:h-[270px] lg:h-[270px]   min-[500px]:h-[270px]  max-[500px]:h-[212px] rounded-[15px] object-cover"
/>
          )}

<h3 className="rye-regular mt-[10px] text-[18px] text-amber-50">{product.name}</h3>
<h3 className="rubik-distressed-regular text-[15px] text-[rgba(242,246,15,1)]">{product.kateor}</h3>


        

      </div>
    )
  

    )}

  </div>
   <div className="flex justify-center">



    
     { !visibleCount < filteredProducts.length  && (
      <button
  onClick={() => {setVisibleCount(visibleCount + 8  );}}
  className="mt-6 nosifer-regular px-6 py-3 rounded-[10px] bg-white text-blue-700 font-semibold shadow-md hover:bg-blue-100 hover:text-blue-900 transition duration-200"
>
  show more
</button>
)}



   </div>



   







  
</div>

  






   





   


    </div>
       
       
    
  
</div>
</div>

  );
}
