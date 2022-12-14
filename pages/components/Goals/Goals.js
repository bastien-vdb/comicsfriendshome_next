import React, { useRef, useState } from 'react';
import AppBarMainMenu from '../AppBar/AppBarMainMenu';

function Goals(props) {

    const [accordionIsOpen1, setAccordionIsOpen1] = useState(false);
    const [accordionIsOpen2, setAccordionIsOpen2] = useState(false);
    const [accordionIsOpen3, setAccordionIsOpen3] = useState(false);


    const handleAccordion1 = () => {
        setAccordionIsOpen1(e => !e);
    }

    const handleAccordion2 = () => {
         setAccordionIsOpen2(e => !e);
     }

     const handleAccordion3 = () => {
         setAccordionIsOpen3(e => !e);
     }

    return (
        <>
            <AppBarMainMenu />
            <div className='bg-comicsStripe text-sm'>
                <span className='text-white text-6xl m-4'>Goals</span>

                <div className='accordion_component bg-[#1B0F2C] m-6 p-4 rounded-xl lg:p-6'>

                    <div className='w-full flex flex-col justify-between items-center p-4 gap-4 md:flex-row' onClick={handleAccordion1}>
                        <div style={{ display: accordionIsOpen1 ? 'none' : 'block' }}>
                            <img alt='Guiding artists_pic.png' src='/Guiding artists_pic.png' />
                            <p>
                                In the past comic books, artists have often been overlooked in the world of art or they haven’t been given the due credit that they deserve.  Artists have struggled with obtaining rights and receiving royalty rates.
                            </p>
                        </div>
                        <button style={{ display: accordionIsOpen1 ? 'none' : 'block' }}>
                            <div className='rounded-full border border-yellow-600'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </button>
                    </div>

                    <div style={{ display: accordionIsOpen1 ? 'block' : 'none' }} className='accordion-body border-0 flex gap-32'>

                        <button style={{ float: 'right' }} onClick={handleAccordion1}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </button>
                        <div className='w-full'>
                            <img alt='Guiding artists_pic.png' src='/Guiding artists_pic.png' />
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

                <div className='accordion_component bg-[#1B0F2C] m-6 p-4 rounded-xl lg:p-10'>

                    <div className='w-full flex flex-col justify-between items-center p-4 gap-4 md:flex-row md:p-6' onClick={handleAccordion2}>
                        <div style={{ display: accordionIsOpen2 ? 'none' : 'block' }}>
                            <img alt='VitualComicMuseum_pic.png' src='/VitualComicMuseum_pic.png' />
                            <p>
                                In the past comic books, artists have often been overlooked in the world of art or they haven’t been given the due credit that they deserve.  Artists have struggled with obtaining rights and receiving royalty rates.
                            </p>
                        </div>
                        <button style={{ display: accordionIsOpen2 ? 'none' : 'block' }}>
                            <div className='rounded-full border border-yellow-600'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </button>
                    </div>

                    <div style={{ display: accordionIsOpen2 ? 'block' : 'none' }} className='accordion-body border-0 flex gap-32'>

                        <button style={{ float: 'right' }} onClick={handleAccordion2}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </button>
                        <div className='w-full'>
                            <img alt='VitualComicMuseum_pic.png' src='/VitualComicMuseum_pic.png' />
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

                <div className='accordion_component bg-[#1B0F2C] m-6 p-4 rounded-xl lg:p-10'>

                    <div className='w-full flex flex-col justify-between items-center p-4 gap-4 md:flex-row md:p-6' onClick={handleAccordion3}>
                        <div style={{ display: accordionIsOpen3 ? 'none' : 'block' }}>
                            <img alt='Web3CollectorForum_pic.png' src='/Web3CollectorForum_pic.png' />
                            <p>
                                In the past comic books, artists have often been overlooked in the world of art or they haven’t been given the due credit that they deserve.  Artists have struggled with obtaining rights and receiving royalty rates.
                            </p>
                        </div>
                        <button style={{ display: accordionIsOpen3 ? 'none' : 'block' }}>
                            <div className='rounded-full border border-yellow-600'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </button>
                    </div>

                    <div style={{ display: accordionIsOpen3 ? 'block' : 'none' }} className='accordion-body border-0 flex gap-32'>

                        <button style={{ float: 'right' }} onClick={handleAccordion3}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </button>
                        <div className='w-full'>
                            <img alt='Web3CollectorForum_pic.png' src='/Web3CollectorForum_pic.png' />
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
        </>
    );
}

export default Goals;