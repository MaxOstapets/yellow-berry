import { Path } from '@components/Path'
import { ProductCard } from '@components/ProductCard'
import { Title } from '@components/Title'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { Counter } from '@components/Counter'
import Image from 'next/image'
import { Quicksand, Poppins } from 'next/font/google'

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300"]
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300", "100", "200", "600", "800", "900"]
})

const Cart = () => {
    const inputs = [
        {
            title: "Country",
            placeholder: "Country 1"
        },
        {
            title: "State/Province",
            placeholder: "Please Select a region, state"
        },
        {
            title: "Zip/Postal Code",
            placeholder: "Zip/Postal Code"
        },
    ]
    const payments = [
        {
            title: "Sub-Total",
            price: "$80.00",
            textColor: "text-gray-7"
        },
        {
            title: "Delivery Charges",
            price: "$80.00",
            textColor: "text-gray-7"
        },
        {
            title: "Coupon Discount",
            price: "Apply Coupon",
            textColor: "text-red-3"
        },
    ]
    const props = ["Price", "Quality", "Total"]
    const productsInCart = [
        {
            title: "Ground Nuts Oil Pack",
            price: 15,
            total: 15
        },
        {
            title: "Organic Litchi Juice Pack",
            price: 25,
            total: 25
        },
        {
            title: "Crunchy Banana Chips",
            price: 12,
            total: 12
        },
        {
            title: "Crunchy Potato Chips",
            price: 25,
            total: 25
        },
        {
            title: "Black Pepper Spice pack",
            price: 32,
            total: 32
        },
    ]
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
    ]

    return (
        <section>
            <Path page='Cart' previousPage='Home' currentPage='Cart' />
            <div className='grid grid-cols-[auto_1fr] w-[1320px] gap-6 mx-auto mt-[100px] mb-[76px]'>
                <div className='flex justify-start items-start flex-col w-fit border border-gray-8 bg-gray-2 rounded-[20px] p-[21px] col-start-1 row-span-2'>
                    <span className='font-sans font-bold text-xl leading-6 tracking-0.48 text-gray-4 mb-5'>Summary</span>
                    <ul className='flex justify-center items-center flex-col gap-[30px] mb-[30px]'>
                        {inputs.map((el) =>
                            <li className='flex justify-center items-start flex-col gap-3' key={el.title}>
                                <span className='font-serif font-medium text-sm leading-[26px] tracking-0.32 text-gray-4'>{el.title} *</span>
                                <Input placeholder={el.placeholder} width='w-[373px]' />
                            </li>
                        )}
                    </ul>
                    <ul className='flex justify-center items-start flex-col gap-3 mb-6'>
                        {payments.map((el) =>
                            <li className='flex justify-between items-center w-[371px]' key={el.title}>
                                <span className='font-serif font-medium text-sm leading-7 tracking-0.48 text-gray-7'>{el.title}</span>
                                <p className={`font-serif font-semibold text-sm leading-7 tracking-0.48 ${el.textColor}`}>{el.price}</p>
                            </li>
                        )}
                    </ul>
                    <div className='flex justify-between pt-3 border-t border-gray-8 w-[371px]'>
                        <span className='font-serif font-semibold text-base leading-7 tracking-0.48 text-gray-7'>Total Amount</span>
                        <p className='font-serif font-semibold text-base leading-7 tracking-0.48 text-gray-7'>$80.00</p>
                    </div>
                </div>
                <div className='flex justify-center items-center flex-col w-fit h-fit border border-gray-8 rounded-[20px] col-start-2 row-start-1'>
                    <div className='flex justify-between items-center pl-3 py-[13px] pr-[109px] w-[855px]'>
                        <span className='font-serif font-medium text-base leading-[26px] tracking-0.32 text-gray-4'>Product</span>
                        <ul className='flex justify-center items-center gap-[72px]'>
                            {props.map((el) => <li key={el} className='font-serif font-medium text-base leading-[26px] tracking-0.32 text-gray-4'>{el}</li>)}
                        </ul>
                    </div>
                    <ul className='flex justify-center items-center flex-col'>
                        {productsInCart.map((el) =>
                            <li className='flex justify-between items-center py-3 pl-3 border-t border-gray-8 w-[855px] pr-[33px]' key={el.title}>
                                <div className='flex justify-start items-center gap-[10px] w-[300px]'>
                                    <Image src="/images/productInCart.svg" alt='product' width={70} height={70} />
                                    <span className='font-serif font-normal text-sm leading-7 tracking-0.48 text-gray-7'>{el.title}</span>
                                </div>
                                <div className='flex justify-between items-center w-[355px]'>
                                    <span className='font-serif font-medium text-[15px] leading-[26px] tracking-0.32 text-gray-7'>${el.price}</span>
                                    <Counter />
                                    <span className='font-serif font-medium text-[15px] leading-[26px] tracking-0.32 text-gray-7'>${el.total}</span>
                                    <Image src="/images/trash.png" alt='trash' width={16} height={16} />
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
                <Button text='Check Out' col='col-start-2 row-start-2' width='w-[140px]' height='h-[46px]' />
            </div>
            <div className='flex justify-center items-center gap-10 flex-col'>
                <Title span='New' titleParagraph='Arrivals' alignItems='items-center' textAlign='text-center' paragraph='Browse The Collection of Top Products.' />
                <div className='flex justify-center items-center gap-6'>
                    {products.map((el) => <ProductCard link={el} key={el.product}/>)}
                </div>
            </div>
        </section>
    )
}

export default Cart