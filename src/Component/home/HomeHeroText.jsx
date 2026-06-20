import Video from "./Video";
function HomeHeroText() {
  return (
    <div className="font-[font1]  text-[11vw] lg:text-[9.5vw] 
     flex flex-col justify-center
     text-center items-center lg:mt-auto mt-[60vw]
     uppercase lg:leading-[19vh] text-white">
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