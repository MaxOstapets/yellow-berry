import Image from "next/image"
import { Quicksand, Poppins } from 'next/font/google'
import { ProductCard } from '@components/ProductCard'
import { CategoriesCard } from "@components/CategoriesCard"
import { Sidebar } from "@components/Sidebar"

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300"]
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300", "100", "200", "600", "800", "900"]
})

const Category = () => {
    return (
        <section className="flex justify-start items-start flex-col">
            <div className="w-full py-[25px] flex justify-between px-44 items-center bg-gray-2 border-y border-gray-8">
                <span className="font-sans font-bold text-base leading-[19px] tracking-0.48 text-gray-4">Shop Page</span>
                <div className="flex justify-center items-center gap-[10px]">
                    <span className="font-serif font-semibold text-sm leading-7 tracking-0.48 text-gray-7">Home</span>
                    <Image src="/images/pathArrow.png" alt="pathArrow" width={7.75} height={7.23} />
                    <span className="font-serif font-normal text-sm leading-7 tracking-0.48 text-gray-7">Shop Page</span>
                </div>
            </div>
            <CategoriesCard />
            <Sidebar />
        </section>
    )
}

export default Category