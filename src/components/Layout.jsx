export default function Layout({children , className=""}){
    return(
       <div className={`w-full h-full bg-light p-32 inline-block z-0 xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}>
        { children }
       </div>
    )
}