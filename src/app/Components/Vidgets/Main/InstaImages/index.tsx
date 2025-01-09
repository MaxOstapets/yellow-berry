import Image from "next/image"

interface IProps {
    img: string,
    key: string
}

export const InstaImages:React.FC = () => {
    const instaImages: IProps[] = [
        {
            img: "/images/cabbageDish.svg",
            key: 'cabbage dish'
        },
        {
            img: "/images/backyardCouple.svg",
            key: 'backyard couple'
        },
        {
            img: "/images/backyardView.svg",
            key: 'backyard view'
        },
        {
            img: "/images/tomatos.svg",
            key: 'tomatos'
        },
        {
            img: "/images/vegetableBouquet.svg",
            key: 'vegetables bouquet'
        },
        {
            img: "/images/marketWorker.svg",
            key: 'market worker'
        }
    ]
    return (
        <div className='flex justify-center items-center gap-6'>
            {instaImages.map((el) => <Image src={el.img} key={el.key} alt={el.key} width={196} height={176}/>)}
        </div>
    )
}