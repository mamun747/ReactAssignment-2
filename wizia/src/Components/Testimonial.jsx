import { useState } from 'react'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import Allocate from './Allocate';
const slides = [
    {
        img: "quote.png",
        title: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        name: "Sarah Johnson",
        position: "CEO @ BrightFuture Inc."
    },
    {
        img: "quote.png",
        title: "Innovation distinguishes between a leader and a follower. Embrace change and lead forward.",
        name: "Michael Carter",
        position: "Head of Innovation @ NextGen Solutions"
    },
    {
        img: "quote.png",
        title: "Great things in business are never done by one person. They’re done by a team of people.",
        name: "Emily Taylor",
        position: "Co-Founder @ Synergy Works"
    }
    
];
function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        setCurrentIndex((prevSlide) => prevSlide === 0 ? slides.length - 1 : prevSlide - 1);
    };
    const nextSlide = () => {
        setCurrentIndex((prevSlide) => prevSlide === slides.length - 1 ? 0 : prevSlide + 1)
    };
    const {img, title, name, position} = slides[currentIndex];
  return (
    <>
    <div className='z-40 pt-[90px] pb-20 px-6 md:px-[120px] bg-bg3 flex items-center justify-between mb-20'>
        <button className='p-3 rounded-lg text-[#96ACAF] bg-[#96ACAF]/20 hover:text-[#0FF1F6] transition-all hidden md:block' onClick={prevSlide}><FaArrowLeft/></button>
    <div className='flex items-center flex-col'>
        <img src={img} alt="" />
        <h1 className='text-2xl md:text-[32px] font-work font-[300] text-center max-w-[1000px] pt-[44px] text-gray-400'>{title}</h1>
        <div className='pt-10'>
            <p className='bg-btnColor bg-clip-text text-transparent font-[600] text-lg md:text-xl font-work text-center'>{name}</p>
            <p className='text-[#96ACAF] text-base md:text-lg font-[400] font-work text-center'>{position}</p>
        </div>
        <div className='pt-11 flex gap-3'>
            {
                slides.map((_, index) => (
                    <div className={`cursor-pointer w-2.5 h-2.5 rounded-full ${index === currentIndex ? 'bg-btnColor' : 'bg-[#394648]' }`} key={index} onClick={() => setCurrentIndex(index)}>
                    </div>
                ))
            }
        </div>
        </div>
        <button className='p-3 rounded-lg text-[#96ACAF] bg-[#96ACAF]/20 hover:text-[#0FF1F6] transition-all hidden md:block' onClick={nextSlide}><FaArrowRight/></button> 
    </div>
    <Allocate/>
    </>
  )
}

export default Testimonial