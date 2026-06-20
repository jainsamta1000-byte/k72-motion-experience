import gsap from "gsap";
import ProjectCard from "../Component/Works/ProjectCard";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Works() {
  const projects = [
    {
      image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
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
      image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    }
  ];

  useGSAP(function () {
    const scroller = document.querySelector(".works-scroller");
    ScrollTrigger.defaults({ scroller });

    const heroes = document.querySelectorAll(".hero");

    heroes.forEach((hero) => {
      gsap.to(hero, {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          scroller: scroller,
        },
      });
    });
  });

  return (
    <div className="works-scroller h-screen overflow-y-auto overflow-x-hidden">
      {/* Header: tighter top padding on mobile, original on md+ */}
      <div className="h-[30vw] pt-[30vw] md:pt-[55vw] flex flex-col justify-end">
        <h2 className="font-[font2] text-[13vw] h-[14vw] flex flex-col justify-start uppercase">
          Work
        </h2>
      </div>

      {/* Cards container: tighter margin on mobile, original on md+ */}
      <div className="flex gap-4 mx-2 md:m-6 items-center flex-col">
        {projects.map((elem, index) => (
          <div
            key={index}
            className="hero w-full overflow-hidden sticky flex gap-2 mx-2 md:m-6 top-0"
            style={{
              height: "60vh",
              zIndex: index + 1,
            }}
          >
            <ProjectCard img1={elem.image1} img2={elem.image2} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;