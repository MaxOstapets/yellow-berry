import Image, { StaticImageData } from "next/image"

interface INavItem {
    link: ILink
}

interface ILink {
    url: string,
    img?:  StaticImageData
}

const NavItem: React.FC<INavItem> = ({ link }) => {
    const {img, url} = link
    return (
        <li className='font-medium text-base leading-7 tracking-0.48 flex justify-center items-center gap-1'>
            {img && <Image src={img} alt='securityIcon' />}
            {url}
        </li>
    )
}

export default NavItem