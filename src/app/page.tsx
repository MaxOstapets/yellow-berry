import stains from '../../public/images/stains.png'
import fruits from '../../public/images/fruits.png'
import Image from 'next/image'
import currentSlide from '../../public/images/currentSlide.svg'
import notActiveSlide from '../../public/images/notActiveSlide.svg'
import LanguageItem from './Components/Pages/Main/LanguageItem'
// import SlideItem from './Components/Pages/Main/SlideItem'
import coldDrinksIcon from '../../public/images/coldDrinksIcon.png'
import bakeryIcon from '../../public/images/bakeryIcon.png'
import vegetablesIcon from '../../public/images/vegetablesIcon.png'
import fruitsIcon from '../../public/images/fruitsIcon.png'
import CategoriesCard from './Components/Pages/Main/CategoriesCard'

//TODO fix slide problem

export default function Home() {
  const languageItem = ["IN", "DR", "LI", "FB"]
  // const slideItem = [currentSlide, notActiveSlide]

  const categoryCardsItems = [
    {
      category: "Cold Drinks",
      count: 49,
      img: coldDrinksIcon,
      bgColor: 'bg-blue-1'
    },
    {
      category: "Bakery",
      count: 8,
      img: bakeryIcon,
      bgColor: 'bg-pink-2'
    },
    {
      category: "Vegetables",
      count: 485,
      img: vegetablesIcon,
      bgColor: 'bg-red-1'
    },
    {
      category: "Fruits",
      count: 291,
      img: fruitsIcon,
      bgColor: 'bg-green-2'
    },
  ]

  return (
    <>
      <section className='flex flex-col bg-gradient-to-t from-gray-6 to-gray-5'>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col'>
            <p className='font-light text-lg leading-7 tracking-0.48 text-gray-3 font-sans'>Flat 30% Off</p>
            <div className='flex items-end flex-col'>
              <Image src={stains} alt="stainsIcon" />
              <span className='font-serif font-bold text-5xl leading-60 tracking-0.48 text-gray-4 w-96 flex flex-wrap'>
                Explore
                <p className='text-yellow-2 pl-3'>Healthy</p>
                & Fresh Fruits
              </span>
            </div>
            <button className='font-normal text-sm leading-7 tracking-0.48 text-gray-4 border border-gray-4 rounded-xl w-28 h-11 flex justify-center items-center mt-4'>Shop Now</button>
          </div>
          <Image src={fruits} alt='fruits' />
        </div>
        <div className='flex justify-between items-end w-96 pl-4'>
          <ul className='flex justify-center items-center gap-3 flex-col-reverse'>
            {languageItem.map((el) => <LanguageItem language={el} key={el} />)}
          </ul>
          <ul className='flex justify-center items-center gap-1'>
            <li><Image src={currentSlide} alt='currentSlide' /></li>
            <li><Image src={notActiveSlide} alt='notActiveSlide' /></li>
            <li><Image src={notActiveSlide} alt='notActiveSlide' /></li>
          </ul>
        </div>
      </section>
      <section>
        <div className='flex justify-center items-center gap-6'>
          {categoryCardsItems.map((el) => <CategoriesCard link={el} key={el.category}/>)}
        </div>
      </section>
    </>
  )
}
