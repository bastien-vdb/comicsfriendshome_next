import React, { useState } from 'react';
import ButtonCloseAccordion from '../reusable/ButtonCloseAccordion';
import ButtonOpenAccordion from '../reusable/ButtonOpenAccordion';
import Image from 'next/image';

function GoalsAccordions({ GoalsContent }) {
    const [accordionIsOpen1, setAccordionIsOpen] = useState(false);

    const handleAccordion = () => {
        setAccordionIsOpen(e => !e);
    }

    return (
        <div className='accordion_component bg-[#1B0F2C] m-6 p-4 rounded-xl lg:p-6 lg:mx-40 xl:mx-72'>
            <div className='flex flex-col justify-between items-center p-4 gap-4 md:flex-row' onClick={handleAccordion}>
                <div className='flex flex-col items-center justify-between md:flex-row' style={{ display: accordionIsOpen1 ? 'none' : 'flex' }}>
                    {/* <Image width={GoalsContent.width} height={GoalsContent.height} className='paw1' alt={GoalsContent.source} src={GoalsContent.source} /> */}
                    <img alt={GoalsContent.source} src={GoalsContent ? GoalsContent.source : ''} />
                    <div className='md:w-1/2'>
                        {GoalsContent.p1}
                    </div>
                    <ButtonOpenAccordion accordionIsOpen={accordionIsOpen1} />
                </div>
            </div>

            <div style={{ display: accordionIsOpen1 ? 'flex' : 'none' }} className='accordion-body border-0 flex flex-col justify-center items-center'>

                <ButtonCloseAccordion handleAccordion={handleAccordion} />
                <div className='w-full'>
                    <img alt={GoalsContent.source} src={GoalsContent.source} />
                </div>
                <div className='flex flex-col gap-6'>
                    <p>
                        {GoalsContent.p1}
                    </p>
                    <p>
                        {GoalsContent.p2}
                    </p>
                    <p>
                        {GoalsContent.p3}
                    </p>
                </div>
            </div>

        </div>
    );
}

export default GoalsAccordions;