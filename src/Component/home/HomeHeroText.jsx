import Video from "./Video";
function HomeHeroText() {
  return (
    <div className="font-[font1] text-[9.5vw] flex flex-col pt-3 text-center
     uppercase leading-[19vh] text-white">
      <div className="justify-center flex items-center">
        The spark for
      </div>
      <div className="justify-center flex items-center ">
        <div className="justify-center flex items-center">

        all 
        </div>
          <div className="h-[7vw] w-[16vw] overflow-hidden  video-wrapper rounded-full isolate relative">
          <Video/>
          </div>
      
        <div className="justify-center flex items-center ">
        things

        </div>
      </div>
      <div className="justify-center flex items-center">
        creative
      </div>
    </div>
  );
}

export default HomeHeroText