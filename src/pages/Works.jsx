import gsap from "gsap";
import ProjectCard from "../Component/Works/ProjectCard";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  },
  {
    image1: 'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
    image2: 'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022'
  },
  {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2:'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
  },
  {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  },
  {
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  },
  {
    image1: 'https://k72.ca/images/caseStudies/BEST/BEST_site_Thumbnail.jpg?w=1280&h=960&s=2b73eecfda8d95a72efa768383b50860',
    image2: 'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f',
  }
];

function Works() {
  useGSAP(function () {
    const scroller = document.querySelector(".works-scroller");
    ScrollTrigger.defaults({ scroller });

    // stack cards on scroll
    document.querySelectorAll(".hero").forEach((hero) => {
      gsap.to(hero, {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          scroller,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    const cardHeight = window.innerHeight *0.5;
    let target = scroller.scrollTop;

    function onKeyDown(e) {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      e.preventDefault();
      target += e.key === "ArrowDown" ? cardHeight : -cardHeight;
      target = Math.max(0, Math.min(target, scroller.scrollHeight - scroller.clientHeight));
      gsap.killTweensOf(scroller);
      gsap.to(scroller, { scrollTop: target, duration: 1, ease: "power2.inOut" });
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <div className="works-scroller h-screen w-screen  
    overflow-y-auto overflow-x-hidden">
      <div className="h-[40vw] pt-[30vw] lg:pt-220  flex flex-col w-screen
      justify-end">
        <h2 className="font-[font2] text-[13vw]
         h-[14vw] flex flex-col justify-start uppercase">
          Work
        </h2>
      </div>

      <div className="flex gap-4 mx-2 md:m-6 lg:mt-[10vw] items-center
      w-full
       flex-col">
        {projects.map((elem, index) => (
          <div
            key={index}
            className="hero w-full overflow-hidden sticky lg:h-[50vh] 
             flex justify-center gap-2 mx-2 md:m-6 top-0"
            style={{  zIndex: index + 1 }}
          >
            <ProjectCard img1={elem.image1} img2={elem.image2} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
