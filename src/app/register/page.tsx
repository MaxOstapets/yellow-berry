import { Title } from '@components/Title'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Path } from '@components/Path'
import { Quicksand, Poppins } from 'next/font/google'
import { RegisterInput } from '@components/Vidgets'

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300"]
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300", "100", "200", "600", "800", "900"]
})

const Register = () => {
    const firstInputsGrid = ["First Name", "Last Name", "Email", "Phone Number"]
    const secondInputsGrid = [
        {
            input: "City",
            placeholder: "city 1"
        },
        {
            input: "Post Code",
            placeholder: "post code"
        },
        {
            input: "Country",
            placeholder: "country 1"
        },
        {
            input: "Region State",
            placeholder: "Region/State 1"
        },
    ]

    return (
        <>
            <Path page='Register' previousPage='Home' currentPage='Register' />
            <div className='flex justify-start items-center flex-col w-[1320px] px-[31px] pb-[31px] border rounded-[20px] border-gray-9 mx-auto mt-[100px]'>
                <Title span='Register' paragraph='Best place to buy and sell digital products' alignItems='items-center' textAlign='text' mt='mt-[28px]' mb='mb-[40px]' />
                <form className='flex justify-center items-center flex-col gap-[26px]'>
                    <ul className='grid grid-cols-[auto_1fr] w-fit gap-6'>
                        {firstInputsGrid.map((el) =>
                           <RegisterInput span={el} placeholder={`Enter your ${el.toLowerCase()}`} key={el}/>
                        )}
                    </ul>
                    <div className='flex justify-center items-start flex-col gap-[6px]'>
                        <span className='font-serif font-medium text-sm leading-[18px] tracking-0.32 text-gray-4'>Address*</span>
                        <Input placeholder='Address Line 1' width='w-[1234px]' />
                    </div>
                    <ul className='grid grid-cols-[auto_1fr] w-fit gap-[26px]'>
                        {secondInputsGrid.map((el) =>
                            <RegisterInput span={el.input} placeholder={el.placeholder.toLowerCase()} key={el.input}/>
                        )}
                    </ul>
                    <Button text='Register' />
                </form>
            </div>
        </>
    )
}

export default Register