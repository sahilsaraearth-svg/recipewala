import Hero from "../layout/Hero";
import Feature from "../layout/Feature";
import CardSection from "../layout/CardSection";
import SearchBar from "../layout/SearchBar";
import Testimonials from "../layout/Testimonials";
import Newsletter from "../layout/Newsletter";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <CardSection />
      <Feature />
      <SearchBar />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
