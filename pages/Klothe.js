import React from 'react';

function Klothe(props) {
    return (
        <div>
            halloooo
            <video className='fixed top-0' loop autoPlay muted playsInline >
                <source src="/video/comicsmov.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </div>
    );
}

export default Klothe;