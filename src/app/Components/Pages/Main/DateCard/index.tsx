import Image, {StaticImageData} from "next/image"

interface IProps {
    date: string,
    description: string,
    img: StaticImageData
}

interface ILink {
    link: IProps
}

const DateCard:React.FC<ILink> = ({link}) => {
    const {date, description, img} = link

    return(
        <div className='relative'>
          <Image src={img} alt='pumpkins' className='rounded-[30px]'/>
          <div className='w-[296px] h-[97px] bg-white-transparent flex justify-center items-start gap-[2px] flex-col flex-wrap rounded-[30px] pl-[15px] absolute top-[205px] left-[5.2px]'>
            <p className='font-sans font-normal text-[13px] leading-[26px] tracking-0.32 text-gray-7'>{date}</p>
            <span className='font-sans font-medium text-base leading-5 tracking-0.48 text-gray-4'>{description}</span>
          </div>
        </div>
    )
}

export default DateCard