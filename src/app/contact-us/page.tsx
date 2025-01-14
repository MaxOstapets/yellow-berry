import Image from "next/image"
import { Path } from "@components/Path"
import { Button } from "@components/Button"
import { Title } from "@components/Title"
import { Input } from "@components/Input"
import { Quicksand, Poppins } from 'next/font/google'

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300"]
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300", "100", "200", "600", "800", "900"]
})

const ContactUs = () => {
    const placeholders = ["Enter Your First Name", "Enter Your Last Name", "Enter Your Email", "Enter Your Phone Number"]

    return (
        <section className="flex justify-center items-center flex-col">
            <Path page="Contact Us" previousPage="Home" currentPage="Contact Us" />
            <Title span="Get In" titleParagraph="Touch" width="w-[395px]" alignItems="items-center" textAlign="text-center" mb="mb-[40px]" mt="mt-[97px]" paragraph="Please select a topic below related to you inquiry. If you don't fint what you need, fill out our contact form." />
            <div className="flex justify-center items-center gap-6">
                <div className="flex justify-center items-start flex-col gap-[30px] border border-gray-8 rounded-[20px] p-[31px] w-[636px] h-[577px]">
                    <div className="flex justify-start items-center flex-col gap-6">
                        {placeholders.map((el) => <Input placeholder={el} width="w-[574px]" key={el} />)}
                        {/* TODO fix textposition */}
                        <input type="text" className="w-[574px] h-[150px] border border-gray-8 rounded-[10px]" />
                    </div>
                    <Button text="Submit" />
                </div>
                <Image src="/images/map.svg" alt="map" width={636} height={577} />
            </div>
        </section>
    )
}

export default ContactUs