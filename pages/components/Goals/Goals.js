import React, { useRef, useState } from 'react';

function Goals(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toogleAccordion = () => {
        setIsOpen(e => !e);
    }

    return (

        <div className='h-[100vh]'>
            <span className='text-white text-6xl'>Goals</span>
            <div className='bg-[#1B0F2C] m-6 p-2 rounded-xl'>
                <div className='w-full flex justify-between' onClick={toogleAccordion}>
                    <img style={{ display: isOpen ? 'none' : 'block' }} alt='Guiding artists_pic.png' src='Guiding artists_pic.png' />
                    <button style={{ display: isOpen ? 'none' : 'block' }}>
                        <div className='rounded-full border border-yellow-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </button>
                </div>

                <div style={{ display: isOpen ? 'block' : 'none' }} className='accordion-body border-0 flex gap-32'>

                    <button style={{ float: 'right' }} onClick={toogleAccordion}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                    </button>
                    <div className='w-full'>
                        <img alt='Guiding artists_pic.png' src='Guiding artists_pic.png' />
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p>
                            In the past comic books, artists have often been overlooked in the world of art or they haven’t been given the due credit that they deserve.  Artists have struggled with obtaining rights and receiving royalty rates.
                        </p>
                        <p>
                            Comics Friends wants to help artists by giving them back the visibility and credit they deserve. At Comics Friends, we guide artists whether it be through the creation of their own NFT collection or by exposing their work on a large virtual stage
                        </p>
                        <p>
                            We work very closely with artists from the beginning to the end.  And throughout their creation to ensure that the artist's vision and desired outcome are & their work.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Goals;