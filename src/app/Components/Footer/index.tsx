import Image from "next/image";
import logo from '../../../../public/images/logo.png';
import googlePlay from '../../../../public/images/googlePlay.svg';
import appStore from '../../../../public/images/appStore.svg';
import BrandsList from "./BrandsList";
import Column from "./Column";

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
            title: googlePlay,
            key: "google play"
        },
        {
            title: appStore,
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

    return (
        <footer className="flex justify-center items-center flex-col mt-[100px] w-full">
            <section className="flex justify-center items-center flex-col gap-6 border-t border-gray-9 w-full pt-[50px]">
                <span className="font-serif font-bold text-base leading-[19px] text-gray-4">Brands Directory</span>
                <div className="grid grid-cols-2 gap-4">
                    {lists.map((el) => (
                        <BrandsList title={el.title} item={el.item} key={el.key} />
                    ))}
                </div>
            </section>
            <section className="flex justify-center items-start gap-6 border-t border-gray-8 pt-[51px] mt-[56px]">
                <div className="w-[305px] flex justify-center items-center flex-col">
                    <div className="flex justify-center items-start flex-col gap-4">
                        <div className="flex justify-center items-center gap-3">
                            <Image src={logo} alt="Logo" />
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
                            <Image src={el.title} key={el.key} alt="app" />
                        ))}
                    </div>
                </div>
                {columns.map((el) => (
                    <Column title={el.title} item={el.items} key={el.title} />
                ))}
            </section>
        </footer>
    );
};

export default Footer;
