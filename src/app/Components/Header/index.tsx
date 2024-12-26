import { Poppins } from 'next/font/google';
import logo from '../../../../public/images/logo.png'
import cartIcon from '../../../../public/images/cartIcon.png'
import starIcon from '../../../../public/images/starIcon.png'
import userIcon from '../../../../public/images/userIcon.png'
import searchIcon from '../../../../public/images/searchIcon.png'
import cubesIcon from '../../../../public/images/cubesIcon.png'
import securityIcon from '../../../../public/images/securityIcon.png'
import locationIcon from '../../../../public/images/loactionIcon.png'
import Image from 'next/image';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "500", "600", "400", "700"],
    variable: '--font-serif'
});

const Header = () => {
    return (
        <header className={`bg-gray-2 ${poppins.variable} flex justify-center items-center flex-col`}>
            <div className="text-sm leading-7 tracking-0.48 text-white flex justify-around items-center bg-gray-4 py-2 w-full">
                <span>Flat 50% Off On Grocery Shop.</span>
                <ul className='flex justify-center items-center gap-6'>
                    <li>Help?</li>
                    <li>Track Order</li>
                    <li>Language</li>
                    <li>Currency</li>
                </ul>
            </div>
            <div className='flex justify-center items-center gap-14 py-2'>
                <div className='flex justify-center items-center gap-3'>
                    <Image src={logo} alt="Logo" />
                    <div className="flex justify-center items-center flex-col">
                        <p className='text-yellow text-xs font-medium tracking-0.48'>Yellow</p>
                        <p className='text-base text-black font-semibold leading-3'>Berry</p>
                    </div>
                </div>
                <div className="w-600 flex justify-center items-center bg-white text-gray-3 font-normal leading-5 rounded-xl border border-light-gray">
                    <p className='w-141 h-48 tracking-0.32 pl-5 flex items-center pr-9 border-r'>Vegetables</p>
                    <input type="text" placeholder='Search products...' className='w-full h-48 pl-5 rounded-r-lg' />
                    <Image src={searchIcon} alt='search' />
                </div>
                <ul className='flex justify-center items-center gap-8'>
                    <li className='flex justify-center items-center text-gray-4 flex-row gap-2'>
                        <Image src={userIcon} alt='user' />
                        <div className='flex items-center flex-col'>
                            <p className='font-medium text-xs leading-3 tracking-0.6'>Account</p>
                            <p className='font-semibold text-sm leading-4 tracking-0.48'>Login</p>
                        </div>
                    </li>
                    <li className='flex justify-center items-center text-gray-4 flex-row gap-2'>
                        <Image src={starIcon} alt='user' />
                        <div className='flex items-center flex-col'>
                            <span className='font-medium text-xs leading-3 tracking-0.6 flex items-center justify-center gap-1'><p className='text-sm leading-4 tracking-0.48 font-bold'>3</p>items</span>
                            <p className='font-semibold text-sm leading-4 tracking-0.48'>Wishlist</p>
                        </div>
                    </li>
                    <li className='flex justify-start items-center text-gray-4 flex-row gap-2'>
                        <Image src={cartIcon} alt='user' />
                        <div className='flex items-center flex-col'>
                            <span className='font-medium text-xs leading-3 tracking-0.6 flex items-center justify-center gap-1'><p className='text-sm leading-4 tracking-0.48 font-bold'>4</p>items</span>
                            <p className='font-semibold text-sm leading-4 tracking-0.48'>Cart</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='flex justify-around items-center gap-9 bg-white w-full border-y-2 border-gray-2 py-2'>
                <div className='flex justify-center items-center gap-12'>
                    <Image src={cubesIcon} alt='cubesIcon' />
                    <ul className='flex justify-center items-center gap-8 text-gray-4'>
                        <li className='font-medium text-base leading-7 tracking-0.48'>Home</li>
                        <li className='font-medium text-base leading-7 tracking-0.48'>Categories</li>
                        <li className='font-medium text-base leading-7 tracking-0.48'>Products</li>
                        <li className='font-medium text-base leading-7 tracking-0.48'>Pages</li>
                        <li className='font-medium text-base leading-7 tracking-0.48'>Blog</li>
                        <li className='font-medium text-base leading-7 tracking-0.48 flex justify-center items-center gap-1'><Image src={securityIcon} alt='securityIcon' />Offers</li>
                    </ul>
                </div>
                <div className='bg-white border-y-2 border-gray-2 w-44 h-12 flex justify-center items-center gap-2'>
                    <Image src={locationIcon} alt='location' />
                    <input type="text" placeholder='Surat' className='font-normal text-sm leading-5 tracking-0.32 text-gray-4' />
                </div>
            </div>
        </header>
    );
};

export default Header;
