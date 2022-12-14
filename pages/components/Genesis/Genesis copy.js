import React from 'react';
import Image from 'next/image';
import AppBarMainMenu from '../AppBar/AppBarMainMenu';

function Genesis(props) {
    return (
        <>
            <AppBarMainMenu />
            <div className='bg-comicsStripe flex flex-col gap-6 mt-10'>
                <div className='flex flex-wrap justify-center items-center'>
                    <span className='text-white text-6xl m-4'>Genesis</span>
                    <div className='comicsParagraphe w-1/2 flex items-center p-6'>
                        <p>The Comic friends NFT collection will consist of 4 different comic bubbles giving access to the whole Comics Friends ecosystem including access to the metaverse museum and the web 3 forum. As well as adventures on upcoming drops.</p>
                    </div>
                </div>
                <div className='flex justify-center gap-6'>
                    <div className='flex flex-col items-center gap-10'>
                        <p className='comicsParagraphe w-72 p-6'>The different levels will be ranked by 4 different colors:  Black is the least common and red is the most common. Individual cards will have different advantages.</p>
                        <Image alt='MiracleMister.png' src='/images/MiracleMister.png' height={300} width={300} />
                    </div>
                    <div className='flex gap-6'>
                        <div className='flex flex-col gap-6'>
                            <Image alt='comicsStackGenesis1.png' src='/images/comicsStackGenesis1.png' height={400} width={500} />
                            <Image alt='comicsStackGenesis2.png' src='/images/comicsStackGenesis2.png' height={400} width={500} />
                        </div>
                        <div className='flex justify-center'>
                            <Image alt='comicsStackGenesis3.png' src='/images/comicsStackGenesis3.png' height={200} width={200} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Genesis;