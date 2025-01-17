import { Title } from '@components/Title'
import { ProductCard } from "@components/ProductCard"
import { Path } from '@components/Path'
import { Timer } from '@components/Timer'

const Offer = () => {
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
    ]
    const blackFriday = [
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
    ]

    return (
        <>
            <Path page='Offer' previousPage='Home' currentPage='Offer' />
            <Title span='Best' titleParagraph='Offer' paragraph='Check latest offers for you.' alignItems='items-center' textAlign='text-center' mt='mt-[100px]' mb='mb-[40px]' />
            <div className='grid grid-cols-4 mx-auto gap-6 w-[1320px]'>
                {products.map((el) => <ProductCard link={el} key={el.product} />)}
            </div>
            <div className='flex justify-between items-end mt-[97px] px-[105px]'>
                <Title span='Black Friday Deals' titleParagraph='50% Off' paragraph="Don't wait. The time will never be just right." alignItems='items-start' textAlign='text-left' mb='mb-[40px]' />
                <Timer />
            </div>
            <div className='flex justify-center items-center gap-6'>
                {blackFriday.map((el) => <ProductCard link={el} key={el.product}/>)}
            </div>
        </>
    )
}

export default Offer