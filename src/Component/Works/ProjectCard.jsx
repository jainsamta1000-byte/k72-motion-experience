function ProjectCard({ img1, img2, index }) {
  const mobileImg = index % 2 === 0 ? img1 : img2;

  return (
    <>
      <div className="hidden md:block relative w-[49%] h-full hover:rounded-[50px] overflow-hidden group">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={img1} />
        <div className="absolute inset-0 p-2 bg-black/30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h2 className="uppercase w-[40%] text-center rounded-full border-2 border-white text-4xl font-[font1] text-white">View Project</h2>
        </div>
      </div>

      <div className="hidden md:block relative w-[49%] h-full hover:rounded-[50px] overflow-hidden group">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={img2} />
        <div className="absolute inset-0 p-2 bg-black/30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h2 className="uppercase w-[40%] text-center rounded-full border-2 border-white text-4xl font-[font1] text-white">View Project</h2>
        </div>
      </div>

      <div className="md:hidden relative w-full h-full hover:rounded-[50px] overflow-hidden group">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={mobileImg} />
        <div className="absolute inset-0 p-2 bg-black/30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h2 className="uppercase w-[40%] text-center rounded-full border-2 border-white text-2xl font-[font1] text-white">View Project</h2>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;