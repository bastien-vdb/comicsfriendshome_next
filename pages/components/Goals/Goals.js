import Head from 'next/head';
import GoalsAccordions from './GoalsAccordions';

function Goals(props) {

    const GoalsContent = [
        {
            source: '/images/Guiding artists_pic.png',
            description:'Guiding artists image logo',
            width: '226',
            height: '80',
            p1: `In the past comic books, artists have often been overlooked in the world of art or they haven’t been given the due credit that they deserve.  Artists have struggled with obtaining rights and receiving royalty rates.`,
            p2: `Comics Friends wants to help artists by giving them back the visibility and credit they deserve. At Comics Friends, we guide artists whether it be through the creation of their own NFT collection or by exposing their work on a large virtual stage`,
            p3: `We work very closely with artists from the beginning to the end.  And throughout their creation to ensure that the artist's vision and desired outcome are & their work.`
        },
        {
            source: '/images/VitualComicMuseum_pic.png',
            description:'Virtual Comic Museum logo',
            width: '345',
            height: '68',
            p1: `In the past comic books, artists have often been overlooked in the world of art or they haven’t been given the due credit that they deserve.  Artists have struggled with obtaining rights and receiving royalty rates.`,
            p2: `Comics Friends wants to help artists by giving them back the visibility and credit they deserve. At Comics Friends, we guide artists whether it be through the creation of their own NFT collection or by exposing their work on a large virtual stage`,
            p3: `We work very closely with artists from the beginning to the end.  And throughout their creation to ensure that the artist's vision and desired outcome are & their work.`
        },
        {
            source: '/images/Web3CollectorForum_pic.png',
            description:'Web 3 collector Forum logo',
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
                <meta name="description" content="Discover the goals of Comics Friends, a platform that supports and guides artists in the creation and exposure of their work. Learn how Comics Friends helps artists receive the visibility and credit they deserve through NFT collections and virtual stages, and how we work closely with artists to ensure their vision is achieved." />
            </Head>

            <main className='relative' id='anchor_Goals'>
                <div className='comicsStack'></div>
                <div className='comicsStack2'></div>

                <div className=''>
                    <h1 className='title ml-8 lg:ml-72'>Goals</h1>
                    <div className='flex justify-between flex-col'>
                        {GoalsContent.map((e, key) => <GoalsAccordions GoalsContent={e} />)}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Goals;