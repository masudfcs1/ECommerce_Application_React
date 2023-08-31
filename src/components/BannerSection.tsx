const BannerSection = () => {
  return (
    <div className=" container pt-16">
      <div className=" grid sm:grid-cols-2 gap-4 sm:gap-8">
        <div className=" overflow-hidden rounded-lg">
          <img
            src="/banner__1.webp"
            alt="banner"
            className=" cursor-pointer hover:scale-105 transition-transform"
          />
        </div>
        <div className=" overflow-hidden rounded-lg">
          <img
            src="/banner__2.webp"
            alt="banner"
            className=" cursor-pointer hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
