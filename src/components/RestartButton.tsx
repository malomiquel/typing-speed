import { useRef } from "react"
import { MdRefresh } from "react-icons/md"

const RestartButton = ({
    onRestart: handleRestart,
    className = '',
}: {
    onRestart: () => void
    className?: string
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null)

    const handleClick = () => {
        buttonRef.current?.blur()
        handleRestart()
    }

    return (
        <button
            ref={buttonRef}
            className={`flex items-center justify-center${className}`}
            onClick={handleClick}
        >
            <MdRefresh className="w-6 h-6" />
        </button>
    )
}

export default RestartButton;