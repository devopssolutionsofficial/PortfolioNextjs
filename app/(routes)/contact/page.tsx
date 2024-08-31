"use client"
import React, { useRef, FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import AvatarServices from '@/app/components/Avatar-services';
import CircleImage from '@/app/components/circle-image';
import TransitionPage from '@/app/components/TransitionPage';
import { Phone } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { PacmanLoader } from 'react-spinners';

const Page: React.FC = () => {
    // Type the form ref to handle the HTMLFormElement or null
    const formRef = useRef<HTMLFormElement | null>(null);

    // State to handle loading status
    const [loading, setLoading] = useState(false);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when the email sending starts

        if (formRef.current) {
            emailjs
                .sendForm('service_aq4rfcw', 'template_82srsxl', formRef.current, {
                    publicKey: '7MQkMqtyVRFQGIU1Y',
                })
                .then(
                    () => {
                        setLoading(false); // Set loading to false after success
                        toast.success('Mensaje enviado!!');

                        // Reset the form after successful submission
                        if (formRef.current) {
                            formRef.current.reset();
                        }
                    },
                    (error) => {
                        setLoading(false); // Set loading to false if there's an error
                        toast.error("Ops, Algo ha fallado!!");
                    },
                );
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen my-6 md:my-0'>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <form autoComplete='off' ref={formRef} onSubmit={sendEmail} className='flex flex-col items-center'>
                <div className="flex items-center justify-center gap-2 mb-4">
                    <h1 className='text-center text-4xl text-secondaryButton font-bold'>Contáctanos</h1>
                    <Phone size={35} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full p-8">
                    <div className="flex flex-col items-start w-full">
                        <label htmlFor="name" className='font-bold'>Nombre y Apellido</label>
                        <input
                            type="text"
                            id="name"
                            name="user_name"
                            required
                            placeholder='Nombre'
                            className='p-2 rounded-lg my-3 px-3 text-black font-semibold focus:outline'
                        />
                    </div>

                    <div className="flex flex-col items-start w-full">
                        <label htmlFor="email" className='font-bold'>Email</label>
                        <input
                            type="email"
                            id="email"
                            name='user_email'
                            required
                            placeholder='ejemplo@gmail.com'
                            className='p-2 rounded-lg my-3 px-3 text-black font-semibold focus:outline'
                        />
                    </div>

                    <div className="flex flex-col items-start w-full">
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            className='p-2 rounded-lg my-3 px-3 text-black font-semibold focus:outline'
                        />
                    </div>
                </div>



                {loading ? (
                    <div className="mt-4">
                        <PacmanLoader color='#f5741c' />
                    </div>
                ) : (
                    <button
                        type="submit"
                        className='bg-secondaryButton rounded-lg hover:bg-secondaryButton/80 transition py-3 px-8 w-fit'
                        disabled={loading} // Disable the button when loading
                    >
                        Enviar
                    </button>
                )}
            </form>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default Page;
