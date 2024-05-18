
import Banner from "../Banner/Banner"
import CategorySlider from "../Category/CategorySlider"
import SectionBanner from "../sectionBanner/SectionBanner"

const Home = () => {
  return (
    <div>
      {/* banner carousel  */}
      <Banner></Banner>
     
      <CategorySlider></CategorySlider>
      <SectionBanner></SectionBanner>
    </div>
  )
}

export default Home