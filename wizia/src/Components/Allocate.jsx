const data = [
    {
        parcentage: "32%",
        title: "Improvement in Open Rates",
    },
    {
        parcentage: "75%",
        title: "Improvement in Ramp Time",
    },
    {
        parcentage: "35%",
        title: "Improvement in Meetings Booked",
    },
]
function Allocate() {
  return (
    <>
    <div className="pt-[32px] md:pt-[69px] pb-[32px] md:pb-[92px] pl-6 md:pl-[72px] pr-6 md:pr-0 bg-bg2 relative mx-6 md:mx-12 rounded-3xl">
        <div className="pb-[30px] md:pb-[94px]">
            <h2 className="text-[28px] md:text-[32px] font-Montserrat font-semibold md:max-w-[560px] text-white">Allocate effort where your reps make an inpact.</h2>
            <h3 className="font-[500] text-text3 italic text-[28px] md:text-[32px]">Let us handle the rest.</h3>
            <p className="text-xl font-work text-gray-400 pt-[17px] md:max-w-2xl">Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>
        </div>
        <div className="flex gap-[32px] flex-col md:flex-row">
            {
                data.map((value, index) => (
                    <div key={index} className="md:w-[174px] z-50">
                        <h2 className="text-text3 font-bold text-[40px] leading-[52px]">{value.parcentage}</h2>
                        <p className="text-xl text-[#E9EEF1] font-[500] font-Montserrat pt-2.5">{value.title}</p>
                    </div>
                ))
            }
        </div>
        <img src="/image5.png" className="absolute bottom-0 right-0 md:-z-10 lg:z-0" alt="" />
    </div>
    </>
  )
}

export default Allocate