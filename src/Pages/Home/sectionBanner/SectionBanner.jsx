import banner from '../../../assets/home/chef-service.jpg'



const SectionBanner = () => {
  return (
    <div>
      <div style={{backgroundImage: `url(${banner})`}}
      className='bg-cover bg-center min-h-[572px] mt-32 rounded-lg mb-16 flex justify-center items-center'
      >

      <div className='bg-white m-28 p-24 text-center rounded-md'>
            <h2 className='uppercase text-black text-5xl font-cinzel pb-2'>Bistro boss</h2>
            <p className='font-inter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
      </div>
      </div>
      </div>
  )
}

export default SectionBanner