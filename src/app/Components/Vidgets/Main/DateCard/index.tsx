import Image from "next/image";
import { Quicksand } from "next/font/google";

interface IProps {
  date: string;
  description: string;
  img: string;
}

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "700", "400", "300"]
})

export const DateCard: React.FC = () => {
  const dateCards: IProps[] = [
    {
      date: "June 30,2024 - organic",
      description: "Marketing Guide: 5 Steps to Success.",
      img: "/images/plasticPeople.svg",
    },
    {
      date: "May 10,2023 - organic",
      description: "Best way to solve business deal issue.",
      img: "/images/pumpkins.svg",
    },
    {
      date: "Jan 10,2022 - organic",
      description: "Business ideas to grow your business.",
      img: "/images/apple.svg",
    },
    {
      date: "Feb 12,2022 - organic",
      description: "31 customer stats know in 2020.",
      img: "/images/apples.svg",
    },
  ];

  return (
    <div className="flex justify-center items-center gap-6">
      {dateCards.map((el, index) => (
        <div className="relative" key={`${el.date}-${index}`}>
          <Image src={el.img} alt="date card" className="rounded-[30px]" width={306} height={306} />
          <div className="w-[296px] h-[97px] bg-white-transparent flex justify-center items-start gap-[2px] flex-col flex-wrap rounded-[30px] pl-[15px] absolute top-[205px] left-[5.2px]">
            <p className="font-sans font-normal text-[13px] leading-[26px] tracking-0.32 text-gray-7">{el.date}</p>
            <span className="font-sans font-medium text-base leading-5 tracking-0.48 text-gray-4">{el.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
