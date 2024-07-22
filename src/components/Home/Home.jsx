import { AHero, Connect, Service, Strategy, Growing, ProjectContainer, Partner, Business, TestimonialContainer, NewsContainer ,NewsLetter} from "./index";
import "./Home.css";

const Home = () => {
  return (
    <div className="home  w-[100%]">
      <AHero />
      <Connect />
      <Service />
      <Strategy />
      <Growing />
      <ProjectContainer />
      <Partner />
      <Business />
      <TestimonialContainer />
      <NewsContainer />
      <NewsLetter />
    </div>
  );
};

export default Home;
