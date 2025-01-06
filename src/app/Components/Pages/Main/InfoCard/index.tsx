import Image, {StaticImageData} from "next/image"

interface IProps {
    img: StaticImageData,
    title: string,
    description: string
}

interface ILink {
    link: IProps
}

const InfoCard:React.FC<ILink> = ({link}) => {
    const {img, title, description} = link
    return (
        <div className='w-[306px] h-[201px] border border-gray-8 flex justify-center items-center flex-col gap-[19px] rounded-[20px]'>
            <Image src={img} alt='box' />
            <div className='flex justify-center items-center flex-col gap-[7px]'>
                <span className='font-serif font-bold text-lg leading-[21px] tracking-0.48 text-gray-4'>{title}</span>
                <p className='font-sans font-light text-sm leading-5 tracking-0.48 flex-wrap text-gray-7 text-center px-[38px]'>{description}</p>
            </div>
        </div>
    )
}

export default InfoCard