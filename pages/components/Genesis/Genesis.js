import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

function Genesis(props) {
    return (
        <>
            <Head>
                <meta name="description" content="Explore the Comics Friends NFT collection, featuring four levels ranked by color and individual cards with unique advantages. Learn more about this exciting collection and how it grants access to the Comics Friends ecosystem, including the metaverse museum and the web 3 forum." />
            </Head>
            <main className='relative' id='anchor_Genesis'>
                <div className='comicsStack comicsStackGenesis'></div>
                <div className='comicsStack2 comicsStackGenesis'></div>

                <div className='bg-comicsStripe flex flex-col gap-6 p-6 mt-10'>
                    <div className='flex flex-wrap flex-col lg:flex-row justify-center items-center lg:gap-44'>
                        <h1 className='title'>Genesis</h1>
                        <div className='comicsParagraphe flex items-center sm:p-6 sm:w-1/2 lg:w-[47em]'>
                            <p>The Comic friends NFT collection will consist of 4 different comic bubbles giving access to the whole Comics Friends ecosystem including access to the metaverse museum and the web 3 forum. As well as adventures on upcoming drops.</p>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center gap-6'>
                        <div className='flex flex-col items-center gap-10 w-96'>
                            <p className='comicsParagraphe'>The different levels will be ranked by 4 different colors: Black is the least common and red is the most common. Individual cards will have different advantages.</p>

                            <div class="card">
                                <div class="imgBox">
                                    <div className='comicsCard border-4 border-red-500 p-4 rounded-xl'>
                                        <Image className='h-[25em]' alt='DC Comics Miracle old book page picture' src='/images/MiracleMister.png' height={500} width={500} />
                                    </div>
                                </div>
                                <div class="details">
                                    <h2>lorem ipsum dolor</h2>
                                    <p>Rarity specific for this </p>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-wrap justify-center gap-6 lg:items-center'>
                            <div className='flex flex-col gap-6'>

                                <div class="card">
                                    <div class="imgBox">
                                        <div className='comicsCard border-4 border-blue-500 p-4 rounded-xl'>
                                            <Image className='lg:h-[16em]' alt='Comic speech bubbles old book page picture' src='/images/comicsStackGenesis1.png' height={400} width={500} />
                                        </div>
                                    </div>
                                    <div class="details">
                                        <h2>lorem ipsum dolor</h2>
                                        <p>Rarity specific for this </p>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="imgBox">
                                        <div className='comicsCard border-4 border-yellow-500 p-4 rounded-xl'>
                                            <Image className='lg:h-[16em]' alt='Comic speech bubbles old book page picture' src='/images/comicsStackGenesis2.png' height={400} width={500} />
                                        </div>
                                    </div>
                                    <div class="details">
                                        <h2>lorem ipsum dolor</h2>
                                        <p>Rarity specific for this </p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center lg:items-start'>

                                <div class="card">
                                    <div class="imgBox">
                                        <div className='comicsCard border-4 border-black p-4 rounded-xl'>
                                            <Image className='md:w-[13em] lg:w-[15em]' alt='Comics Sub Mariner old book page picture' src='/images/comicsStackGenesis3.png' height={200} width={500} />
                                        </div>
                                    </div>
                                    <div class="details">
                                        <h2>lorem ipsum dolor</h2>
                                        <p>Rarity specific for this </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Genesis;