import Image from 'next/image'

interface ISlide {
    url: string
}

const SlideItem: React.FC<ISlide> = ({ url }) => {
    return (
        <li><Image src={url} alt='slide' /></li>
    )
}

export default SlideItem