export default function Liicon(){
    return(
        <figure className="absolute left-0 stroke-dark ">
            <svg className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" className="stroke-primary stroke-1 fill-none"/>
                <circle cx="75" cy="50" r="20" className=" stroke-[5px] fill-light"/>
                <circle cx="75" cy="50" r="10" className=" stroke-1 fill-primary"/>
            </svg>
        </figure>
    )
}