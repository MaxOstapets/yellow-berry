import Image from "next/image"
import { Quicksand, Poppins } from "next/font/google";

interface IProps {
  img: string,
  title: string,
  description: string,
  bg: string,
  bgUrl: string
}

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "700", "400", "300"]
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300", "100", "200", "600", "800", "900"]
})

export const ShopCards: React.FC = () => {

  const shopCards: IProps[] = [
    {
      img: "/images/snack.png",
      title: "Tasty Snack & Fast food",
      description: "The flavour of something special",
      bg: "bg-beige",
      bgUrl: "bg-[url('../../public/images/snackBg.png')]"
    },
    {
      img: "/images/freshFruits.png",
      title: "Fresh Fruits & Vegetables",
      description: "A healthy meal for every one",
      bg: "bg-pink-3",
      bgUrl: "bg-[url('../../public/images/freshFruitsBg.png')]"
    }
  ]

  return (
    <section className='flex justify-center items-center gap-6'>
      {shopCards.map((el) =>
        <div className={`${el.bg} w-[636px] h-[340px] rounded-[20px] flex justify-around items-center ${el.bgUrl} bg-cover`} key={el.title}>
          <Image src={el.img} alt='snack' width={280} height={280}/>
          <div className='flex flex-col gap-[18px]'>
            <div className='flex justify-start items-center flex-col gap-4 w-[226px] flex-wrap'>
              <span className='font-serif font-bold text-[31px] leading-[37px] tracking-0.48 text-gray-4'>{el.title}</span>
              <p className='font-sans font-light text-base leading-7 tracking-0.48 text-gray-7'>{el.description}</p>
            </div>
            <button className='w-[105px] h-[40px] border rounded-[10px] border-gray-4 text-gray-4'>Shop Now</button>
          </div>
        </div>
      )}
    </section>
  )
}
