import Image from 'next/image';
import { NavItem } from './NavItem';
import { NavAccount } from './NavAccount';
import { HelpItem } from './HelpItem';

const Header = () => {
    const navItems = [
        { url: 'Home' },
        { url: 'Categories' },
        { url: 'Products' },
        { url: 'Pages' },
        { url: 'Blog' },
        { url: 'Offers', img: "/images/securityIcon.png" }
    ]

    const navAccount = [
        { url: "Login", img: "/images/userIcon.png" },
        { url: "Wishlist", img: "/images/starIcon.png", count: 3 },
        { url: "Cart", img: "/images/cartIcon.png", count: 4 }
    ]

    const heplItem = [
        { text: "Help?" },
        { text: "Track Order" },
        { text: "Language" },
        { text: "Currency" }
    ]

    return (
        <header className={`bg-gray-2 flex justify-center items-center flex-col font-sans`}>
            <div className="text-sm leading-7 tracking-0.48 text-white flex justify-between px-[180px] items-center bg-gray-4 py-2 w-full">
                <span>Flat 50% Off On Grocery Shop.</span>
                <ul className='flex justify-center items-center gap-6'>
                    {heplItem.map((el) => <HelpItem link={el} key={el.text} />)}
                </ul>
            </div>
            <div className='flex justify-center items-center gap-14 py-2'>
                <div className='flex justify-center items-center gap-3'>
                    <Image src="/images/logo.png" alt="Logo" width={68} height={68}/>
                    <div className="flex justify-center items-center flex-col">
                        <p className='text-yellow-1 text-xs font-medium tracking-0.48'>Yellow</p>
                        <p className='text-base text-black font-semibold leading-3'>Berry</p>
                    </div>
                </div>
                <div className="w-600 flex justify-center items-center bg-white text-gray-3 font-normal leading-5 rounded-xl border border-gray-3">
                    <p className='w-141 h-48 tracking-0.32 pl-5 flex items-center pr-9 border-r'>Vegetables</p>
                    <input type="text" placeholder='Search products...' className='w-full h-48 pl-5 rounded-r-lg' />
                    <Image src="/images/searchIcon.png" alt='search' width={15} height={15}/>
                </div>
                <ul className='flex justify-center items-center gap-8'>
                    {navAccount.map((el) => <NavAccount link={el} key={el.url} />)}
                </ul>
            </div>
            <div className='flex justify-around items-center gap-9 bg-white w-full border-y-2 border-gray-2 py-2'>
                <div className='flex justify-center items-center gap-12'>
                    <Image src="/images/cubesIcon.png" alt='cubesIcon' width={45} height={45}/>
                    <ul className='flex justify-center items-center gap-8 text-gray-4'>
                        {navItems.map((el) => <NavItem link={el} key={el.url} />)}
                    </ul>
                </div>
                <div className='bg-white border-2 border-gray-2 rounded-lg flex justify-center items-center gap-2'>
                    <Image src="/images/loactionIcon.png" alt='location' width={13} height={16}/>
                    <input type="text" placeholder='Surat' className='font-normal rounded-lg w-44 h-12 text-sm leading-5 tracking-0.32 text-gray-4' />
                </div>
            </div>
        </header>
    );
};

export default Header;
