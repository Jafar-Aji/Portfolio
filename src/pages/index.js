import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect.1";
export default function Home() {
  return (
    <>
      <Head>
        <title>JAFAR AJI </title>
        <meta name="description" content="Portfolio" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full  p-32 md:p-20 md:mt-4">
              <Image
                src={profilePic}
                alt="JafarAji"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width : 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text={"Turning Vision Into Reality With Code And Design. "}
                className="!text-6xl !text-left xl:!text-5xl lg:!text-6xl lg:!text-center md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled FrontEnd developer, I am dedicated to turning ideas
                into innovative web applications. Explore my latest projects and
                articles, showcasing my expertise in React.js , Next.js and web
                development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Jafar-Aji.pdf"
                  target={"_blank"}
                  className="flex items-center p-2.5 px-6 rounded-lg bg-dark text-light text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:text-base md:px-4"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:jafaraji769@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg capitalize underline text-dark font-medium md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
