import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import  { GithubIcon, LinkedInIcon, TwitterIcon, FacebookIcon } from "./Icons";
import {motion} from "framer-motion"



const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <>
   
  
 
      <Link href={href} className={`${className} relative group `}>
       
       {title}
       <span
         className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
         group-hover:w-full transition-[width] ease duration-300
         ${router.asPath === href ? 'w-full' : 'w-0' }`}
       >
         &nbsp;
       </span>
       
 
      
     </Link>
   
       
 
     
        
   

    </>
    
  );
};





const CustomMobileLink = ({ href, title, className = "" , toggle}) => {
  const router = useRouter();
  const habdlClick =() =>{
    toggle();
    router.push(href)
  }
  return (
    <button href={href} className={`${className} relative group text-light my-3`} onClick={habdlClick}>
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0' }`}
      >
        &nbsp;
      </span>
    </button>
  );
};
const Navbar = () => {
  const [IsOpen, setIsOpen]= useState(false)
  const handleClick= ()=>{
    setIsOpen(!IsOpen)
  }
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8">
      
      <button className=" flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
        <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm   ${IsOpen ? ' rotate-45 translate-y-1' : '-translate-y-0.5' }`}></span>
        <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${IsOpen ? 'opacity-0' : 'opacity-100' }`}></span>
        <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${IsOpen ? ' -rotate-45 -translate-y-1' : 'translate-y-0.5' }`}></span>
      </button>
      
      <div className="w-full flex justify-between items-center lg:hidden">
      <nav>
        <CustomLink href={"/"} title="Home" className="mr-4" />
        <CustomLink href={"/about"} title="About" className="mx-4" />
        <CustomLink href={"/projects"} title="Projects" className="ml-4" />
        
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href={"https://www.linkedin.com/in/jafar-aji/"} target={"_blank"} whileHover={{y :-2}} whileTap={{scale:0.9}} className="w-6 mr-3">
          <LinkedInIcon/>
        </motion.a>
        <motion.a href={"https://github.com/Jafar-Aji"} target={"_blank"} whileHover={{y :-2}} whileTap={{scale:0.9}} className="w-6 mx-3">
          <GithubIcon/>
        </motion.a>
        <motion.a href={"https://www.facebook.com/jafar.aji.58/"} target={"_blank"} whileHover={{y :-2}} whileTap={{scale:0.9}} className="w-6 ml-3">
          <FacebookIcon/>
        </motion.a>
      </nav>
      </div>
     
    
    {
      IsOpen?
      <motion.div 
      initial={{scale:0 , opacity:0, x:"-50%", y:"-50%" }}
      animate={{scale:1, opacity:1}}
      className="min-w-[70vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 backdrop-blur-md py-32">
      <nav className="flex flex-col items-center justify-center">
        <CustomMobileLink href={"/"} title="Home" className="" toggle={handleClick}/>
        <CustomMobileLink href={"/about"} title="About" className="" toggle={handleClick}/>
        <CustomMobileLink href={"/projects"} title="Projects" className="" toggle={handleClick}/>
      </nav>

      <nav className="flex items-center justify-center flex-wrap mt-6">
        <motion.a href={"https://www.linkedin.com/in/jafar-aji"} target={"_blank"} whileHover={{y :-2}} whileTap={{scale:0.9}} className="w-6 mr-3 sm:mx-1">
          <LinkedInIcon/>
        </motion.a>
        <motion.a href={"https://github.com/Jafar-Aji"} target={"_blank"} whileHover={{y :-2}} whileTap={{scale:0.9}} className="w-6 mx-3 bg-light rounded-full sm:mx-1">
          <GithubIcon/>
        </motion.a>
        <motion.a href={"https://www.facebook.com/jafar.aji.58/"} target={"_blank"} whileHover={{y :-2}} whileTap={{scale:0.9}} className="w-6 ml-3 sm:mx-1">
          <FacebookIcon/>
        </motion.a>
      </nav>
      </motion.div>

      :null
    }
    
      
      
     
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
export default Navbar;
