import { Path } from '@components/Path'
import { Title } from '@components/Title'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Quicksand, Poppins } from 'next/font/google'

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300"]
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300", "100", "200", "600", "800", "900"]
})

const Login = () => {
    const inputs = ["Email", "Password"]
    return (
        <>
            <Path page='Login' previousPage='Home' currentPage='Login' />
            <Title span='Log' titleParagraph='In' alignItems='items-center' textAlign='text-center' paragraph='Best place to buy and sell digital products' mt='mt-[97px]' mb='mb-[40px]'/>
            <form className='flex justify-center items-start flex-col gap-7 p-[31px] border border-gray-8 rounded-[20px] w-fit mx-auto'>
                <ul className='flex justify-center items-center flex-col gap-6'>
                    {inputs.map((el) =>
                        <li className='flex justify-center flex-col items-start' key={el}>
                            <span className='font-serif font-normal text-[15px] leading-[26px] tracking-0.32 text-gray-7'>{el}*</span>
                            <Input placeholder={`Enter Your ${el}`} width='w-[438px]' />
                        </li>
                    )}
                </ul>
                <span className='font-serif font-medium text-sm leading-7 tracking-0.48 text-gray-3'>Forgot Password?</span>
                <div className='flex justify-between items-center w-full'>
                    <Button text='Login' />
                    <span className='font-serif font-light text-[15px] leading-7 tracking-0.48 text-gray-7'>Register</span>
                </div>
            </form>
        </>
    )
}

export default Login