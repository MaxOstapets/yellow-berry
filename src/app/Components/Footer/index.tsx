import Image from "next/image";
import BrandsList from "./BrandsList";
import Column from "./Column";
import { Quicksand, Poppins } from 'next/font/google'

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300"]
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300", "100", "200", "600", "800", "900"]
})


const Footer = () => {
    const lists = [
        {
            title: "Jewellery",
            item: ["Necklace", "Earrings", "Couple Rings", "Pendants", "Crystal", "Bangles", "Bracelets", "Nose Pin", "Chain Earrings", "Couple Rings"],
            key: "Jewellery",
        },
        {
            title: "Fashion",
            item: ["T-Shirt", "Short & Jeans", "Jacket", "Dress & Frock", "Inner wear", "Hosiery"],
            key: "Fashion",
        },
        {
            title: "Footwear",
            item: ["Sneakers", "Boots", "Sandals", "Flip Flops", "Heels", "Loafers", "Slippers", "Clogs", "Sports Shoes", "Formal Shoes"],
            key: "Footwear",
        },
        {
            title: "Cosmetics",
            item: ["Shampoo", "Body Wash", "Face Wash", "Makeup Kit", "Liner", "Lipstick", "Perfume", "Body Shop", "Scrub", "Hair Gel", "Hair Colors", "Hair Dye", "Sunscreen", "Skin Lotion", "Liner", "Lipstick"],
            key: "Cosmetics",
        },
    ];

    const downloadApps = [
        {
            img: "/images/googlePlay.svg",
            key: "google play"
        },
        {
            img: "/images/appStore.svg",
            key: "app store"
        }
    ];

    const columns = [
        {
            title: "Category",
            items: ["Dairy & Milk", "Snack & Spice", "Fast Food", "Juice & Drinks", "Bakery", "Seafood"]
        },
        {
            title: "Company",
            items: ["About us", "Delivery", "Legal Notice", "Terms & conditions", "Secure payment", "Contact us"]
        },
        {
            title: "Account",
            items: ["Sign In", "View Cart", "Return Policy", "Become a Vendor", "Affiliate Program", "Payments"]
        },
        {
            title: "Contact",
            items: [
                {
                    link: "971 Lajamni, Motavarachha, Surat, Gujarat, Bharat 394101.",
                    icon: "/images/footerLocation.png"
                },
                {
                    link: "+00 9876543210",
                    icon: "/images/whatsApp.png"
                },
                {
                    link: "example@email.com",
                    icon: "/images/email.png"
                },
            ]
        }
    ];

    const socialMedias = [
        {
            img: "/images/facebook.png",
            key: "facebook"
        },
        {
            img: "/images/instagram.png",
            key: "instagram"
        },
        {
            img: "/images/twitter.png",
            key: "twitter"
        },
        {
            img: "/images/inIcon.png",
            key: "in"
        },
    ]

    return (
        <footer className="flex justify-center items-center flex-col pt-[100px] w-full">
            <section className="flex justify-center items-center flex-col gap-6 border-t border-gray-9 w-full pt-[50px]">
                <span className="font-serif font-bold text-base leading-[19px] text-gray-4">Brands Directory</span>
                <div className="grid grid-cols-2 gap-4">
                    {lists.map((el) => (
                        <BrandsList title={el.title} item={el.item} key={el.key} />
                    ))}
                </div>
            </section>
            <section className="flex justify-center items-start gap-6 border-t border-gray-8 py-[50px] mt-[56px] relative">
                <div className="w-[305px] flex justify-center items-start flex-col gap-[30px]">
                    <div className="flex justify-center items-start flex-col gap-4">
                        <div className="flex justify-center items-center gap-3">
                            <Image src="/images/logo.png" alt="Logo" width={68} height={68} />
                            <div className="flex justify-center items-center flex-col">
                                <p className="text-yellow-1 text-xs font-medium tracking-0.48">Yellow</p>
                                <p className="text-base text-black font-semibold leading-3">Berry</p>
                            </div>
                        </div>
                        <span className="font-sans font-normal text-sm leading-[27px] tracking-0.32 text-gray-7 text-wrap">
                            BlueBerry is the biggest market of grocery products. Get your daily needs from our store.
                        </span>
                    </div>
                    <div className="flex justify-center items-center gap-[14px]">
                        {downloadApps.map((el) => (
                            <Image src={el.img} key={el.key} alt="app" width={140} height={42} />
                        ))}
                    </div>
                </div>
                {columns.map((el) => (
                    <Column title={el.title} item={el.items} key={el.title} />
                ))}
                <div className="flex justify-center items-center gap-[5px] top-[240px] left-[985px] absolute">
                    {socialMedias.map((el) => <Image src={el.img} key={el.key} alt="app" width={30} height={30} />)}
                </div>
            </section>
            <section className="flex py-3 justify-between px-[70px] border-t border-gray-8 w-full">
                <pre className="font-serif font-normal text-sm leading-[26px] tracking-[1px] text-gray-7 flex items-end">Copyright © 2024 <p className="text-[15px] font-medium leading-7 tracking-0.48 text-yellow-2">BlackRise</p> all rights reserved.</pre>
                <div className="flex justify-center items-center gap-[150px]">
                    <Image src="/images/payment.png" alt="payment" width={335} height={30} />
                    <Image src="/images/scrollUpArrow.png" alt="scrollUpArrow" width={38} height={38} />
                </div>
            </section>
        </footer>
    );
};

export default Footer;
