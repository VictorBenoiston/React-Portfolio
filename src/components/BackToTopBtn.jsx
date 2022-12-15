import { useEffect, useState } from 'react'
import { BiArrowFromBottom } from 'react-icons/bi'


export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 200) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        console.log(isVisible)


        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [isVisible])

    return (
        <div className="fixed bottom-2 right-2">
            <button
                type="button"
                onClick={scrollToTop}
                className={
                    isVisible ? ("mr-5 mb-5 bottom-5 opacity-100 bg-cyan-500 hover:bg-blue-500 focus:ring-cyan-500 placeholder:inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2") : ("opacity-0")}
            >
                <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
            </button>
        </div>
    )
}
