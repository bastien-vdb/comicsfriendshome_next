import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

function Partnership(props) {
    return (
        <>
            <Head>
                <title>Partnership - Comics Friends NFT Collection with MOEBIOS</title>
                <meta name="description" content="Stay up to date on the Comics Friends partnership with world-renowned artist MOEBIOS, also known as JEAN GIRAUD. Discover the upcoming release of the Comics Friends NFT collection, featuring works by this influential artist, and learn more about the collection launch towards the end of October." />
            </Head>

            <main className='mt-20 p-10 text-sm sm:text-base flex flex-col items-center relative' id='anchor_Partnership'>
                <div className='comicsStack'></div>
                <div className='comicsStack2'></div>
                <span className='p-2 text-3xl sm:text-4xl md:text-6xl lg:text-7xl lg:w-1/2'>Comics Friends First Partner NFT Drop</span>
                <div className='flex justify-center items-start gap-4 flex-col sm:flex-row sm:gap-8'>
                    <Image className='sm:h-[40em] sm:w-[25em]' alt='moebiusfl3.png' src='/images/moebiusfl3.png' height={300} width={300} />
                    <div className='sm:bg-[#1B0F2C] sm:p-12 rounded-xl text-justify w-11/12 sm:w-96 sm:mt-20 flex flex-col gap-4'>
                        <p>The first Comics friends collection will be a collection by world renowned artist <b>MOEBIOS</b></p>
                        <p><b>JEAN GIRAUD</b> was a french artist, cartoonist, and writer. He has been described as the most influential “Bande Dessinee” artist. His most famous works include the series <b>Blue-Berry. Arzach. The Inicial</b> and many more...</p>
                        <p>The collection is set to launch towards the end of October. Further information will be unveiled within the fouram after the release of the Comics Friends membership cards.</p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Partnership;