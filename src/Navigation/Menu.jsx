import { useGSAP } from "@gsap/react";
import { NavbarContext } from "../Component/Context/Context";
import gsap from "gsap";
import { useContext } from "react";
import { Link } from "react-router-dom";

const IMG = "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b";

const navItems = [
  { id: "link1", label: "Work",    subLabel: "See Everything", to: "/Works"   },
  { id: "link2", label: "Agency",  subLabel: "Know Us",        to: "/Agency"  },
  { id: "link3", label: "Contact", subLabel: "Send us a fax",  to: "/Contact" },
  { id: "link4", label: "Blog",    subLabel: "Read article",   to: "/Blog",  borderY: true },
];

function Menu() {
  const [navOpen, setNavOpen] = useContext(NavbarContext);

  function openAnimation() {
    const tl = gsap.timeline();
    tl.set(".stairing", { y: 0, height: "100%" });
    tl.from(".stairing", { delay: 0.2, height: 0, stagger: { amount: -0.2 } });
    tl.from(".link", { opacity: 0, rotateX: 90, stagger: { amount: 0.2 } });
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

    tl.to(".link", { opacity: 0, rotateX: 90, stagger: { amount: 0.15 }, duration: 0.3 });
    tl.to(".stairing", { y: "100%", stagger: { amount: -0.2 }, duration: 0.6, ease: "power2.inOut" }, "-=0.1");
  }

  useGSAP(() => {
    if (navOpen) {
      gsap.to(".fullscreen", { display: "block" });
      openAnimation();
    } else {
      gsap.to(".fullscreen", { display: "none" });
    }
  }, [navOpen]);

  return (
    <div className="fullscreen w-screen flex flex-col overflow-hidden h-screen text-white">

      {/* staircase background */}
      <div className="h-full w-full fixed top-0 left-0 flex z-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="stairing h-full w-1/5 bg-black" />
        ))}
      </div>

      {/* navbar */}
      <div className="flex w-screen justify-between top-0 bg-black h-25 left-0 fixed z-10">
        <div className="w-40 h-18 flex items-start justify-center pt-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="180" height="50" viewBox="0 0 103 44">
            <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z" />
          </svg>
        </div>

        <div onClick={closeMenu} className="h-32 w-32 relative flex items-center justify-center cursor-pointer">
          <div className="absolute bar h-full w-1 rotate-45 bg-white" />
          <div className="absolute bar h-full w-1 -rotate-45 bg-white" />
        </div>
      </div>

      {/* nav links */}
      <div
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        className="overflow-hidden relative top-[70vw] lg:top-[7vw] w-full flex flex-col lg:gap-1 gap-[8vw] grow text-[8vw] font-[font2] leading-[7.5vw] uppercase items-center"
      >
        {navItems.map((item) => (
          <div
            key={item.id}
            id={item.id}
            style={{ backfaceVisibility: "hidden" }}
            className={`link overflow-hidden project-item ${item.borderY ? "border-y" : "border-t"} border-white/60 p-1 lg:h-[9vw] w-screen relative flex flex-col`}
          >
            <div className="flex items-center justify-center">
              <h1 className="text-center">{item.label}</h1>
            </div>

            <Link
              to={item.to}
              onClick={closeMenu}
              className="absolute top-0 h-full w-max flex items-center moveLink justify-center gap-12 bg-[#D3FD50] text-black px-10 overflow-hidden"
            >
              <div className="h-full w-full flex items-center justify-center moveX">
                <h2 className="whitespace-nowrap">{item.subLabel}</h2>
                <img className="h-[80%] w-auto rounded-full" src={IMG} alt="" />
                <h2 className="whitespace-nowrap">{item.subLabel}</h2>
                <img className="h-[80%] w-auto rounded-full" src={IMG} alt="" />
                <h2 className="whitespace-nowrap">{item.subLabel}</h2>
                <img className="h-[80%] w-auto rounded-full" src={IMG} alt="" />
                <h2 className="whitespace-nowrap">{item.subLabel}</h2>
                <img className="h-[80%] w-auto rounded-full" src={IMG} alt="" />
              </div>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Menu;
