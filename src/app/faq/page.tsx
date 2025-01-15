"use client"

import { Title } from '@components/Title'
import { Path } from '@components/Path'
import Image from 'next/image'
import { Quicksand, Poppins } from 'next/font/google'
import { useState } from 'react'

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300"]
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300", "100", "200", "600", "800", "900"]
})

const Faq = () => {
    const titles = ["What is the multi vendor services?", "How to buy many products at a time?", "Refund policy for customer", "Exchange policy for customer", "Give a way products available", "Exchange policy for customer 2"];
    const [openIndexes, setOpenIndexes] = useState(Array(titles.length).fill(false));
    const toggleHandler = (index: any) => { setOpenIndexes((prev) => prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))) };

    return (
        <section>
            <Path page="Faq" previousPage="Home" currentPage="Faq" />
            <div className="flex justify-center items-center gap-10 mt-[97px] flex-col">
                <Title span="Frequently asked" titleParagraph="questions" paragraph="Customer service management." alignItems="items-center" textAlign="text-center" />
                <div className="flex justify-center items-start gap-6">
                    <Image src="/images/girlWithACart.svg" width={415} height={415} alt="girl with a cart" />
                    <ul className="flex justify-center items-start flex-col gap-6">
                        {titles.map((el, index) => (
                            <li className="flex justify-center items-start flex-col" key={el}>
                                <span className="cursor-pointer transition font-serif font-medium text-base leading-5 text-gray-11 flex justify-between items-center w-[855px] py-4 px-[21px] border rounded-[15px] border-gray-8" onClick={() => toggleHandler(index)}>
                                    {el}
                                    <Image src="/images/plus.png" alt="plus" width={8} height={8} />
                                </span>
                                <p className={`font-serif font-normal text-sm leading-6 tracking-0.32 text-gray-12 pl-[15px] w-[795px] pt-[17px] transition ease-out ${openIndexes[index] ? 'block' : 'hidden'}`}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint atque
                                    pariatur cupiditate beatae voluptates quidem. Et tenetur autem itaque? Eum
                                    exercitationem assumenda enim eos voluptas. Ad incidunt laborum aliquam, expedita,
                                    voluptatibus quo id adipisci ea ratione ut, dignissimos natus?
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Faq;
