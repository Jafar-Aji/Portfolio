import {motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Liicon from "./Liicon";
const Details= ({position, company, companyLink, time, worktype,work}) =>{
  return(
    <li className="my-8 first:mt-6 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        <Liicon/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5 , type:"spring"}}
        >
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp;<a href={companyLink}
            target={"_blank"}
            className="text-primary capitalize"
            >@{company}</a></h3>
            <span className="capitalize font-medium text-dark/75 xs:text-sm">{time} | {worktype}</span>
            <p className="font-medium w-full md:text-sm">{work}</p>
        </motion.div>
    </li>
  )
}



export default function Experince(){
    const ref = useRef(null)
    const {scrollYProgress}= useScroll(
        {
            target:ref,
            offset:["start end" , "center start"]
        }
    )
    return (
    <div className="my-64">
        <h2 className="font-bold text-8xl mt-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Experince</h2>    
        <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
            <motion.div
            style={{scaleY: scrollYProgress}}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"/>
            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                <Details 
                    position="Front-end developer"
                    company="TradeValley"
                    companyLink="https://www.tradevalley.com"
                    time="(2021–2022)"
                    worktype="Fulltime|Remotly"
                    work="Web developer and designer using Basic Html, CSS, JavaScript, 
                    bootstrap, and many platforms like WordPress and did a lot of email 
                    templates. I have developed the whole company website pages in 
                    one month and designed more than 100 email templates."
                />
                 <Details 
                    position="Front-end developer"
                    company="Digital Edge"
                    companyLink="https://digital-edge.ae/"
                    time="(2019–2021)"
                    worktype="Fulltime|Onside"
                    work="Web developer and designer using Basic Html, CSS, JavaScript 
                    bootstrap, and many platforms such as OpenCart, WordPress, and 
                    Shopify. Also, I have been a manager for the Frontend team and we 
                    had a lot of achievements like we finished a complete 3 websites in 
                    one month."
                />
                 <Details 
                    position="Gaming designing trainer & Volunteer"
                    company="Syrian pioneer "
                    companyLink="https://syria.worldplaces.me/places-in-lattakia/53207005-syrian-pioneers.html"
                    time="(2017–2019)"
                    worktype="Part time|Onside"
                    work="I have had professional course training using Unity3D for more than 3 
                    groups and we created a 3D game at the end of the course.Also, I got involved in many different volunteer activities"
                />
                 <Details 
                    position="Web developer, Designer, Online Services"
                    company="Khamsat,Fiverr,LinkedIn"
                    companyLink="https://syria.worldplaces.me/places-in-lattakia/53207005-syrian-pioneers.html"
                    time="(2018–present)"
                    worktype="Part time|Remotly"
                    work="I provided many online services like Front end Developer and 
                    Converting Images to PDF and Word."
                />
            </ul>
        </div>
    </div>
    
    );
}