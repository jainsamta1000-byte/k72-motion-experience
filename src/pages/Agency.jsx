import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Agency() {
  const imgArr = [
    '/img/Carl_480x640.jpg',
    '/img/ChantalG_480x640.jpg',
    '/img/joel_480X640_3.jpg',
    '/img/Olivier_480x640.jpg',
    '/img/MEGGIE_480X640_2.jpg',
    '/img/Michele_480X640.jpg',
    '/img/MEL_480X640.jpg',
    '/img/CAMILLE_480X640_2.jpg',
  ];

  const imgDivRef = useRef(null);
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.to(imgDivRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: imgDivRef.current,
        start: 'top 20%',
        end: 'bottom -100%',
        scroller: sectionRef.current,
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const imgIndex = Math.min(
            Math.floor(self.progress * imgArr.length),
            imgArr.length - 1
          );
          if (imgRef.current) {
            imgRef.current.src = imgArr[imgIndex];
          }
        },
      },
    });
  }, { scope: sectionRef });

  return (
    <div className="h-screen w-screen">

      <div
        ref={sectionRef}
        className="h-full overflow-y-auto bg-black"
      >
        <div className="font-[font2] relative min-h-[300vh] w-full">

          <div
            ref={imgDivRef}
            className="sticky top-[10%]  ml-[10vw] lg:ml-[30vw] mt-[5vh] left-10 lg:left-[30%]
            w-[30vw] h-[30vw]  lg:h-[20vw] lg:w-[15vw] rounded-3xl overflow-hidden z-0"
          >
            <img
              ref={imgRef}
              className="w-full h-full object-cover rounded-3xl"
              src="/img/Carl_480x640.jpg"
              alt="model"
            />
            <div className="absolute inset-0 bg-black/30 rounded-3xl" />
          </div>

          <div
            className="absolute top-[30vh] lg:top-[50vh] w-full
                       text-[18vw] text-white leading-[17vw]
                       font-[font1] flex flex-col items-center"
          >
            <div>SEVEN7Y</div>
            <div>TWO</div>
          </div>

          <div
            className="absolute top-[50vh] lg:top-[130vh] right-0 w-full lg:p-0 p-[50vh] lg:w-1/2
                       text-white text-[6vw] lg:text-[3vw] lg:leading-[4vw]
                        pr-[5vw]"
          >
            <p className="indent-[3em]">
             We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.

            </p>
          </div>

        </div>

        <div className="min-h-screen w-full bg-yellow-400 flex items-center justify-center">
          <h2 className="text-black text-[6vw] font-[font1]">Section 2</h2>
        </div>

       
      </div>
    </div>
  );
}

export default Agency;