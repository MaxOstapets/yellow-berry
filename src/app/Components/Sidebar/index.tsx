import { ListLayout } from "./ListLayout"
import { ListItem } from "./ListItem"
import { Quicksand, Poppins } from 'next/font/google'

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300"]
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300", "100", "200", "600", "800", "900"]
})

export const Sidebar = () => {
    const categories = ["Clothes", "Bags", "Shoes", "Cosmetics", "Electrics", "Phone", "Watch"]
    const weights = ["200gm pack", "500gm pack", "1kg pack", "5kg pack", "10kg pack"]
    const colors = ["bg-[#C4D6F9]", "bg-[#FF748B]", "bg-[#000000]", "bg-[#2BFF4A]", "bg-[#FF7C5E]", "bg-[#F155FF]", "bg-[#FFEF00]", "bg-[#C89FFF]", "bg-[#7BFFFA]", "bg-[#56FFC1]"]
    const tags = ["Clothes", "Fruits", "Snacks", "Dairy", "Seafood", "Toys", "Perfume", "Jewelry", "Bags"]

    return (
        <div className="w-[306px] flex justify-center flex-col border border-gray-8 bg-gray-2 rounded-[20px]">
            <ListLayout title="Category">
                {categories.map((el) => <ListItem text={el} key={el} />)}
            </ListLayout>
            <ListLayout title="Weight">
                {weights.map((el) => <ListItem text={el} key={el} />)}
            </ListLayout>
            <ListLayout title="Color">
                <ul className="flex  flex-wrap gap-[13px] w-[264px]">
                    {colors.map((el) => <li className={`w-[22px] h-[22px] ${el} rounded-[50%]`} key={el}></li>)}
                </ul>
            </ListLayout>
            <ListLayout title="Price">
                <div className="flex justify-center items-center flex-col gap-[19px]">
                    <span className="font-serif font-normal text-base leading-6 tracking-0.32 text-black px-[84px] py-[12px] border border-gray-8 bg-white">$130 - $250</span>
                    <input type="range" min={25} max={1000} className="custom-range" />
                </div>
            </ListLayout>
            <ListLayout title="Tags">
                <ul className="grid grid-cols-3 gap-[10px]">
                    {tags.map((el) => <li className="font-serif font-light text-[13px] flex justify-center items-center leading-7 tracking-0.48 text-gray-7 border border-gray-8 rounded-[10px]" key={el}>{el}</li>)}
                </ul>
            </ListLayout>
        </div>
    )
}