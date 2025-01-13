import { IoStarOutline, IoStarSharp } from "react-icons/io5";

export const RatingStars = () => {
    return (
        <ul className='flex justify-center items-center gap-1 text-yellow-3'>
            <li><IoStarSharp /></li>
            <li><IoStarSharp /></li>
            <li><IoStarSharp /></li>
            <li><IoStarSharp /></li>
            <li><IoStarOutline /></li>
        </ul>
    )
}