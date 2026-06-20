import Video from '../Component/home/Video.jsx'
import HomeBottomText from '../Component/home/HomeBottomText.jsx'
import HomeHeroText from '../Component/home/HomeHeroText.jsx'
function Home() {
  return (
    <div className='overflow-hidden'>
        
    <div className='w-screen h-screen fixed overflow-hidden'>
      <Video />
    </div>
   <div className='w-screen min-h-screen relative flex flex-col 
        lg:mt-auto lg:pt-1 pt-[90vw] lg:gap-1 gap-[20vw] justify-center lg:justify-around'>
        <HomeHeroText/>
       <div className='lg:static absolute w-full lg:ml-auto ml-[4vw] lg:bottom-0 bottom-[4vh]'>
      <HomeBottomText />
    </div>
      </div> 
    </div>
  )
}

export default Home
