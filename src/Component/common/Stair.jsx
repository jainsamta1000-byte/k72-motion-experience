import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from "react";
import { useLocation } from 'react-router-dom';

 export default function Stair({ children, trigger }) {
     const stairParentRef = useRef(null);
     const appRef=useRef(null);
    const currentPath= useLocation().pathname;
    useGSAP(function () {
        const tl = gsap.timeline();
        const q = gsap.utils.selector(stairParentRef);

        tl.to(stairParentRef.current, {
            display: 'block',
        })

        tl.from(q('.stair'), {
            height: 0,
            stagger: {
                amount: -0.2,
            }
        })
        tl.to(q('.stair'), {
            y:'100%',
            stagger:{
                amount:-0.25,
            }
        

        })
        tl.to(stairParentRef.current, {
        display:'none',
        })
        tl.to(q('.stair'),{
            y:'0',
        })
    gsap.from(appRef.current, {
        opacity:0,
        delay:1.3,
        scale:1.2,
    })

    },[currentPath, trigger])
    return (
    <div className='h-screen w-screen overflow-hidden'>
            <div ref={stairParentRef} className='h-screen w-screen z-10 fixed top-0'>
            <div className='h-full flex top-0 fixed w-full'>
                <div className='h-full w-1/5 stair bg-black'></div>
                <div className='h-full w-1/5 stair bg-black'></div>
                <div className='h-full w-1/5 stair bg-black'></div>
                <div className='h-full w-1/5 stair bg-black'></div>
                <div className='h-full w-1/5 stair bg-black'></div>
            </div>
        </div>
         <div ref={appRef} >
            {children}
         </div>
    </div>
    );
}

