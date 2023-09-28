export default function SpinAnimate() {
  return (
    <>
    <div className="flex justify-center items-center bg-red-400 w-[400px] h-[400px] ">
    <div className="bg-dark relative overflow-hidden w-[200px] h-[200px] before:content-[' ']
     before:animate-fullspin before:absolute before:bg-[conic-gradient(transparent,transparent,transparent,#00ccff)]
    before:z-10  before:w-[300px] before:h-[300px] before:top-[-20%] before:left-[-20%] 
    after:w-[190px] after:h-[190px] after:absolute after:left-[2%] 
    after:top-[2%] after:bottom-[2%] after:right-[2%] after:z-20 after:bg-blue-900">
        
        
     </div>
    </div>
     
    </>
  );
}
