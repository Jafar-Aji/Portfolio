import { motion } from "framer-motion";
const Skill=({name, x, y}) =>{
 return(
    <motion.div
    className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute
    lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-dark
    "
    whileHover={{ scale: 1.05 }}
    initial={{x:0, y:0}}
    whileInView={{x:x, y:y}}
    transition={{duration:1.5}}
    viewport={{once:true}}
  >
    {name}
  </motion.div>
 )
}

export default function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl  md:mt-32">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circulaLight lg:h-[80vh] sm:h-[60vh] xs:h-50vh
       lg:bg-circulaLightLg md:bg-circularLightMd sm:bg-circularLightSm">
      <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer
          lg:p-6 md:p-4 xs:p-2 xs:text-xs 
          "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="Bootstrap" x="0vw" y="12vw" />
        <Skill name="Tailwind Css" x="-20vw" y="-10vw" />
        <Skill name="React.Js" x="15vw" y="-12vw" />
        <Skill name="Next.Js" x="32vw" y="-5vw" />
        <Skill name="Figma" x="-0vw" y="-20vw" />
        <Skill name="Git" x="-25vw" y="-18vw" />
        <Skill name="OpenCart" x="18vw" y="18vw" />
      </div>
    </>
  );
}
