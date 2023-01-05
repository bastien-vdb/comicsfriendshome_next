import Head from 'next/head';
import GoalsAccordions from './GoalsAccordions';

function Goals(props) {

    const GoalsContent = [
        {
            source: '/Guiding artists_pic.png',
            width: '226',
            height: '80',
            p1: `In the past comic books, artists have often been overlooked in the world of art or they haven’t been given the due credit that they deserve.  Artists have struggled with obtaining rights and receiving royalty rates.`,
            p2: `Comics Friends wants to help artists by giving them back the visibility and credit they deserve. At Comics Friends, we guide artists whether it be through the creation of their own NFT collection or by exposing their work on a large virtual stage`,
            p3: `We work very closely with artists from the beginning to the end.  And throughout their creation to ensure that the artist's vision and desired outcome are & their work.`
        },
        {
            source: '/VitualComicMuseum_pic.png',
            width: '345',
            height: '68',
            p1: `In the past comic books, artists have often been overlooked in the world of art or they haven’t been given the due credit that they deserve.  Artists have struggled with obtaining rights and receiving royalty rates.`,
            p2: `Comics Friends wants to help artists by giving them back the visibility and credit they deserve. At Comics Friends, we guide artists whether it be through the creation of their own NFT collection or by exposing their work on a large virtual stage`,
            p3: `We work very closely with artists from the beginning to the end.  And throughout their creation to ensure that the artist's vision and desired outcome are & their work.`
        },
        {
            source: '/Web3CollectorForum_pic.png',
            width: '365',
            height: '70',
            p1: `In the past comic books, artists have often been overlooked in the world of art or they haven’t been given the due credit that they deserve.  Artists have struggled with obtaining rights and receiving royalty rates.`,
            p2: `Comics Friends wants to help artists by giving them back the visibility and credit they deserve. At Comics Friends, we guide artists whether it be through the creation of their own NFT collection or by exposing their work on a large virtual stage`,
            p3: `We work very closely with artists from the beginning to the end.  And throughout their creation to ensure that the artist's vision and desired outcome are & their work.`
        }
    ]

    return (
        <>
            <Head>
                <title>Goals - Comics Friends: Supporting and Guiding Artists</title>
                <meta name="description" content="Discover the goals of Comics Friends, a platform that supports and guides artists in the creation and exposure of their work. Learn how Comics Friends helps artists receive the visibility and credit they deserve through NFT collections and virtual stages, and how we work closely with artists to ensure their vision is achieved." />
            </Head>

            <main className='relative' id='anchor_Goals'>
                <div className='comicsStack'></div>
                <div className='comicsStack2'></div>

                <div className='text-sm'>
                    <span className='p-8 lg:p-44 xl:p-72 text-3xl sm:text-4xl md:text-6xl lg:text-7xl'>Goals</span>
                    <div className='flex justify-between flex-col'>
                        {GoalsContent.map((e, key) => <GoalsAccordions GoalsContent={e} />)}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Goals;