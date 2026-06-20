/* eslint-disable no-undef */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Agency() {
  const imgArr = [
    "/img/Carl_480x640.jpg",
    "/img/ChantalG_480x640.jpg",
    "/img/joel_480X640_3.jpg",
    "/img/Olivier_480x640.jpg",
    "/img/MEGGIE_480X640_2.jpg",
    "/img/Michele_480X640.jpg",
    "/img/MEL_480X640.jpg",
    "/img/CAMILLE_480X640_2.jpg",
  ];

  const imgDivRef = useRef(null);
  const lastImgRef = useRef(null);
  const lastImgRef2 = useRef(null); // ✅ was missing
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    // Section 1 - image cycling
    gsap.to(imgDivRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: imgDivRef.current,
        start: "top 20%",
        end: "bottom -100%",
        scroller: sectionRef.current,
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const imgIndex = Math.min(
            Math.floor(self.progress * imgArr.length),
            imgArr.length - 1,
          );
          if (imgRef.current) {
            imgRef.current.src = imgArr[imgIndex];
          }
        },
      },
    });

    // Background white → black
    gsap.to(containerRef.current, {
      backgroundColor: "#000000",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 20%",
        scroller: sectionRef.current,
        scrub: 1,
      },
    });

    // First image reveals from bottom
    gsap.fromTo(
      lastImgRef2.current,
      { y: "100%" },
      {
        y: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 10%",
          scroller: sectionRef.current,
          scrub: 1,
        },
      }
    );

    // Second image comes AFTER first is fully shown
    gsap.fromTo(
      lastImgRef.current,
      { y: "100%" },
      {
        y: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top -20%",
          end: "top -80%",
          scroller: sectionRef.current,
          scrub: 1,
        },
      }
    );

    // Smooth key scroll
    const scrollEl = sectionRef.current;
    let targetScroll = scrollEl.scrollTop;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const step = e.key === "ArrowDown" ? 300 : -300;
        targetScroll += step;
        gsap.killTweensOf(scrollEl);
        gsap.to(scrollEl, {
          scrollTop: targetScroll,
          duration: 1.5,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div>
      <div ref={sectionRef} className="h-screen overflow-y-auto bg-white">
        
        {/* Section 1 */}
        <div className="font-[font2] relative min-h-[300vh] w-full">
          <div
            ref={imgDivRef}
            className="sticky top-[10%] ml-[10vw] lg:ml-[30vw] mt-[5vh] left-10 lg:left-[30%]
            w-[30vw] h-[30vw] lg:h-[20vw] lg:w-[15vw] rounded-3xl overflow-hidden z-0"
          >
            <img
              ref={imgRef}
              className="w-full h-full object-cover rounded-3xl"
              src="/img/Carl_480x640.jpg"
              alt="model"
            />
          </div>

          <div
            className="absolute top-[30vh] lg:top-[50vh] w-full
                       text-[18vw] text-black leading-[17vw]
                       font-[font1] flex flex-col items-center"
          >
            <div>SEVEN7Y</div>
            <div>TWO</div>
          </div>

          <div
            className="absolute top-[60vh] lg:top-[130vh] right-0 w-3/4 
            lg:p-0 p-[50vh] lg:w-1/2
                       text-black text-[6vw] lg:text-[3vw] lg:leading-[4vw] pr-[5vw]"
          >
            <p className="indent-[3em]">
              We're inquisitive and open-minded, and we make sure creativity
              crowds out ego from every corner. A brand is a living thing, with
              values, a personality and a story. If we ignore that, we can
              achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>

          <div style={{ marginTop: "20vw" }} className="text-3xl flex">
            <div>Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.</div>
            <div>Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.</div>
            <div>Our Culture_ We're open to each other. Period. The team works together to create a space that makes us proud.</div>
          </div>
        </div>

        <div
          style={{ background: "white" }}
          ref={containerRef}
          className="section2 min-h-[300vh] w-full flex items-start justify-center pt-[20vh]"
        >
          <div className="sticky top-[10vh]" 
          style={{ width: "30vw", height: "50vw" }}>

            {/* First image */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden z-0">
              <img
                ref={lastImgRef2}
                className="w-full h-full object-cover"
                style={{ transform: "translateY(100%)" }}
                src="/img/Carl_480x640.jpg"
                alt="model"
              />
            </div>

            {/* Second image - stacks on top */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden z-10">
              <img
                ref={lastImgRef}
                className="w-full h-full object-cover"
                style={{ transform: "translateY(100%)" }}
                src="/img/CAMILLE_480X640_2.jpg"
                alt="model"
              />
            </div>

          </div>
        </div>
        <div className="h-[3%] w-full bg-black ">

        </div>
      </div>
    </div>
  );
}

export default Agency;