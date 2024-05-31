import Banner from "../Banner/Banner";
import CategorySlider from "../Category/CategorySlider";
import HomeContact from "../ContactInfo/HomeContact";
import HomeMenu from "../Our Menu/HomeMenu";
import SectionBanner from "../sectionBanner/SectionBanner";

const Home = () => {
  return (
    <div>
      {/* banner carousel  */}
      <Banner></Banner>

      <CategorySlider></CategorySlider>
      <SectionBanner></SectionBanner>
      <HomeMenu></HomeMenu>
      <HomeContact></HomeContact>
    </div>
  );
};

export default Home;
