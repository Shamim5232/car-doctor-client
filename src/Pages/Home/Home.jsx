import Service from "../Service/Service";
import About from "./About/About";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <About></About>
      <Service></Service>
    </div>
  );
};

export default Home;
