import SectionTitle from "../../../Component/Section Title/SectionTitle"
import Banner from "../Banner/Banner"
import CategorySlider from "../Category/CategorySlider"

const Home = () => {
  return (
    <div>
      {/* banner carousel  */}
      <Banner></Banner>
      <SectionTitle></SectionTitle>
      <CategorySlider></CategorySlider>
    </div>
  )
}

export default Home