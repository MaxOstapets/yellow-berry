import Image from 'next/image'
import { DateCard, LanguageList, ShopCards, VendorCards, InstaImages } from '@components/Vidgets'
import { CategoriesCard } from '@components/CategoriesCard'
import { InfoCards } from '@components/InfoCards'
import { Quicksand, Poppins } from 'next/font/google'
import { ProductCard } from '@components/ProductCard'
import { PersonPortfolio } from '@components/PersonPortfolio'
import { Title } from '@components/Title'
import { Timer } from '@components/Timer'

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
      img: "/images/juice.svg",
      type: "Juice",
      product: "Mixed Almond nuts juice Pack",
      price: 39,
      weight: 20,
      availability: true
    },
    {
      img: "/images/juice.svg",
      type: "Chocos",
      product: "Mixed Fruits Chocolates Pack",
      price: 20,
      discount: 50,
      pack: 20,
      availability: true
    },
    {
      img: "/images/juice.svg",
      type: "Fruits",
      product: "Fresh Mango Slice Juice",
      price: 45,
      availability: false
    },
    {
      img: "/images/juice.svg",
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
      img: "/images/juice.svg",
      type: "Snacks",
      product: "Ground Nuts Oil Pack",
      price: 15,
      discount: 30,
      weight: 500,
      availability: true,
      status: "TREND"
    },
    {
      img: "/images/juice.svg",
      type: "Juice",
      product: "Organic Litchi Juice Pack",
      price: 25,
      discount: 20,
      capacity: 100,
      availability: true,
    },
    {
      img: "/images/juice.svg",
      type: "Chips",
      product: "Crunchy Banana Chips",
      price: 1,
      discount: 2,
      weight: 100,
      availability: true,
    },
    {
      img: "/images/juice.svg",
      type: "Chips",
      product: "Crunchy Potato Chips",
      price: 25,
      availability: false,
    },
    {
      img: "/images/juice.svg",
      type: "Snacks",
      product: "Black Pepper Spice pack",
      price: 15,
      discount: 30,
      weight: 500,
      availability: true,
    },
    {
      img: "/images/juice.svg",
      type: "Juice",
      product: "Small Cardamom Spice Pack",
      price: 25,
      discount: 20,
      capacity: 100,
      availability: true,
      status: "NEW"
    },
    {
      img: "/images/juice.svg",
      type: "Chips",
      product: "Chilli Flakes Pack",
      price: 1,
      discount: 2,
      weight: 100,
      availability: true,
    },
    {
      img: "/images/juice.svg",
      type: "Chips",
      product: "Tomato Ketchup Pack",
      price: 25,
      availability: false,
    },
  ]

  return (
    <main className='flex flex-col gap-28'>
      <section className='flex flex-col bg-gray-2 w-full h-[780px]'>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col'>
            <p className='font-light text-lg leading-7 tracking-0.48 text-gray-3 font-sans'>Flat 30% Off</p>
            <div className='flex items-end flex-col'>
              <Image src="/images/stains.png" alt="stainsIcon" width={48} height={60} />
              <span className='font-sans font-bold text-5xl leading-60 tracking-0.48 text-gray-4 w-96 flex flex-wrap'>
                Explore
                <p className='text-yellow-2 pl-3'>Healthy</p>
                & Fresh Fruits
              </span>
            </div>
            <button className='font-normal text-sm leading-7 tracking-0.48 text-gray-4 border border-gray-4 rounded-xl w-28 h-11 flex justify-center items-center mt-4'>Shop Now</button>
          </div>
          <Image src="/images/fruits.png" alt='fruits' width={904} height={550} />
        </div>
        <div className='flex justify-between items-end w-96 pl-4'>
          <LanguageList />
          <ul className='flex justify-center items-center gap-1'>
            <li><Image src="/images/currentSlide.svg" alt='currentSlide' width={30} height={16} /></li>
            <li><Image src="/images/notActiveSlide.svg" alt='notActiveSlide' width={15} height={16} /></li>
            <li><Image src="/images/notActiveSlide.svg" alt='notActiveSlide' width={15} height={16} /></li>
          </ul>
        </div>
      </section>

      <section className='flex items-end relative mx-40'>
        <div className='relative'>
          <Image src="/images/category.svg" alt='category' width={525} height={525} />
          <span className='font-sans font-normal text-sm leading-5 tracking-0.32 text-white py-[6px] px-[15px] bg-black rounded-[15px] absolute top-5 left-[79%]'>50% Off</span>
        </div>
        <CategoriesCard left='left-[25%]' />
      </section>

      <section className='flex justify-center flex-col gap-7'>
        <div className='flex justify-between items-center px-40'>
          <Title span='Day of the' titleParagraph='Deal' textAlign='text-left' width='w-fit' alignItems='items-start' paragraph="Don't wait. The time will never be just right." />
          <Timer />
        </div>
        <div className='flex justify-center items-center gap-6'>
          {productCards.map((el) => <ProductCard link={el} key={el.product} />)}
        </div>
      </section>

      <ShopCards />

      <section className='relative'>
        <Image src="/images/vegetablesBg.svg" alt='vegateblesBg' width={1920} height={400} />
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
          <Title span='New' titleParagraph='Arrivals' width='w-fit' alignItems='items-start' textAlign='text-start' paragraph='Shop online for new arrivals and get free shipping!' />
          <pre className='font-sans font-medium text-base leading-7 tracking-0.48 text-gray-7 flex'>All  /  <p className='text-blue-3'>Snack & Spices</p>  /  Fruits  /  Vegetables</pre>
        </div>
        <div className='grid grid-cols-4 gap-[24px] mx-auto'>
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
            <Image src="/images/gardenWorker.svg" alt='garden worker' width={525} height={525} />
            <div>
              <Image src="/images/arrow.png" alt='arrow' className='absolute top-[20px] left-[470px]' width={35} height={35} />
              <Image src="/images/localShopIcon.png" alt='local shoping icon' className='border-[10px] border-white rounded-tl-[20px] bg-white absolute top-[429px] left-[426px]' width={100} height={100} />
            </div>
          </div>
          <VendorCards />
        </div>
      </section>

      <PersonPortfolio name='Jon Deo' position='Team Leader' img='/images/teamLeader.svg' />

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
