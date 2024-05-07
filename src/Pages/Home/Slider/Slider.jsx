import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
const Slider = () => {
  return (
    <div className="carousel w-full">
      <div
        id="slide1"
        className="carousel-item relative  h-[600px] w-full rounded-lg"
      >
        <img src={img1} className="w-full rounded-lg" />
        <div className="absolute pl-8 flex items-center rounded-lg  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full  h-full left-0 top-0">
          <div className="w-1/2 space-y-5">
            <h2 className="text-6xl font-bold text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-warning mr-3">Discovre More</button>
              <button className="btn btn-outline btn-warning">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-4 transform -translate-y-1/2  right-8 bottom-8">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
          className="w-full"
        />
        <div className="absolute pl-8 flex items-center rounded-lg  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full  h-full left-0 top-0">
          <div className="w-1/2 space-y-5">
            <h2 className="text-6xl font-bold text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-warning mr-3">Discovre More</button>
              <button className="btn btn-outline btn-warning">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-4 transform -translate-y-1/2  right-8 bottom-8">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
          className="w-full"
        />
        <div className="absolute pl-8 flex items-center rounded-lg  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full  h-full left-0 top-0">
          <div className="w-1/2 space-y-5">
            <h2 className="text-6xl font-bold text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-warning mr-3">Discovre More</button>
              <button className="btn btn-outline btn-warning">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-4 transform -translate-y-1/2  right-8 bottom-8">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
          className="w-full"
        />
        <div className="absolute pl-8 flex items-center rounded-lg  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full  h-full left-0 top-0">
          <div className="w-1/2 space-y-5">
            <h2 className="text-6xl font-bold text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-warning mr-3">Discovre More</button>
              <button className="btn btn-outline btn-warning">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-4 transform -translate-y-1/2  right-8 bottom-8">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
