interface INavItem {
    link: string
}

const NavItem: React.FC<INavItem> = ({ link }) => {
    return (
        <li className='font-medium text-base leading-7 tracking-0.48'>{link}</li>
    )
}

export default NavItem