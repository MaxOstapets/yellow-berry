import { Path } from "@components/Path"
import { Sidebar } from "@components/Sidebar"
import { RatingStars } from "@components/RatingStars"
import Image from "next/image"
import { Quicksand, Poppins } from "next/font/google";
import { ProductCard } from "@components/ProductCard";

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300"]
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "700", "400", "300", "100", "200", "600", "800", "900"]
})


const Product = () => {
    const slides = ["/images/firstSlide.svg", "/images/secondSlide.svg", "/images/thirdSlide.svg", "/images/fourthSlide.svg"]
    const discList = ["Closure : Hook & Loop", "Sole : Polyvinyl Chloride", "Width : Medium", "Outer Material : A-Grade Standard Quality"]
    const lightList = ["Any Product types that You want - Simple, Configurable", "Downloadable/Digital Products, Virtual Products", "Inventory Management with Backordered items", "Flatlock seams throughout."]
    const boldList = [
        {
            title: "Highlights",
            description: "Form FactorWhole"
        },
        {
            title: "Seller",
            description: "No Returns Allowed"
        },
        {
            title: "Services",
            description: "Cash on Delivery available"
        },
    ]
    const relatedProduct = [
        {
          img: "/images/relatedProduct.svg",
          type: "Juice",
          product: "Mixed Almond nuts juice Pack",
          price: 39,
          weight: 20,
          availability: false,
          status: "HOT"
        },
        {
          img: "/images/juice.svg",
          type: "Chocos",
          product: "Mixed Fruits Chocolates Pack",
          price: 20,
          discount: 50,
          pack: 20,
          availability: true,
          status: "NEW"
        },
        {
          img: "/images/relatedProduct.svg",
          type: "Fruits",
          product: "Fresh Mango Slice Juice",
          price: 45,
          availability: false
        },
        {
          img: "/images/juice.svg",
          type: "Juice",
          product: "Organic Apple Juice Pack",
          price: 15,
          capacity: 100,
          availability: true,
          status: "SALE"
        },
      ]
    
    return (
        <section>
            <Path page="Product Page" previousPage="Home" currentPage="Product Page" />
            <div className="flex justify-center items-start gap-6 mt-[100px] mb-[76px]">
                <Sidebar />
                <div className="flex justify-center items-center flex-col gap-12">
                    <div className="flex justify-center items-start gap-6 w-fit">
                        <div className="flex justify-center items-center flex-col border border-gray-8 rounded-3xl gap-[6px] w-[388px] h-[490px]">
                            <Image src="/images/product.svg" alt="product" width={357} height={357} className="rounded-3xl" />
                            <ul className="flex justify-center items-center gap-[10px]">
                                {slides.map((el) => <li key={el}><Image src={el} alt={el} width={74} height={74} /></li>)}
                            </ul>
                        </div>
                        <div className="flex justify-center items-start flex-col">
                            <span className="font-sans font-bold text-[22px] leading-[26px] tracking-0.48 text-gray-4 mb-5">Ground Nuts Oil Pack 52g</span>
                            <div className="flex justify-center items-center gap-[13px] mb-[25px]">
                                <RatingStars />
                                <span className="font-serif font-normal text-[15px] leading-[22px] tracking-0.32 text-gray-7">|</span>
                                <span className="font-serif font-light text-[15px] leading-7 tracking-0.48 text-blue-3">992 Ratings</span>
                            </div>
                            <span className="w-[520px] font-serif font-light text-[15px] leading-7 tracking-0.48 text-gray-7 mb-[29px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nihil laboriosam voluptatem ab consectetur dolorum id, soluta sunt at culpa commodi totam quod natus qui!</span>
                            <div className="flex justify-between items-center mb-[29px] w-full">
                                <div className="flex flex-col gap-2">
                                    <span className="font-sans font-bold text-xl leading-6 tracking-0.48 text-gray-4">$923.00 -78%</span>
                                    <p className="font-serif font-light text-base leading-7 tracking-0.48 text-gray-7">M.R.P. : $1,999.00</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="font-sans font-bold text-xl leading-6 tracking-0.48 text-gray-4">SKU#: WH12</span>
                                    <p className="font-serif font-normal text-lg leading-[27px] tracking-0.32 text-blue-3">In stock</p>
                                </div>
                            </div>
                            <ul className="flex  flex-col gap-4 mb-[21px] list-disc pl-5">
                                {discList.map((el) => <li className="font-serif font-light text-sm leading-7 tracking-0.48 text-gray-3" key={el}>{el}</li>)}
                            </ul>
                            <div className="flex  items-start gap-[34px] flex-col">
                                <div className="flex justify-center items-start flex-col gap-5">
                                    <span className="font-sans font-bold text-base leading-[19px] tracking-0.48 text-gray-4">Weight</span>
                                    <ul className="flex justify-center items-center gap-1">
                                        <li className="font-serif font-light text-sm leading-7 tracking-0.48 text-white bg-blue-3 border border-gray-8 rounded-[10px] px-4 py-[7px]">250g</li>
                                        <li className="font-serif font-light text-sm leading-7 tracking-0.48 text-gray-7 border border-gray-8 rounded-[10px] px-4 py-[7px]">500g</li>
                                        <li className="font-serif font-light text-sm leading-7 tracking-0.48 text-gray-7 border border-gray-8 rounded-[10px] px-4 py-[7px]">1kg</li>
                                        <li className="font-serif font-light text-sm leading-7 tracking-0.48 text-gray-7 border border-gray-8 rounded-[10px] px-4 py-[7px]">2kg</li>
                                    </ul>
                                </div>
                                <div className="flex justify-center items-center gap-1">
                                    <div className="flex justify-center items-center px-2 py-[6px] border border-gray-8 rounded-[10px] gap-[18px]">
                                        <button className="font-serif font-normal text-xl leading-[30px] tracking-0.32 text-gray-3">-</button>
                                        <span className="font-serif font-normal text-sm leading-[35px] tracking-0.32 text-gray-3">1</span>
                                        <button className="font-serif font-normal text-xl leading-[30px] tracking-0.32 text-gray-3">+</button>
                                    </div>
                                    <button className="font-serif font-normal text-sm leading-7 tracking-0.48 text-white px-[26px] py-[9px] border border-blue-3 rounded-[10px] bg-blue-3">View Cart</button>
                                    <button className="w-12 h-12 border border-gray-8 rounded-[10px] flex justify-center items-center"><Image src="/images/heart.png" alt="heart" width={13} height={13} /></button>
                                    <button className="w-12 h-12 border border-gray-8 rounded-[10px] flex justify-center items-center"><Image src="/images/eye.png" alt="heart" width={13} height={13} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start items-start flex-col gap-6">
                        <pre className="font-serif font-medium text-base leading-7 tracking-0.48 text-gray-7 flex justify-center items-center"><span className="text-blue-3">Detail</span>  / Information  / Reviews</pre>
                        <div className="w-[966px] gap-4 border border-gray-8 rounded-[20px] px-4 py-[19px] flex items-start flex-col">
                            <span className="font-serif font-light text-[15px] leading-7 tracking-0.48 text-gray-7 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptatum. Vitae dolores alias repellat eligendi, officiis, exercitationem corporis quisquam delectus cum non recusandae numquam dignissimos molestiae magnam hic natus. Cumque.</span>
                            <ul className="flex items-start flex-col gap-[17px] pl-4">
                                {lightList.map((el) =>
                                    <li className="font-serif font-light text-[15px] leading-7 tracking-0.32 text-gray-7 list-disc" key={el}>{el}</li>
                                )}
                            </ul>
                            <ul className="flex items-start flex-col gap-[10px] pl-4 w-[400px]">
                                {boldList.map((el) =>
                                    <li className="flex justify-between items-center list-disc w-full" key={el.title}>
                                        <span className="font-serif font-medium text-[15px] leading-7 tracking-0.32 text-gray-7">{el.title}</span>
                                        <span className="font-serif font-light text-[15px] leading-7 tracking-0.48 text-gray-7">{el.description}</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col gap-10">
                <div className="flex justify-center items-center flex-col gap-[10px]">
                    <span className="font-sans font-bold text-[25px] leading-[25px] tracking-0.48 text-gray-4 flex justify-center items-center gap-2">Related <p className="text-blue-3">Product</p></span>
                    <span className="font-serif font-light text-sm leading-[18px] tracking-0.48 text-gray-7">Browse The Collection of Top Products.</span>
                </div>
                <div className="flex justify-center items-center gap-6">
                    {relatedProduct.map((el) => <ProductCard link={el} key={el.product}/>)}
                </div>
            </div>
        </section>
    )
}

export default Product