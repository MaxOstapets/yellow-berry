import { Poppins } from 'next/font/google';
import logo from '../../../../public/images/logo.png'
import cartIcon from '../../../../public/images/cartIcon.png'
import starIcon from '../../../../public/images/starIcon.png'
import userIcon from '../../../../public/images/userIcon.png'
import Image from 'next/image';

const poppins = Poppins({
    subsets: ["latin"],
    weight: "300",
    variable: '--font-serif'
});

const Header = () => {
    return (
        <header>
            <div className={`${poppins.variable} text-sm leading-7 tracking-tightest text-white flex justify-around items-center bg-dark-gray py-2`}>
                <span>Flat 50% Off On Grocery Shop.</span>
                <ul className='flex justify-center items-center gap-6'>
                    <li>Help?</li>
                    <li>Track Order</li>
                    <li>Language</li>
                    <li>Currency</li>
                </ul>
            </div>
            <div>
                <div>
                <Image src={logo} alt="Logo" />
                    <div>
                        <p>Yellow</p>
                        <p>Berry</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
