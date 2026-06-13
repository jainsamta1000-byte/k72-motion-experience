import Video from '../Component/home/Video.jsx'
import HomeBottomText from '../Component/home/HomeBottomText.jsx'
import HomeHeroText from '../Component/home/HomeHeroText.jsx'
function Home() {
  return (
    <div className='overflow-hidden'>
        
    <div className='w-screen h-screen fixed overflow-hidden'>
      <Video />
    </div>
    <div className='w-screen h-screen relative flex flex-col'>
     <HomeHeroText/>
     <HomeBottomText/>
     
    </div> 
    </div>
  )
}

export default Home
