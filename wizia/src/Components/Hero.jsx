import { Button } from "@nextui-org/react"

function Hero() {
  return (
    <>
    <div className="bg-bg w-full lg:px-[120px] lg:py-[110px] flex text-center md:text-left justify-between relative px-5 py-[44px]">
        <div className="z-10">
            <p className="text-[#0FF1F6] text-lg font-[400] font-Montserrat">AI SDRs (aiDRs)</p>
            <h1 className="text-[40px] md:text-[64px] font-Montserrat font-bold text-[#fff] max-w-md leading-none pt-1 pb-[10px]">More <span className="italic font-[500]">leads</span>, less <span className="italic font-[500]">people</span>.</h1>
            <p className="text-lg text-gray-400 max-w-md">Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
            <Button variant="solid" radius="full" className="bg-btnColor font-[500] mt-6" size="lg">Sign Up for the Beta <img src="/arrow.png" alt="" /></Button>
        </div>
            <img className="absolute bottom-0 right-0 w-[1370px]" src="/image2.png" alt="" />
    </div>
    </>
  )
}

export default Hero