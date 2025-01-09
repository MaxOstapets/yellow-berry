import Image from "next/image"
import { Quicksand, Poppins } from "next/font/google";

interface IProps {
    img: string,
    title: string,
    description: string
}

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "700", "400", "300"]
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300", "100", "200", "600", "800", "900"]
})


export const InfoCards: React.FC = () => {
    const infoCards: IProps[] = [
        {
            img: "/images/car.png",
            title: "Free Shipping",
            description: "Free shipping on all Us order or above $200"
        },
        {
            img: "/images/support.png",
            title: "24x7 Support",
            description: "Contact us 24 hours a day, 7 days a week"
        },
        {
            img: "/images/box.png",
            title: "30 Days Return",
            description: "Simply return it within 30 days for an exchange"
        },
        {
            img: "/images/paymentSecure.png",
            title: "Payment Secure",
            description: "Contact us 24 hours a day, 7 days a week"
        },
    ]
    return (
        <section className='flex justify-center items-center gap-6'>
            {infoCards.map((el) =>
                <div className='w-[306px] h-[201px] border border-gray-8 flex justify-center items-center flex-col gap-[19px] rounded-[20px]' key={el.title}>
                    <Image src={el.img} alt='box' width={50} height={50}/>
                    <div className='flex justify-center items-center flex-col gap-[7px]'>
                        <span className='font-serif font-bold text-lg leading-[21px] tracking-0.48 text-gray-4'>{el.title}</span>
                        <p className='font-sans font-light text-sm leading-5 tracking-0.48 flex-wrap text-gray-7 text-center px-[38px]'>{el.description}</p>
                    </div>
                </div>
            )}
        </section>
    )
}
