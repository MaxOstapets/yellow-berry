import Image, {StaticImageData} from "next/image"

interface IProps{
    img: StaticImageData,
    title: string,
    description: string,
    bg: string,
    bgUrl: string
}

interface ILink{
    link: IProps
}

const ShopCard:React.FC<ILink> = ({link}) => {
    const {img, title, description, bg, bgUrl} = link

    return(
        <div className={`${bg} w-[636px] h-[340px] rounded-[20px] flex justify-around items-center ${bgUrl} bg-cover`}>
          <Image src={img} alt='snack' />
          <div className='flex flex-col gap-[18px]'>
            <div className='flex justify-start items-center flex-col gap-4 w-[226px] flex-wrap'>
              <span className='font-serif font-bold text-[31px] leading-[37px] tracking-0.48 text-gray-4'>{title}</span>
              <p className='font-sans font-light text-base leading-7 tracking-0.48 text-gray-7'>{description}</p>
            </div>
            <button className='w-[105px] h-[40px] border rounded-[10px] border-gray-4 text-gray-4'>Shop Now</button>
          </div>
        </div>
    )
}

export default ShopCard