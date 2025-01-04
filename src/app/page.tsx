import stains from '../../public/images/stains.png'
import fruits from '../../public/images/fruits.png'
import currentSlide from '../../public/images/currentSlide.svg'
import notActiveSlide from '../../public/images/notActiveSlide.svg'
import coldDrinksIcon from '../../public/images/coldDrinksIcon.png'
import bakeryIcon from '../../public/images/bakeryIcon.png'
import vegetablesIcon from '../../public/images/vegetablesIcon.png'
import fruitsIcon from '../../public/images/fruitsIcon.png'
import categoty from '../../public/images/category.svg'
import juice from '../../public/images/juice.svg'
import Image from 'next/image'
import LanguageItem from './Components/Pages/Main/LanguageItem'
// import SlideItem from './Components/Pages/Main/SlideItem'
import CategoriesCard from './Components/Pages/Main/CategoriesCard'
import ProductCard from './Components/ProductCard'

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

  const productCards = [
    {
      img: juice,
      type: "Juice",
      product: "Mixed Almond nuts juice Pack",
      price: 39,
      weight: 20,
      availability: true
    },
    {
      img: juice,
      type: "Chocos",
      product: "Mixed Fruits Chocolates Pack",
      price: 20,
      discount: 50,
      pack: 20,
      availability: true
    },
    {
      img: juice,
      type: "Fruits",
      product: "Fresh Mango Slice Juice",
      price: 45,
      availability: false
    },
    {
      img: juice,
      type: "Juice",
      product: "Organic Apple Juice Pack",
      price: 15,
      capacity: 100,
      availability: true
    },
  ]

  return (
    <main className='flex flex-col gap-16'>
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
      
      <section className='flex items-end relative mx-40'>
        <div className='relative'>
          <Image src={categoty} alt='category' />
          <span className='font-sans font-normal text-sm leading-5 tracking-0.32 text-white py-[6px] px-[15px] bg-black rounded-[15px] absolute top-5 left-[79%]'>50% Off</span>
        </div>
        <div className='flex justify-center items-center gap-6 absolute rounded-tl-[30px] p-7 left-[25%] bg-white'>
          {categoryCardsItems.map((el) => <CategoriesCard link={el} key={el.category} />)}
        </div>
      </section>

      <section className='flex justify-center flex-col gap-7'>
        <div className='flex justify-between items-center px-40'>
          <div className='flex flex-col gap-[10px]'>
            <span className='font-serif font-bold text-[25px] leading-[25px] tracking-0.48 text-gray-4 flex'>Day of the <p className='text-blue-3 ml-2'>Deal</p></span>
            <span className='font-sans font-light text-sm leading-[18px] tracking-0.48 text-gray-7'>Don't wait. The time will never be just right.</span>
          </div>
          <div className='w-[240px] h-10 border rounded-[15px] border-gray-8 flex justify-center items-center gap-3'>
            <span className='font-sans font-semibold text-[15px] leading-7 tracking-0.32 text-gray-4 flex gap-1 justify-center items-center'>891 <p className='font-normal text-sm'>Days</p></span>
            <ul className='font-sans font-semibold text-[15px] leading-7 tracking-0.32 text-gray-4 flex justify-center items-center gap-4'>
              <li>3</li>
              <li>:</li>
              <li>25</li>
              <li>:</li>
              <li>10</li>
            </ul>  
          </div>
        </div>
        <div className='flex justify-center items-center gap-6'>
          {productCards.map((el) => <ProductCard link={el} key={el.product}/>)}
        </div>
      </section>
    </main>
  )
}
