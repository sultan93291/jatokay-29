
const CommonBanner = ({BannerImg, title, description} : {BannerImg : string, title: string, description: string}) => {
    return (
       <div
      className="w-full h-[765px] rounded-[40px] p-8 flex items-center justify-center overflow-hidden text-center"
      style={{
        backgroundImage: `url(${BannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >

      {/* Content */}
      <div className="relative max-w-[55%] mx-auto z-10">
        <h1 className="text-white text-5xl font-bold capitalize">
          {title}
        </h1>
        <p className="text-[#E9E9E9] text-[28px] mt-6 mb-8">
          {description}
        </p>
      </div>
    </div>
    );
};

export default CommonBanner;