import Image from "next/image"

interface IProps {
    url: string,
    count?: number,
    img: string
}

interface ILink {
    link: IProps
}

export const NavAccount: React.FC<ILink> = ({ link }) => {
    const { img, url, count } = link

    return (
        <li className='flex justify-start items-center text-gray-4 flex-row gap-2'>
            <Image src={img} alt='user' width={25} height={27}/>
            <div className='flex items-center flex-col'>
                {count ?
                    <div className='flex items-center flex-col'>
                        <span className='font-medium text-xs leading-3 tracking-0.6 flex items-center justify-center gap-1'>
                            <p className='text-sm leading-4 tracking-0.48 font-bold'>{count}</p>
                            items
                        </span>
                        <p className='font-semibold text-sm leading-4 tracking-0.48'>{url}</p>
                    </div>
                    :
                    <div className='flex items-center flex-col'>
                        <p className='font-medium text-xs leading-3 tracking-0.6'>Account</p>
                        <p className='font-semibold text-sm leading-4 tracking-0.48'>{url}</p>
                    </div>
                }
            </div>
        </li>
    )
}
