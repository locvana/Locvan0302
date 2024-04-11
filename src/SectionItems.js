import Carousel from "./components/Carousel"
import Film from './assets/2duatre.png';
import React, { useState } from 'react';

function SectionItems(props) {

    const [click, setClick] = useState(true);
    const [mouseDown, setMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const sliderRef = React.useRef(null);

    const startDragging = (e) => {
        e.preventDefault();
        setMouseDown(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const stopDragging = () => {
        setMouseDown(false);
    };

    const move = (e) => {
        e.preventDefault();
        if (!mouseDown) return;
        setClick(false);
        const x = e.pageX - sliderRef.current.offsetLeft;
        const scroll = x - startX;
        sliderRef.current.scrollLeft = scrollLeft - scroll;
        setTimeout(() => {setClick(true)}, 1000)
    };

    return(
        <>
            <div className='flex items-center gap-8'>
                <svg className="lg:hidden" xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none"
                    onMouseEnter={(e) => e.currentTarget.querySelector('path').setAttribute('stroke','#F6AA50')} 
                    onMouseLeave={(e) => e.currentTarget.querySelector('path').setAttribute('stroke','white')} 
                    onClick={() => props.back(2)}>
                    <path d="M9.42105 17L1 9M1 9L9.42105 1M1 9H21.2105" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className="hidden lg:block" xmlns="http://www.w3.org/2000/svg" width="54" height="44" id="sad" viewBox="0 0 54 44" fill="none" 
                    onMouseEnter={(e) => e.currentTarget.querySelector('path').setAttribute('stroke','#F6AA50')} 
                    onMouseLeave={(e) => e.currentTarget.querySelector('path').setAttribute('stroke','white')} 
                    onClick={() => props.back(2)}>
                    <path d="M23 41L3 22M3 22L23 3M3 22H51" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className='capitalize text-3xl font-medium lg:text-[50px] 2xl:text-7xl'>{props.name}</span>
            </div>
            {props.item != 4 ? (
                <div className='flex gap-5 overflow-x-scroll overflow-y-hidden lg:gap-16 cursor-pointer' id="scroll"
                    ref={sliderRef} onMouseMove={move} onMouseDown={startDragging} onMouseUp={stopDragging} onMouseLeave={stopDragging}>
                    <Carousel clicked={click} item={props.item}/>
                </div>
            ) : (
                <div className="relative h-4/5 m-auto border-4 border-solid border-white lg:w-3/5 cursor-pointer" onClick={() => window.open('https://www.behance.net/VanLoc-Designer', '_blank')}>
                    <img src={Film} className="h-full w-full object-cover"/>
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <g clipPath="url(#clip0_312_5555)">
                            <rect width="80" height="80" rx="40" fill="#F6AA50"/>
                            <path d="M26.666 16.6665V63.3332L63.3327 39.9998L26.666 16.6665Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_312_5555">
                                <rect width="80" height="80" rx="40" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            )}
            
        </>
    )
}

export default SectionItems