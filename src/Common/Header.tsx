import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const cRoutes = [
  {
    path: ["/","/home/"],
    title: "Home",
  },
  {
    path: ["/get-posts/category:Movies/"],
    title: "Search",
  },
  {
    path: ["/about-us/"],
    title: "About Us",
  }
];


const Header = () => {
  const [showNav,setShowNav] = useState(false);
  const router = usePathname();
  const route = useRouter()
  console.log(router)
  return (
    <div className='z-50'>
    <header className="hidden bg-background-header/25 text-sm font-medium md:flex sticky top-0 font-montserrat backdrop-blur-3xl px-8 md:px-16 justify-between">



    
      <span className='mx-6 cursor-pointer hover:text-green-400 text-xl font-semibold my-4' onClick={()=>route.push("/")}>theRARBG</span>

      <div className='hidden md:flex mx-auto font-normal items-center'> 
      {/* router.pathname */}
        {cRoutes.map((obj, i) => (
          <div className={`px-6 uppercase cursor-pointer font-normal ${obj.path.includes(router) ? "border-b-2 border-primary" : ""} h-full flex items-center`} onClick={()=>route.push(`${obj.path[0]}`)} key={i}>
            <p className={`${obj.path.includes(router) ? "text-primary" : ""} hover:text-green-400 h-fit`}>{obj.title}</p>
          </div>
        ))}
      </div>
    <button className='px-5 bg-primary/10 text-primary border-primary my-4 text-xs hover:bg-primary/30' style={{border:"solid 0.5px",fontWeight:"400"}} onClick={()=>route.push("/login")}  >Login</button>
    </header>
      {/*Mobile Hamburger Menu */}
      <div className={`${showNav?"h-screen":"h-[60px]"} transition-all ease-in-out duration-500 z-20   md:hidden bg-background-header/25 w-full fixed top-0 font-montserrat backdrop-blur-3xl px-8 md:px-16 flex flex-col`}>
        <div className='h-[60px] w-full flex justify-between items-center'>
        <span className='mx-6 cursor-pointer hover:text-green-400 text-xl font-semibold' onClick={()=>route.push("/")}>theRARBG</span>
        <img src='/navIcon.png' alt="The Navigation Icon" className='w-8 h-8 cursor-pointer' onClick={() => setShowNav(!showNav)}/>  
        </div>
        <div className={`${showNav?"opacity-100":" opacity-0 h-0"} transition-all duration-500 ease-in-out  grow w-full flex flex-col pt-44 items-center gap-5`}>
        {cRoutes.map((obj, i) => (
          <div className={`uppercase cursor-pointer text-5xl font-normal flex justify-center items-center ${obj.path.includes(router) ? "border-b-2 border-primary " : ""} `} onClick={()=>{route.push(`${obj.path[0]}`); setShowNav(false)}} key={i}>
            <p className={`${obj.path.includes(router) ? "text-primary" : ""} hover:text-green-400`}>{obj.title}</p>
          </div>
        ))}
        </div>
      </div>
  
    </div>
  );
};

export default Header
