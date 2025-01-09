import Image from 'next/image'
import stains from '../../public/images/stains.png'
import fruits from '../../public/images/fruits.png'
import currentSlide from '../../public/images/currentSlide.svg'
import notActiveSlide from '../../public/images/notActiveSlide.svg'
import categoty from '../../public/images/category.svg'
import juice from '../../public/images/juice.svg'
import vegetablesBg from '../../public/images/vegetablesBg.svg'
import arrow from '../../public/images/arrow.png'
import gardenWorker from '../../public/images/gardenWorker.svg'
import localShopingIcon from '../../public/images/localShopIcon.png'
import teamLeader from '../../public/images/teamLeader.svg'
import { DateCard, CategoriesCard, InfoCards, LanguageList, ShopCards, VendorCards, InstaImages } from '@components/Vidgets'
import { Quicksand, Poppins } from 'next/font/google'
import { ProductCard } from '@components/ProductCard'

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "700", "400", "300"]
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300", "100", "200", "600", "800", "900"]
})


export default function Home() {

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
      availability: true,
      status: "NEW"
    },
  ]

  const newArrivals = [
    {
      img: juice,
      type: "Snacks",
      product: "Ground Nuts Oil Pack",
      price: 15,
      discount: 30,
      weight: 500,
      availability: true,
      status: "TREND"
    },
    {
      img: juice,
      type: "Juice",
      product: "Organic Litchi Juice Pack",
      price: 25,
      discount: 20,
      capacity: 100,
      availability: true,
    },
    {
      img: juice,
      type: "Chips",
      product: "Crunchy Banana Chips",
      price: 1,
      discount: 2,
      weight: 100,
      availability: true,
    },
    {
      img: juice,
      type: "Chips",
      product: "Crunchy Potato Chips",
      price: 25,
      availability: false,
    },
    {
      img: juice,
      type: "Snacks",
      product: "Black Pepper Spice pack",
      price: 15,
      discount: 30,
      weight: 500,
      availability: true,
    },
    {
      img: juice,
      type: "Juice",
      product: "Small Cardamom Spice Pack",
      price: 25,
      discount: 20,
      capacity: 100,
      availability: true,
      status: "NEW"
    },
    {
      img: juice,
      type: "Chips",
      product: "Chilli Flakes Pack",
      price: 1,
      discount: 2,
      weight: 100,
      availability: true,
    },
    {
      img: juice,
      type: "Chips",
      product: "Tomato Ketchup Pack",
      price: 25,
      availability: false,
    },
  ]

  return (
    <main className='flex flex-col gap-28'>
      <section className='flex flex-col bg-gradient-to-t from-gray-6 to-gray-5'>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col'>
            <p className='font-light text-lg leading-7 tracking-0.48 text-gray-3 font-sans'>Flat 30% Off</p>
            <div className='flex items-end flex-col'>
              <Image src={stains} alt="stainsIcon" />
              <span className='font-sans font-bold text-5xl leading-60 tracking-0.48 text-gray-4 w-96 flex flex-wrap'>
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
          <LanguageList />
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
        <CategoriesCard />
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
              {/* TODO use <pre> instead ul  */}
              <li>3</li>
              <li>:</li>
              <li>25</li>
              <li>:</li>
              <li>10</li>
            </ul>
          </div>
        </div>
        <div className='flex justify-center items-center gap-6'>
          {productCards.map((el) => <ProductCard link={el} key={el.product} />)}
        </div>
      </section>

      <ShopCards />

      <section className='relative'>
        <Image src={vegetablesBg} alt='vegateblesBg' />
        <div className='w-[400px] p-5 rounded-t-[30px] bg-white flex flex-col gap-4 absolute top-[120px] left-[900px]'>
          <div className='flex flex-col gap-1'>
            <p className='font-sans font-semibold text-xl leading-[26px] tracking-0.32 text-blue-3'>25% Off</p>
            <span className='font-serif font-bold text-[40px] leading-[48px] tracking-0.48 text-gray-4'>Fresh & Organic vegetables</span>
          </div>
          <button className='w-[115px] h-[46px] rounded-[10px] border border-gray-4 text-gray-4 font-sans font-normal text-sm leading-7 tracking-0.48'>Shop Now</button>
        </div>
      </section>

      <section className='flex flex-col gap-10'>
        <div className='flex justify-between items-start px-[110px]'>
          <div className='flex flex-col gap-[10px]'>
            <span className='font-serif font-bold text-[25px] leading-[25px] tracking-0.48 text-gray-4 flex gap-2'>New <p className='text-blue-3'>Arrivals</p></span>
            <p className='font-sans font-light text-sm leading-[18px] tracking-0.48 text-gray-7'>Shop online for new arrivals and get free shipping!</p>
          </div>
          <pre className='font-sans font-medium text-base leading-7 tracking-0.48 text-gray-7 flex'>All  /  <p className='text-blue-3'>Snack & Spices</p>  /  Fruits  /  Vegetables</pre>
        </div>
        {/* TODO fix gap trouble */}
        <div className='grid grid-cols-4 gap-[20px]'>
          {newArrivals.map((el) => <ProductCard link={el} key={el.product} />)}
        </div>
      </section>

      <InfoCards />

      <section className='flex justify-center items-center flex-col gap-10'>
        <div className='flex justify-center items-center flex-col gap-[10px]'>
          <span className='font-serif font-bold text-[25px] leading-[25px] tracking-0.48 text-gray-4 flex gap-2'>Top <p className='text-yellow-2'>Vendors</p></span>
          <p className='w-[400px] font-sans font-light text-sm leading-[18px] tracking-0.48 text-gray-7 text-center'>Discover Our Trusted Partners: Excllence & Reliability in Every choice</p>
        </div>
        <div className='relative flex justify-center items-center gap-6'>
          <div className='flex'>
            <Image src={gardenWorker} alt='garden worker' />
            <div>
              <Image src={arrow} alt='arrow' className='absolute top-[20px] left-[470px]' />
              <Image src={localShopingIcon} alt='local shoping icon' className='border-[10px] border-white rounded-tl-[20px] bg-white absolute top-[429px] left-[426px]' />
            </div>
          </div>
          <VendorCards />
        </div>
      </section>

      <section className='flex justify-center items-center'>
        {/* //TODO fix "Testimonials" */}
        {/* <div className='font-serif font-bold text-[42px] leading-[50px] -rotate-90 tracking-0.48 text-white'>Testimonials</div> */}
        <div className='font-outline-2 text-white text-xl'>Testimonials</div>

        <div className='flex justify-center items-center gap-6'>
          <Image src={teamLeader} alt='team leader' />
          <div className='flex justify-start items-start flex-col gap-[11px]'>
            <div className='flex flex-col gap-[9px]'>
              <span className='font-serif font-bold text-xl leading-6 tracking-0.48 text-gray-4'>Jon deo</span>
              <p className='font-sans font-normal text-sm leading-[21px] tracking-0.32 text-gray-3'>(Team Leader)</p>
            </div>
            <div className='font-sans font-light text-sm leading-[25px] tracking-0.48 text-gray-7 w-[591px] h-[117px] border border-gray-8 flex justify-center items-center px-5 flex-wrap rounded-[30px]'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto at sint eligendi possimus perspiciatis asperiores reiciendis hic amet alias aut quaerat maiores blanditiis."</div>
          </div>
        </div>
      </section>

      <section className='flex justify-center items-center flex-col gap-20'>
        <DateCard />
        <div className='relative'>
          <span className='absolute font-serif font-semibold text-[28px] leading-[33px] tracking-0.48 text-gray-4 flex justify-center items-center px-[30px] py-[14px] bg-white rounded-[30px] top-[36%] left-[44.5%]'>#Insta</span>
          <InstaImages />
        </div>
      </section>
    </main>
  )
}
