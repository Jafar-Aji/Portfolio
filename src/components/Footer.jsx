import React from "react";
import Layout from "./Layout";
import Link from "next/link";
const Footer= () =>{
    return(
        <footer className="w-full font-medium border-t-2 border-solid border-dark text-lg sm:text-base">
            <Layout className="py-8 flex items-center justify-between  lg:flex-col  lg:py-6">
                <span>{new Date().getFullYear()} &copy; All Right Reserved</span>
                <div className="flex items-center lg:py-2">
                  Build with <span className="flex items-center text-lg">&#x26A1;</span>&nbsp;By &nbsp;<Link href={"/"}>Jafar</Link> 
                </div>
                <Link href={"https://www.linkedin.com/in/jafar-aji"} target={"_blank"} className="underline underline-offset-2">Contact</Link>
            </Layout>
        </footer>
    )
}
export default Footer