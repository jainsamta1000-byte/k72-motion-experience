import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Agency() {
  const imgArr=[
   '/img/Carl_480x640.jpg',
   '/img/ChantalG_480x640.jpg',
   '/img/joel_480X640_3.jpg',
   '/img/Olivier_480x640.jpg',
   '/img/MEGGIE_480X640_2.jpg',
   '/img/Michele_480X640.jpg',
   '/img/MEL_480X640.jpg',
   '/img/CAMILLE_480X640_2.jpg'
  ]
   const sectionRef = useRef(null);
   const imgDivRef =useRef(null);
    const imgRef= useRef(null);
  useGSAP(function(){

  const imageScroll = ScrollTrigger.create({
    trigger:sectionRef.current,
    start:'top top',
    end:'bottom bottom',
    scrub:1,
    onUpdate:(event) => {
      const imgIndex = Math.min(Math.floor(event.progress * imgArr.length), imgArr.length - 1);
      if (imgRef.current) imgRef.current.src = imgArr[imgIndex];
    }
  })

  return () => imageScroll.kill();
})
  return (
    
    <div className="w-full min-h-[300vh]">
      <div ref={sectionRef} className="section1 relative min-h-[200vh]">
      <div className="font-[font2] py-1">
      <div  ref={imgDivRef} className=" sticky top-30 ml-[40vw] z-10 overflow-hidden h-[20vw] rounded-3xl w-[15vw] ">
        <img ref={imgRef} className="h-full w-full object-cover rounded-3xl" src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7
        " alt="img1"/>
      </div>
      <div className=" relative mt-[35vh] text-[18vw] text-white leading-[17vw] font-[font1] flex flex-col items-center justify-center">
        <div>SEVEN7Y</div>
        <div>TWO</div>

      </div>
      <div className="text-white text-[3vw] leading-[4vw] pl-[45%]">
        <p className="indent-53">   We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.
          </p>
      </div>


    </div>
    </div>
    <div className="section2 h-screen w-screen"></div>
    </div>
  );
}

export default Agency
