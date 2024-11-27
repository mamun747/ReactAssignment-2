import { Button } from "@nextui-org/react"

function Starting() {
  return (
    <>
    <div className="py-[96px] flex flex-col items-center gap-[23px] px-6 md:px-0">
        <h4 className="font-Montserrat text-text3 text-base md:text-xl font-[400] text-center leading-none">GET STARTED</h4>
        <h2 className="font-Montserrat font-[500] italic text-white text-[36px] text-center leading-none">Embrace <span className="not-italic font-bold text-[36px]">the new era of</span> outbound.</h2>
        <p className="font-work text-lg md:text-xl text-white w-full max-w-[530px] text-center leading-none">Wizia lets you train, activate, and optimize aiDRs. Take your outbound to new levels of performance and efficiency.</p>
        <Button variant="solid" radius="full" className="bg-btnColor font-[500] mt-6 w-full md:w-[216px]" size="lg">Sign Up for the Beta <img src="/arrow.png" alt="" /></Button>
    </div>
    </>
  )
}

export default Starting;