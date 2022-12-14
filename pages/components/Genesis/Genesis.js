import React from 'react';
import Image from 'next/image';
import AppBarMainMenu from '../AppBar/AppBarMainMenu';

function Genesis(props) {
    return (
        <>
            <AppBarMainMenu />
            <div className='bg-comicsStripe flex flex-col gap-6 p-6 mt-10'>
                <div className='flex flex-wrap flex-col lg:flex-row justify-center items-center lg:gap-44'>
                    <span className='text-white text-6xl m-4'>Genesis</span>
                    <div className='comicsParagraphe flex items-center sm:p-6 sm:w-1/2 lg:w-[47em]'>
                        <p>The Comic friends NFT collection will consist of 4 different comic bubbles giving access to the whole Comics Friends ecosystem including access to the metaverse museum and the web 3 forum. As well as adventures on upcoming drops.</p>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center gap-6'>
                    <div className='flex flex-col items-center gap-10 w-96'>
                        <p className='comicsParagraphe'>The different levels will be ranked by 4 different colors: Black is the least common and red is the most common. Individual cards will have different advantages.</p>
                        <div className='comicsCard border-2 border-red-500 p-4 rounded-xl'>
                            <Image className='h-[25em]' alt='MiracleMister.png' src='/images/MiracleMister.png' height={500} width={500} />
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center gap-6 lg:items-center'>
                        <div className='flex flex-col gap-6'>
                            <div className='comicsCard border-2 border-blue-500 p-4 rounded-xl'>
                                <Image className='lg:h-[16em]' alt='comicsStackGenesis1.png' src='/images/comicsStackGenesis1.png' height={400} width={500} />
                            </div>
                            <div className='comicsCard border-2 border-yellow-500 p-4 rounded-xl'>
                                <Image className='lg:h-[16em]' alt='comicsStackGenesis2.png' src='/images/comicsStackGenesis2.png' height={400} width={500} />
                            </div>
                        </div>
                        <div className='flex justify-center items-center lg:items-start'>
                            <div className='comicsCard border-2 border-black p-4 rounded-xl'>
                                <Image className='md:w-[13em] lg:w-[15em]' alt='comicsStackGenesis3.png' src='/images/comicsStackGenesis3.png' height={200} width={500} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Genesis;