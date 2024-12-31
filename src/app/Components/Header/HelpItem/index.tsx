interface IProps {
    text: string,
}

interface ILink {
    link: IProps
}

const HelpItem: React.FC<ILink> = ({ link }) => {
    const { text } = link

    return (
        <li>{text}</li>
    )
}

export default HelpItem;