import Video from '../Component/home/Video.jsx'
import HomeBottomText from '../Component/home/HomeBottomText.jsx'
import HomeHeroText from '../Component/home/HomeHeroText.jsx'
function Home() {
  return (
    <div>
        
    <div className='w-screen h-screen fixed'>
      <Video />
    </div>
    <div className='w-screen h-screen relative flex flex-col'>
     <HomeBottomText/>
     <HomeHeroText/>
     
    </div> 
    </div>
  )
}

export default Home
