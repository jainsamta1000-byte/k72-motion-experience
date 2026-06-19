function Works() {
  return (
    <div className="py-4 h-screen overflow-y-auto">
      <div className="h-[30vw] pt-[55vw] p-0 flex flex-col justify-end">
        <h2 className="font-[font2] text-[13vw] h-[14vw] flex flex-col justify-start uppercase">
          Work
        </h2>
      </div>

      <div>
        <div className="flex flex-col gap-4">
          <div className="w-full h-125 mb-4 flex gap-4">
            
          <div className="relative w-1/2 h-full hover:rounded-[50px] overflow-hidden group">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="uppercase h-3xl rounded-full text-2xl font-[font1] text-white">View Project</h2>
              </div>
            </div>

            

          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;