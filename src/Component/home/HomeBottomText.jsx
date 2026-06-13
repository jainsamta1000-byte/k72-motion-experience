import { Link } from "react-router-dom"

const HomeBottomText = () => {
  return (
    <div className="flex gap-7 justify-center rounded-3xl border-white 
    text-center uppercase  mt-[10vw]
     text-white font-[font2] text-[7vw]  h-[8vw] ">
      <Link to={"/Works"}  className="flex justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] pt-3 rounded-full border-white border-2 px-10 items-center ">Work</Link >
      <Link to={"/Agency"} className="flex justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] pt-3  rounded-full border-white border-2 px-10 items-center " >Agency</Link >

    </div>
  )
}

export default HomeBottomText
