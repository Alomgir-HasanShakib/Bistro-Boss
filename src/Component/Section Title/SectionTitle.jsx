
const SectionTitle = ({subHead, head}) => {
  return (
    <div className="text-center mt-20 mb-12 md:w-4/12 mx-auto">
      <h4 className="text-xl text-[#D99904] italic  font-inter pb-4">-----{subHead}---</h4>
      <h2 className="text-[40px] text-black font-inter border-b-4 border-t-4 p-4">{head}</h2>
    </div>
  )
}

export default SectionTitle