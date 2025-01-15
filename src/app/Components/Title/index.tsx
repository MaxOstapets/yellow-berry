interface IProps {
    span: string,
    titleParagraph?: string,
    paragraph: string,
    alignItems: string,
    width?: string,
    textAlign: string,
    mb?: string,
    mt?: string
}

export const Title:React.FC<IProps> = ({span, titleParagraph, paragraph, alignItems, width, textAlign, mb, mt}) => {
    return (
        <div className={`flex justify-center ${alignItems} flex-col gap-[9.5px] ${mb} ${mt}`}>
            <span className="font-sans font-bold text-[25px] leading-[25px] tracking-0.48 text-gray-4 flex justify-center items-center gap-2">{span} <p className="text-blue-3">{titleParagraph}</p></span>
            <p className={`font-serif font-light text-sm leading-[18px] tracking-0.48 ${textAlign} ${width} text-gray-7`}>{paragraph}</p>
        </div>
    )
}