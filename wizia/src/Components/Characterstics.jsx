import { CardData1 } from "../Data/data";

function Characterstics() {
  return (
    <>
    <div className="p-[120px] bg-bg3 gap-16 flex items-center justify-center">
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
    </>
  )
}

export default Characterstics;