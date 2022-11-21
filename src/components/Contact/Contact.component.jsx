import { useState, React } from "react";
import { ToastContainer } from 'react-toastify'
import {RiMailSendLine} from 'react-icons/ri'



import Title from '../Title'
import { notifySuccess, notifyFailure } from './NotifyAssets'

import emailjs from "emailjs-com";


const Contact = () => {

    const emptyFields = {
        from_name: '',
        message: '',
        from_email: ''
    }

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        from_email: ''
    })

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            setToSend(emptyFields);
            notifySuccess();
            await emailjs.send(
                'service_wjt3ixk',
                'template_cm4r3fy',
                toSend,
                'kH7W3F3XX0plcsGK0'
            )
        } catch (error) {
            notifyFailure();
        }
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };


    return (
        <div name='Contact' className="w-full h-110 bg-gradient-to-b from-black to-gray-800
    p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
                <div className="pb-8">
                    <Title title='Contact' />
                    <p className="py-6 mt-2">Submit the form below to get in touch with me.</p>
                </div>
                <div className="flex justify-center items-center">
                    <form action="" className="flex flex-col w-full md:w-1/2"
                        onChange={handleChange} onSubmit={onSubmitHandler}>
                        <input required type="text" name="from_name" id="" placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white
                    focus:outline-none" onChange={handleChange} value={toSend.from_name} />
                        <input required type="email" name="from_email" id="" placeholder="Enter your email"
                            className="p-2 bg-transparent border-2 rounded-md text-white
                    focus:outline-none my-4" onChange={handleChange} value={toSend.from_email} />
                        <textarea name="message" placeholder="Enter your message" rows="10" className="p-2 bg-transparent border-2
                rounded-md text-white focus:outline-none" onChange={handleChange} value={toSend.message}></textarea>

                        <button className="text-white bg-gradient-to-b from-cyan-500
                to-blue-500 px-6 py-3 my-8 mx-auto flex items-center
                rounded-md hover:scale-110 duration-300 hover:bg-gradient-to-bl " type="submit"
                ><RiMailSendLine size={20} className='mx-1'/>Send!</button>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </div>)
}

export default Contact;
