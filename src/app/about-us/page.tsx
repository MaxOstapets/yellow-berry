import Image from "next/image"
import { Path } from "@components/Path"
import { InfoCards } from "@components/InfoCards"
import { PersonPortfolio } from "@components/PersonPortfolio"

const AboutUs = () => {
    const achievements = [
        {
            count: 200,
            achievement: "Vendors"
        },
        {
            count: "654k",
            achievement: "Sales"
        },
        {
            count: "587k",
            achievement: "Customers"
        },
    ]
    const ourTeam = [
        {
            name: "Elena Wilson",
            position: "Manager",
            img: "/images/elenaWilson.svg",
            alt: "Elena Wilson"
        },
        {
            name: "Mario Bisop",
            position: "CEO",
            img: "/images/marioBisop.svg",
            alt: "Mario Bisop"
        },
        {
            name: "Maria Margret",
            position: "Co-Founder",
            img: "/images/mariaMargret.svg",
            alt: "Maria Margret"
        },
        {
            name: "Juliat Hilson",
            position: "Team Leader",
            img: "/images/juliatHilson.svg",
            alt: "Juliat Hilson"
        },
    ]

    return (
        <section>
            <Path page="About Us" previousPage="Home" currentPage="About Us" />
            <div className="flex justify-center items-center gap-6 mt-[100px] mb-[76px]">
                <Image src='/images/twistedShape.png' alt="twisted shape" width={636} height={557} />
                <div className="flex items-start flex-col">
                    <div className="flex flex-col items-start gap-[11px]">
                        <span className="font-sans font-bold text-[25px] leading-[25px] tracking-0.48 text-gray-4 flex justify-center items-start gap-1">About the <p className="text-blue-3">BlueBerry</p></span>
                        <p className="font-sans font-bold text-lg leading-[21px] tracking-0.48 text-gray-4">Farm-fresh Goodness, just a click Away.</p>
                    </div>
                    <div className="flex items-start flex-col gap-6 mt-[23px] mb-[34px]">
                        <span className="w-[598px] font-serif font-light text-sm leading-7 tracking-0.48 text-gray-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, rem! Et obcaecati rem nulla, aut assumenda unde minima earum distinctio porro excepturi veritatis officiis dolorem quod. sapiente amet rerum beatae dignissimos aperiam id quae quia velit. Ab optio doloribus hic quas sit corporis numquam.</span>
                        <span className="w-[598px] font-serif font-light text-sm leading-7 tracking-0.48 text-gray-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, rem! Et obcaecati rem nulla, aut assumenda unde minima earum distinctio porro excepturi veritatis officiis dolorem quod. sapiente amet rerum beatae dignissimos aperiam id quae quia velit. Ab optio doloribus hic quas sit corporis numquam.</span>
                    </div>
                    <ul className="flex justify-center items-center gap-6">
                        {achievements.map((el) =>
                            <li className="flex justify-center items-center flex-col gap-3 w-[195px] h-[96px] bg-gray-2 border border-gray-8 rounded-[20px]" key={el.achievement}>
                                <span className="font-sans font-bold text-[32px] leading-6 tracking-0.48 text-gray-4">{el.count} +</span>
                                <p className="font-serif font-light text-sm leading-[18px] tracking-0.48 text-gray-7">{el.achievement}</p>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col gap-10 mb-[87px]">
                <div className="flex justify-center items-center flex-col gap-[9.5px]">
                    <span className="font-sans font-bold text-[25px] leading-[25px] tracking-0.48 text-gray-4 flex justify-center items-center gap-2">Our <p className="text-blue-3">Services</p></span>
                    <p className="font-serif font-light text-sm leading-[18px] tracking-0.48 text-center w-[359px] text-gray-7">Customer service should not be a department. It should be the entire company.</p>
                </div>
                <InfoCards />
            </div>
            <PersonPortfolio name="Isabella Oliver" position="Manager" img="/images/isabellaOliver.svg" />
            <div className="flex justify-center items-center flex-col gap-10 mt-[80px]">
                <div className="flex justify-center items-center flex-col gap-[9.5px]">
                    <span className="font-sans font-bold text-[25px] leading-[25px] tracking-0.48 text-gray-4 flex justify-center items-center gap-2">Our <p className="text-blue-3">Team</p></span>
                    <p className="font-serif font-light text-sm leading-[18px] tracking-0.48 text-center text-gray-7">Meet out expert team members.</p>
                </div>
                <ul className="flex justify-center items-center gap-[30px]">
                    {ourTeam.map((el) =>
                        <li className="flex justify-center items-center gap-[19px] flex-col" key={el.name}>
                            <Image src={el.img} alt={el.alt} width={301} height={301} className="rounded-[20px]" />
                            <div className="flex justify-center items-center flex-col">
                                <span className="font-sans font-bold text-lg leading-[21px] tracking-0.48 text-gray-4">{el.name}</span>
                                <p className="font-serif font-light text-[15px] leading-7 tracking-0.48 text-gray-7">{el.position}</p>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}

export default AboutUs