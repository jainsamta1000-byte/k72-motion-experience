import { useGSAP } from "@gsap/react";
import { NavbarContext } from "../Component/Context/Context";
import gsap from "gsap";
import { useContext } from "react";


function Menu() {
  const [navOpen , setNavOpen]=useContext(NavbarContext);
  function gsapAnimation() {
  const tl = gsap.timeline();

  tl.set('.stairing', {
    y: 0,
    height: '100%',
  });
  
  tl.from('.stairing', {
    delay: 0.2,
    height: 0,
    stagger: {
      amount: -0.2
    }
  });

  tl.from('.link', {
    opacity: 0,
    rotateX: 90,
    stagger: {
      amount: 0.2
    }
  });

}
function closeMenu() {
  const tl = gsap.timeline({
    onComplete: () => {
      gsap.set(".fullscreen", { display: "none" });
      setNavOpen(false);
      gsap.set(".stairing", { y: 0 });
      gsap.set(".link", { opacity: 1, rotateX: 0 });
    },
  });

  tl.to(".link", {
    opacity: 0,
    rotateX: 90,
    stagger: {
      amount: 0.15,
    },
    duration: 0.3,
  });

  tl.to(".stairing", {
    y: "100%",
    stagger: {
      amount: -0.2,
    },
    duration: 0.6,
    ease: "power2.inOut",
  }, "-=0.1");
}

  useGSAP(function(){
    if (navOpen){
    gsap.to(".fullscreen", {
  display: "block"
})
    gsapAnimation()
    }
      else{
        gsap.to(".fullscreen",{
          display:"none"
        })
      }
    
  },[navOpen])
  return (
    <div
      id="Page"
      className="fullscreen w-screen flex flex-col  
    overflow-hidden h-screen text-white"
    >
      <div className="h-full w-full fixed top-0 left-0 flex z-0 overflow-hidden">
  <div className="stairing h-full w-1/5 bg-[#000000]"></div>
  <div className="stairing h-full w-1/5 bg-black"></div>
  <div className="stairing h-full w-1/5 bg-black"></div>
  <div className="stairing h-full w-1/5 bg-black"></div>
  <div className="stairing h-full w-1/5 bg-black"></div>
</div>
      <div id="navBar" className="flex w-screen justify-between top-0 bg-black
       h-25 left-0 fixed z-10">
        <div className="
 b-top-none w-40 h-18 flex items-start justify-center  pt-2 left-0 top-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="180" height="50" viewBox="0 0 103 44">
            <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
          </svg>

        </div>
        <div
          id="toggleMenu"
          onClick={closeMenu}
          className='h-32 w-32 relative flex items-center justify-center'
        >

          <div className='absolute  bar h-full w-1 rotate-45 bg-[#ffffff]'></div>

          <div className='absolute bar h-full w-1 -rotate-45 bg-[#ffffff]'></div>
        </div>

      </div>
      <div
        id="continer "
         style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        className=" overflow-hidden perspective-[1000px]
       relative top-[70vw] lg:top-[7vw] w-full flex flex-col lg:gap-1
        gap-[8vw] grow
       text-[8vw] font-[font2] leading-[7.5vw] uppercase items-center"
      >
        <div
          id="link1"
                    style={{"backfaceVisibility":"hidden"}}

          className="link border-t overflow-hidden project-item backface-hidden
       border-white/60 p-1 grow lg:h-[9vw] w-screen relative flex flex-col"
        >
          <div className="flex items-center justify-center ">
            <h1 className="text-center">Work</h1>
          </div>

          <div className="absolute top-0 h-full w-max flex items-center moveLink
         justify-center gap-12 bg-[#D3FD50] text-black px-10 
         overflow-hidden">
            <div
              className=" h-full w-full flex items-center 
                justify-center  moveX"
            >
              <h2 className="whitespace-nowrap">See Everything</h2>
              <img
                className="h-[80%] w-auto rounded-full"
                src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                alt="img"
              />
              <h2 className="whitespace-nowrap">See Everything</h2>
              <img
                className="h-[80%] w-auto rounded-full"
                src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                alt="img"
              />
              <div className=" h-full w-full flex items-center 
                justify-center ">
                <h2 className="whitespace-nowrap">See Everything</h2>
                <img
                  className="h-[80%] w-auto rounded-full"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="img"
                />
                <h2 className="whitespace-nowrap">See Everything</h2>
                <img
                  className="h-[80%] w-auto rounded-full"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="img"
                />

              </div>
            </div>
          </div>
        </div>

        <div
          id="link2"
          style={{"backfaceVisibility":"hidden"}}
          className="link border-t overflow-hidden project-item 
       border-white/60 p-1  h:[12vw] lg:h-[9vw] w-screen relative flex flex-col"
        >
          <div className="flex gap-5 items-center justify-center ">
            <h1 className="text-center">Agency</h1>
          </div>

          <div className="absolute top-0 h-full w-max flex items-center moveLink
         justify-center gap-12 bg-[#D3FD50] text-black px-10 
         overflow-hidden">
            <div
              className=" h-full w-full flex items-center 
                justify-center  moveX"
            >
              <h2 className="whitespace-nowrap">Know Us</h2>
              <img
                className="h-[80%] w-auto rounded-full"
                src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                alt="img"
              />
              <h2 className="whitespace-nowrap">Know us</h2>
              <img
                className="h-[80%] w-auto rounded-full"
                src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                alt="img"
              />
              <div className=" h-full w-full flex items-center 
                justify-center ">
                <h2 className="whitespace-nowrap">know us</h2>
                <img
                  className="h-[80%] w-auto rounded-full"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="img"
                />
                <h2 className="whitespace-nowrap">know us </h2>
                <img
                  className="h-[80%] w-auto rounded-full"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="img"
                />

              </div>
            </div>
          </div>
        </div>

        <div
          id="link3"
          className="link border-t overflow-hidden project-item
       border-white/60 p-1  h:[12vw] lg:h-[9vw] w-screen relative flex flex-col"
        >
          <div className="flex items-center justify-center ">
            <h1 className="text-center">Contact</h1>
          </div>

          <div className="absolute top-0 h-full w-max flex items-center moveLink
         justify-center gap-12 bg-[#D3FD50] text-black px-10 
         overflow-hidden">
            <div
              className=" h-full w-full flex items-center 
                justify-center  moveX"
            >
              <h2 className="whitespace-nowrap">Send us a fax</h2>
              <img
                className="h-[80%] w-auto rounded-full"
                src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                alt="img"
              />
              <h2 className="whitespace-nowrap">Send us a fax</h2>
              <img
                className="h-[80%] w-auto rounded-full"
                src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                alt="img"
              />
              <div className=" h-full w-full flex items-center 
                justify-center ">
                <h2 className="whitespace-nowrap">Send us a fax</h2>
                <img
                  className="h-[80%] w-auto rounded-full"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="img"
                />
                <h2 className="whitespace-nowrap">send us a fax</h2>
                <img
                  className="h-[80%] w-auto rounded-full"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="img"
                />

              </div>
            </div>
          </div>
        </div>


        <div
          id="link4"
          className="link border-y overflow-hidden project-item
       border-white/60 p-1  h:[23vw] lg:h-[9vw] w-screen relative flex flex-col"
        >
          <div className="flex items-center justify-center ">
            <h1 className="text-center">Blog</h1>
          </div>

          <div className="absolute top-0 h-full w-max flex items-center moveLink
         justify-center gap-12 bg-[#D3FD50] text-black px-10 
         overflow-hidden">
            <div
              className=" h-full w-full flex items-center 
                justify-center  moveX"
            >
              <h2 className="whitespace-nowrap">Read article</h2>
              <img
                className="h-[80%] w-auto rounded-full"
                src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                alt="img"
              />
              <h2 className="whitespace-nowrap">read article</h2>
              <img
                className="h-[80%] w-auto rounded-full"
                src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                alt="img"
              />
              <div className=" h-full w-full flex items-center 
                justify-center ">
                <h2 className="whitespace-nowrap">read article</h2>
                <img
                  className="h-[80%] w-auto rounded-full"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="img"
                />
                <h2 className="whitespace-nowrap">read article</h2>
                <img
                  className="h-[80%] w-auto rounded-full"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="img"
                />

              </div>
            </div>
          </div>
        </div>
     
      </div>
  
    </div>
    
  );
}

export default Menu;
