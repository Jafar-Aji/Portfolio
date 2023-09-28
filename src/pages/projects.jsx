import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import heratawoer from "../../public/images/projects/Hearatowera.png";
import harmony from "../../public/images/projects/Harmony.png";
import porject3 from "../../public/images/projects/ProtFile.png"
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProjects = ({ type, title, summary, link, img }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    ">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden px-4 lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto rounded-lg border border-solid border-dark"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between px-6 py-10 lg:w-full lg:pl-0 lg:pt-6">
        <Link href={link} target="_blank">
          <h2 className="text-lg text-dark font-bold hover:underline underline-offset-2 sm:text-sm">
            {title}
          </h2>
        </Link>
        <span className="text-primary font-medium text-xl my-2 xs:text-base">{type}</span>
        <p className="my-1 font-medium">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link
            href={link}
            target="_blank"
            className="flex items-center p-1.5 px-6 rounded-lg bg-dark text-light  font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark sm:px-4 sm:text-base"
             
             >
            Visit Site <LinkArrow className={"!w-3 ml-1"} />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-3xl border border-solid border-dark bg-light shadow-2xl relative
     xs:p-4
    ">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden "
      >
        <Image src={img} alt={title} className="w-full h-auto rounded-t-3xl" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between px-4 py-6 ">
        <Link href={link} target="_blank">
          <h2 className="text-lg text-dark font-bold hover:underline underline-offset-2 lg:text-2xl  ">
            {title}
          </h2>
        </Link>
        <span className="text-primary font-medium my-2 lg:text-lg md:text-base">{type}</span>
        <div className="mt-2 flex items-center">
          <Link
            href={link}
            target="_blank"
            className="flex items-center p-1.5 px-6 rounded-lg bg-dark text-light  font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
            md:text-base
            "
          >
            Visit Site <LinkArrow className={"!w-3 ml-1"} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Jafar Aji | Projects</title>
        <meta name="describtion" content="descrebtion" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProjects
                title="Cars Comapny React "
                type="This Project was built while i was learning React.Js "
                img={porject3}
                summary="A CarTestApp was built using Html | Css | JavaScript | Bootstrap |React.js. 
                    It shows detail about famous cars comanies in the world.
                    Responsive design is working on  right now with some optimaizations like Easy and fast loading.  
                    "
                link="https://github.com/Jafar-Aji/ReactCar-App"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="HeraTawoer Landing Page"
                type="This Project was built while I was in Digital Edge Front End Team using Html,Css,Bootstrap and JavaScript."
                img={heratawoer}
                link="https://dubai-properties.net/offers/heratower"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Harmony Landing Page"
                type="This Project was built while I was in Digital Edge Front End Team using Html,Css,Bootstrap and JavaScript."
                img={harmony}
                link="https://dubai-properties.net/offers/harmony"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
