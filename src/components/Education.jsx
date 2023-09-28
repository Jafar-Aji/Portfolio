import {motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Liicon from "./Liicon";
const Details= ({type , time, place, info}) =>{
  return(
    <li className="my-8 first:mt-6 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        <Liicon/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5 , type:"spring"}}
        >
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}&nbsp;</h3>
            <span className="capitalize font-medium text-dark/75 xs:text-sm">{time} | {place}</span>
            <p className="font-medium w-full md:text-sm">{info}</p>
        </motion.div>
    </li>
  )
}



export default function Education(){
    const ref = useRef(null)
    const {scrollYProgress}= useScroll(
        {
            target:ref,
            offset:["start end" , "center start"]
        }
    )
    return (
    <div className="my-64">
        <h2 className="font-bold text-8xl mt-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>    
        <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
            <motion.div
            style={{scaleY: scrollYProgress}}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"/>
            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                <Details 
                    type="Informatics engineering"
                    place="Tishreen University"
                    time="(2015–2020)"
                    info="Web developer and designer using Basic Html, CSS, JavaScript, 
                    bootstrap, and many platforms like WordPress and did a lot of email 
                    templates. I have developed the whole company website pages in 
                    one month and designed more than 100 email templates."
                />
            </ul>
        </div>
    </div>
    
    );
}