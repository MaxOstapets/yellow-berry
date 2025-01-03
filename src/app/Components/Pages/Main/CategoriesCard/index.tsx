import Image, { StaticImageData } from "next/image"

interface ICart {
    img: StaticImageData,
    count: number,
    category: string,
    bgColor: string
}

interface ILink {
    link: ICart
}

const CategoriesCard: React.FC<ILink> = ({ link }) => {
    const { img, count, category, bgColor } = link
    return (
        <div className={`w-198 h-168 ${bgColor} flex justify-center items-center flex-col gap-4 rounded-3xl`}>
            <Image src={img} alt='coldDrinks' />
            <div className='flex justify-center items-center flex-col gap-0'>
                <p className='font-sans font-medium text-base leading-5 tracking-0.48 text-gray-4'>{category}</p>
                <p className='font-sans font-light text-xs leading-6 tracking-0.48 text-gray-7'>{count} items</p>
            </div>
        </div>
    )
}

export default CategoriesCard