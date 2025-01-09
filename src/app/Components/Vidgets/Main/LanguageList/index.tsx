import { Quicksand } from "next/font/google"

interface ILanguage {
    language: string
}

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "700", "400", "300"]
})

export const LanguageList: React.FC = () => {
    const languages: ILanguage[] = [{ language: "IN" }, { language: "DR" }, { language: "LI" }, { language: "FB" }]

    return (
        <ul className='flex justify-center items-center gap-3 flex-col-reverse'>
            {languages.map((el) =>
                <li className='-rotate-90 font-sans font-medium text-base leading-7 tracking-0.48 text-gray-3' key={el.language}>{el.language}</li>
            )}
        </ul>
    )
}
