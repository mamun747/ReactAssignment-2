function Training() {
    const featuresLeft = [
        "Quick to ramp",
        "Quick to scale up",
      ];
    
      const featuresRight = [
        "Easy to optimize",
        "Works with all your existing tools",
      ];
  return (
    <>
    <div className="bg-bg2 py-[32px] lg:py-[144px] mx-6 md:mx-8 lg:mx-[48px] rounded-3xl flex flex-col px-[14px] md:px-0 md:items-center relative">
        <div className="z-20">
            <h1 className="font-[600] font-Montserrat text-white text-[28px] md:text-[40px]">Train your aiDR on your...</h1>
            <h4 className="bg-btnColor bg-clip-text text-transparent italic font-[500] text-[28px] md:text-[40px] font-Montserrat pb-6 md:pb-[30px]">prefered email st|</h4>
            <p className="text-gray-400 text-lg md:text-2xl max-w-md">You’re in control. Train your aiDR on elements of your Marketing strategy.</p>
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-2 text-teal-300 pt-[30px] lg:pt-[64px] z-10">
      {/* Left Column */}
      <div className="flex flex-col lg:gap-4">
        {featuresLeft.map((feature, index) => (
          <div className="flex items-center gap-2" key={index}>
            <img src="/check.png" alt="" />
            <span className="font-[500] text-xl font-Montserrat">{feature}</span>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="flex flex-col lg:gap-4">
        {featuresRight.map((feature, index) => (
          <div className="flex items-center gap-2" key={index}>
            <img src="/check.png" alt="" />
            <span className="font-[500] text-xl font-Montserrat">{feature}</span>
          </div>
        ))}
      </div>
    </div>

    <img src="/image4.png" className="absolute right-0 md:left-0 bg-bg2 bottom-0" alt="" />
    </div>
    </>
  )
}

export default Training;