import stains from '../../public/images/stains.png'
import fruits from '../../public/images/fruits.png'
import Image from 'next/image'

export default function Home() {
  return (
    <section className='flex justify-center items-center'>
      <div className='flex flex-col'>
        <p className='font-light text-lg leading-7 tracking-0.48 text-gray-3 font-sans'>Flat 30% Off</p>
        <div className='flex items-end flex-col'>
          <Image src={stains} alt="stainsIcon" />
          <span className='font-serif font-bold text-5xl leading-60 tracking-0.48 text-gray-4 w-96 flex flex-wrap'>
            Explore
            <p className='text-yellow-2 pl-3'>Healthy</p>
            & Fresh Fruits</span>
        </div>
        <button className='font-normal text-sm leading-7 tracking-0.48 text-gray-4 border border-gray-4 rounded-xl w-28 h-11 flex justify-center items-center mt-4'>Shop Now</button>
      </div>
      <Image src={fruits} alt='fruits' />
    </section>
  )
}
