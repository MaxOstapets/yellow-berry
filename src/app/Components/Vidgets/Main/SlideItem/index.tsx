import Image from 'next/image'

interface ISlide {
    url: string
}

export const SlideItem: React.FC<ISlide> = ({ url }) => {
    return (
        <li><Image src={url} alt='slide' /></li>
    )
}
