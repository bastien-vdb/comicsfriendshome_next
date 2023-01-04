import React from 'react';

function ButtonCloseAccordion({ handleAccordion }) {
    return <button style={{ float: 'right' }} onClick={handleAccordion}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
    </button>
}

export default ButtonCloseAccordion;