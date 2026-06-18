import { Link } from "react-router-dom"

const HomeBottomText = () => {
  return (
    <div
      className="mt-[6vw] flex w-full flex-wrap justify-center gap-4
      px-5 text-center font-[font2] text-[clamp(2.5rem,7vw,7rem)]
      uppercase text-white"
    >
      <Link
        to="/Works"
        className="flex min-h-[1.18em] min-w-[4em] items-center justify-center
        rounded-full border-2 border-white px-[0.5em] pb-[0.12em] pt-[0.04em]
        leading-[0.9] transition-colors duration-300 hover:border-[#D3FD50]
        hover:bg-[#D3FD50] hover:text-black"
      >
        Work
      </Link>
      <Link
        to="/Agency"
        className="flex min-h-[1.18em] min-w-[4.9em] items-center justify-center
        rounded-full border-2 border-white px-[0.5em] pb-[0.12em] pt-[0.04em]
        leading-[0.9] transition-colors duration-300 hover:border-[#D3FD50]
        hover:bg-[#D3FD50] hover:text-black"
      >
        Agency
      </Link>

    </div>
  )
}

export default HomeBottomText
