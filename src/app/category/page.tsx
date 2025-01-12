import Image from "next/image"
import { Quicksand, Poppins } from 'next/font/google'
import { ProductCard } from '@components/ProductCard'
import { CategoriesCard } from "@components/CategoriesCard"
import { Sidebar } from "@components/Sidebar"
import { IoIosArrowForward } from "react-icons/io";

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300"]
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300", "100", "200", "600", "800", "900"]
})

const Category = () => {
    const products = [
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
        {
            img: "/images/juice.svg",
            type: "Snacks",
            product: "Organic cool friuts",
            price: 25,
            availability: false,
        },
    ]
    return (
        <section className="flex justify-start items-start flex-col">
            <div className="w-full py-[25px] flex justify-between px-44 items-center bg-gray-2 border-y border-gray-8 mb">
                <span className="font-sans font-bold text-base leading-[19px] tracking-0.48 text-gray-4">Shop Page</span>
                <div className="flex justify-center items-center gap-[10px]">
                    <span className="font-serif font-semibold text-sm leading-7 tracking-0.48 text-gray-7">Home</span>
                    <Image src="/images/pathArrow.png" alt="pathArrow" width={7.75} height={7.23} />
                    <span className="font-serif font-normal text-sm leading-7 tracking-0.48 text-gray-7">Shop Page</span>
                </div>
            </div>
            <CategoriesCard left="left-[20%]" top="top-[40%]" />
            <div className="flex mt-64 gap-6 px-[100px]">
                <Sidebar />
                <div className="flex justify-center items-start flex-col gap-6">
                    <div className="flex justify-between items-center w-[966px] h-[60px] bg-gray-2 border border-gray-8 rounded-[20px] px-[13px]">
                        <div className="flex justify-center items-center gap-4">
                            <Image src="/images/menuIcon.png" alt="menuIcon" width={38} height={38} />
                            <Image src="/images/menuBurger.png" alt="menuBurger" width={15} height={14} />
                        </div>
                        <span className="font-serif font-normal text-sm leading-[21px] tracking-0.32 text-gray-3">Sort by</span>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="grid grid-cols-3 gap-6">{products.map((el) => <ProductCard link={el} key={el.product} />)}</div>
                        <div className="flex justify-between items-center">
                            <span className="font-serif font-light text-[15px] leading-7 tracking-0.48 text-gray-7">Showing 1-12 of 21 item(s)</span>
                            <ul className="flex justify-center items-center gap-[6px]">
                                <li className="py-[5px] px-[13px] text-white bg-gray-4 border rounded-[10px] border-gray-8 flex justify-center items-center">1</li>
                                <li className="py-[5px] px-[13px] text-gray-3 bg-gray-2 border rounded-[10px] border-gray-8 flex justify-center items-center">2</li>
                                <li className="py-[5px] px-[13px] text-gray-3 bg-gray-2 border rounded-[10px] border-gray-8 flex justify-center items-center">3</li>
                                <li className="py-[5px] px-[13px] text-gray-3 bg-gray-2 border rounded-[10px] border-gray-8 flex justify-center items-center">4</li>
                                <li className="py-[5px] px-[13px] text-white bg-gray-4 border rounded-[10px] border-gray-8 flex justify-between items-center">Next <IoIosArrowForward /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Category