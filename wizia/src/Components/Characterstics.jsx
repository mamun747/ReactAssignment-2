import { CardData1 } from "../Data/data";
import Training from "./Training";

function Characterstics() {
  return (
    <>
    <div className="bg-bg3">
    <div className="p-6 md:p-10 lg:p-[120px] gap-16 flex items-center justify-center flex-wrap">
            {
                CardData1.map((data, i) => (
                    <div key={i}>
                        <img src={data.img} alt="" />
                        <h4 className="pt-6 text-white font-bold text-[28px]">{data.title}</h4>
                        <p className="pt-4 text-gray-400 max-w-[260px]">{data.subtitle}</p>
                    </div>
                ))
            }
        </div>
            <Training/>
        </div>
    </>
  )
}

export default Characterstics;