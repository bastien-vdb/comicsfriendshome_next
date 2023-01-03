import AppBarMainMenu from '../AppBar/AppBarMainMenu';
import GoalsAccordions from './GoalsAccordions';
import Footer from '../Footer/Footer';

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
            <div className='comicsStack'></div>
            <div className='comicsStack2'></div>
            <AppBarMainMenu />
            <div className='text-sm'>
                <span className='text-white text-6xl m-4'>Goals</span>

                <div className='flex justify-between flex-col'>
                    {GoalsContent.map((e, key) => <GoalsAccordions GoalsContent={e} />)}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Goals;