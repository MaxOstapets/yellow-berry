interface ILanguage {
    language: string
}

const LanguageItem: React.FC<ILanguage> = ({ language }) => {
    return (
        <li className='-rotate-90 font-sans font-medium text-base leading-7 tracking-0.48 text-gray-3'>{language}</li>
    )
}

export default LanguageItem