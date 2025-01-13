import Image from "next/image"

interface IProps {
    name: string,
    position: string,
    img: string
}

export const PersonPortfolio:React.FC<IProps> = ({name, position, img}) => {
    return (
        <section className='flex justify-center items-center'>
            <div className='font-outline-2 font-serif font-bold text-[42px] leading-[50px] -rotate-90 tracking-0.48 text-white opacity-20'>Testimonials</div>
            <div className='flex justify-center items-center gap-6'>
                <Image src={img} alt='team leader' width={283} height={283} />
                <div className='flex justify-start items-start flex-col gap-[11px]'>
                    <div className='flex flex-col gap-[9px]'>
                        <span className='font-serif font-bold text-xl leading-6 tracking-0.48 text-gray-4'>{name}</span>
                        <p className='font-sans font-normal text-sm leading-[21px] tracking-0.32 text-gray-3'>({position})</p>
                    </div>
                    <div className='font-sans font-light text-sm leading-[25px] tracking-0.48 text-gray-7 w-[591px] h-[117px] border border-gray-8 flex justify-center items-center px-5 flex-wrap rounded-[30px]'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto at sint eligendi possimus perspiciatis asperiores reiciendis hic amet alias aut quaerat maiores blanditiis."</div>
                </div>
            </div>
        </section>
    )
}