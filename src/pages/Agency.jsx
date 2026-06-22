import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/img/Carl_480x640.jpg",
  "/img/ChantalG_480x640.jpg",
  "/img/joel_480X640_3.jpg",
  "/img/Olivier_480x640.jpg",
  "/img/MEGGIE_480X640_2.jpg",
  "/img/Michele_480X640.jpg",
  "/img/MEL_480X640.jpg",
  "/img/CAMILLE_480X640_2.jpg",
];

function Agency() {
  const sectionRef   = useRef(null);
  const imgDivRef    = useRef(null);
  const imgRef       = useRef(null);
  const containerRef = useRef(null);
  const img1Ref      = useRef(null);
  const img2Ref      = useRef(null);

  const label1FwdRef  = useRef(null);
  const label1BackRef = useRef(null);
  const label2FwdRef  = useRef(null);
  const label2BackRef = useRef(null);

  useEffect(() => {
    if (document.getElementById("train-style")) return;

    const style = document.createElement("style");
    style.id = "train-style";
    style.textContent = `
      @keyframes trainLeft {
        from { transform: translateX(-100vw); }
        to   { transform: translateX(100vw); }
      }
      @keyframes trainRight {
        from { transform: translateX(100vw); }
        to   { transform: translateX(-100vw); }
      }
      .train-label {
        position: absolute;
        left: 0;
        white-space: nowrap;
        font-family: font1, sans-serif;
        font-size: 7vw;
        font-weight: 900;
        letter-spacing: 0.1em;
        color: #ddff44;
        pointer-events: none;
      }
      .train-fwd  { top: 40%; animation: trainLeft  7s linear infinite; }
      .train-back { top: 58%; animation: trainRight  7s linear infinite; }
    `;
    document.head.appendChild(style);
  }, []);

  function showLabels(...refs) {
    refs.forEach(r => { if (r.current) r.current.style.opacity = "1"; });
  }
  function hideLabels(...refs) {
    refs.forEach(r => { if (r.current) r.current.style.opacity = "0"; });
  }

  useGSAP(() => {
    const scroller = sectionRef.current;

    gsap.to(imgDivRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: imgDivRef.current,
        scroller,
        start: "top 20%",
        end: "bottom -100%",
        pin: true,
        scrub: true,
        onUpdate(self) {
          const idx = Math.min(Math.floor(self.progress * images.length), images.length - 1);
          if (imgRef.current) imgRef.current.src = images[idx];
        },
      },
    });

    gsap.to(containerRef.current, {
      backgroundColor: "#000",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scroller,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
    });

    gsap.fromTo(img1Ref.current,
      { y: "100%" },
      {
        y: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          scroller,
          start: "top 80%",
          end: "top 10%",
          scrub: 1,
          onEnter:     () => showLabels(label1FwdRef, label1BackRef),
          onLeaveBack: () => hideLabels(label1FwdRef, label1BackRef),
        },
      }
    );

    gsap.fromTo(img2Ref.current,
      { y: "100%" },
      {
        y: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          scroller,
          start: "top -20%",
          end: "top -80%",
          scrub: 1,
          onEnter() {
            hideLabels(label1FwdRef, label1BackRef);
            showLabels(label2FwdRef, label2BackRef);
          },
          onLeaveBack() {
            hideLabels(label2FwdRef, label2BackRef);
            showLabels(label1FwdRef, label1BackRef);
          },
        },
      }
    );

    const el = sectionRef.current;
    let target = el.scrollTop;

    function onKeyDown(e) {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      e.preventDefault();
      target += e.key === "ArrowDown" ? 300 : -300;
      gsap.killTweensOf(el);
      gsap.to(el, { scrollTop: target, duration: 1.5, ease: "power2.out" });
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <div style={{ overflowX: "hidden" }}>
      <div ref={sectionRef} className="h-screen overflow-x-hidden overflow-y-auto bg-white">

        <div className="relative lg:min-h-[300vh] min-h-[200vh] w-full font-[font2]">

          <div
            ref={imgDivRef}
            className="sticky top-[10%] left-[10vw] lg:left-[30vw]
             mt-[5vh] w-[30vw] h-[40vw] lg:w-[15vw] lg:h-[20vw] rounded-3xl overflow-hidden z-0"
          >
            <img ref={imgRef} src={images[0]} alt="model" className="w-full h-full object-cover rounded-3xl" />
          </div>

          <div className="absolute top-[30vh] lg:top-[50vh] w-full flex flex-col items-center text-[18vw] leading-[17vw] text-black font-[font1]">
            <div>SEVEN7Y</div>
            <div>TWO</div>
          </div>

          <div className="absolute top-[60vh] lg:top-[130vh] right-0 w-3/4 lg:w-1/2 pr-[5vw] text-[6vw] lg:text-[3vw] lg:leading-[4vw] text-black">
            <p className="indent-[3em]">
              We're inquisitive and open-minded, and we make sure creativity crowds out ego from
              every corner. A brand is a living thing, with values, a personality and a story.
              If we ignore that, we can achieve short-term success, but not influence that goes
              the distance. We bring that perspective to every brand story we help tell.
            </p>
          </div>

          <div className="lg:flex-row lg:static relative lg:left-0 left-[5vh] flex-col flex lg:w-full items-center w-[80%] h-[70vh] justify-around
          lg:text-3xl" style={{ marginTop: "20vw" }}>
            <div>Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.</div>
            <div>Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.</div>
            <div>Our Culture_ We're open to each other. Period. The team works together to create a space that makes us proud.</div>
          </div>
        </div>

        <div
          ref={containerRef}
          className="lg:min-h-[300vh] min-h-[250vh] w-full
           flex items-start justify-center
          lg:pt-[20vh]"
          style={{ background: "white" }}
        >
          <div className="sticky top-[20vh] lg:top-[10vh] lg:w-[70vh]
           w-[20vh] h-[30vh] lg:h-[90vh]"
           style={{ overflow: "visible" }}>

            <span ref={label1FwdRef}  className="train-label train-fwd"  style={{ opacity: 0, transition: "opacity 0.5s", zIndex: 5  }}>CARLES GRANGER</span>

            <div className="absolute inset-0 rounded-3xl overflow-hidden" style={{ zIndex: 10 }}>
              <img ref={img1Ref} src="/img/Carl_480x640.jpg" alt="Carles Granger" className="w-full h-full object-cover" style={{ transform: "translateY(100%)" }} />
            </div>

            <span ref={label1BackRef} className="train-label train-back" style={{ opacity: 0, transition: "opacity 0.5s", zIndex: 15 }}>SENIOR EXECUTIVE</span>

            <span ref={label2FwdRef}  className="train-label train-fwd"  style={{ opacity: 0, transition: "opacity 0.5s", zIndex: 18 }}>CAMILLE BERNARD</span>

            <div className="absolute inset-0 rounded-3xl overflow-hidden" style={{ zIndex: 20 }}>
              <img ref={img2Ref} src="/img/CAMILLE_480X640_2.jpg" alt="Camille Bernard" className="w-full h-full object-cover" style={{ transform: "translateY(100%)" }} />
            </div>

            <span ref={label2BackRef} className="train-label train-back" style={{ opacity: 0, transition: "opacity 0.5s", zIndex: 25 }}>ACCOUNTANT</span>

          </div>
        </div>

        <div className="lg:h-[3%] hidden w-full bg-black" />
      </div>
    </div>
  );
}

export default Agency;
