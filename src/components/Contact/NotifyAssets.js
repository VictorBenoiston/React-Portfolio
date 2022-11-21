import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


export const notifySuccess = () => {
    toast.success('E-mail successfully sent! Thank you for your contact!', {
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}

export const notifyFailure = () => {
    toast.error('Something went wrong. Your data is safe, try again.', {
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}