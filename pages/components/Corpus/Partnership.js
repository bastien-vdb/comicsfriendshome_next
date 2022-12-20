import React from 'react';
import Image from 'next/image';

function Partnership(props) {
    return (
        <div className='mt-20 p-10 text-sm sm:text-base flex flex-col items-center'>
            <div id='anchor_Partnership'></div>
            <span className='text-white text-4xl lg:text-6xl m-4 text-right sm:w-[10em] block'>Comics Friends First Partner NFT Drop</span>
            <div className='flex justify-center items-start gap-4 flex-col sm:flex-row sm:gap-8'>
                <Image className='sm:h-[40em] sm:w-[25em]' alt='moebiusfl3.png' src='/images/moebiusfl3.png' height={300} width={300} />
                <div className='text-justify w-11/12 sm:w-96 sm:mt-20 flex flex-col gap-4'>
                    <p>The first Comics friends collection will be a collection by world renowned artist <b>MOEBIOS</b></p>
                    <p><b>JEAN GIRAUD</b> was a french artist, cartoonist, and writer. He has been described as the most influential “Bande Dessinee” artist. His most famous works include the series <b>Blue-Berry. Arzach. The Inicial</b> and many more...</p>
                    <p>The collection is set to launch towards the end of October. Further information will be unveiled within the fouram after the release of the Comics Friends membership cards.</p>
                </div>
            </div>
        </div>
    );
}

export default Partnership;