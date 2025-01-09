import { Quicksand, Poppins } from "next/font/google";

interface IProps {
    name: string,
    fruits: number,
    vegetables: number,
    snacks: number,
    sales: number,
    yellowColor?: boolean,
}

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "700", "400", "300"]
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300", "100", "200", "600", "800", "900"]
})


export const VendorCards: React.FC = () => {
    const vendorCards: IProps[] = [
        {
            name: "Mira Fashion Pvt. Ltd.",
            fruits: 5,
            vegetables: 30,
            snacks: 9,
            sales: 587,
            yellowColor: true,
        },
        {
            name: "Eelna Fashion Pvt. Ltd.",
            fruits: 8,
            vegetables: 15,
            snacks: 4,
            sales: 428,
        },
        {
            name: "Mario Fashion Pvt. Ltd.",
            fruits: 16,
            vegetables: 42,
            snacks: 18,
            sales: 1024,
        },
        {
            name: "Maria Fashion Pvt. Ltd.",
            fruits: 2,
            vegetables: 10,
            snacks: 3,
            sales: 210,
        },
    ]
    return (
        <div className='flex justify-center items-center gap-6 flex-col'>
            {vendorCards.map((el) =>
                <div className='w-[745] h-[115px] border border-blue-3 flex justify-center flex-col gap-[11px] rounded-[31px]' key={el.name}>
                    <div className='flex justify-between w-full px-[31px]'>
                        {
                            el.yellowColor ? <span className='font-serif font-bold text-lg leading-[21px] tracking-0.48 text-yellow-2'>{el.name}</span>
                                : <span className='font-serif font-bold text-lg leading-[21px] tracking-0.48 text-gray-4'>{el.name}</span>
                        }
                        <p className='font-sans font-normal text-sm leading-7 tracking-0.48 text-gray-7'>Sales - {el.sales}</p>
                    </div>
                    <span className='font-sans font-light text-sm leading-5 tracking-0.48 text-gray-7 pl-[31px]'>Fruits ({el.fruits}) | Vegetables ({el.vegetables}) | Snacks ({el.snacks})</span>
                </div>
            )}
        </div>
    )
}
