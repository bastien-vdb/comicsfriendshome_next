import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

function Team(props) {

    return (
        <>
            <Head>
                <meta name="description" content="Meet the Comics Friends team, a group of passionate individuals with expertise in various fields working together to support and guide artists. Learn more about the team members and their roles on the Comics Friends platform." />
            </Head>

            <main id='anchor_Team'>
                <div className='mt-20 p-10 text-sm sm:text-base flex flex-wrap justify-center items-center gap-6 sm:gap-40'>
                    <h1 className='title'>The Team</h1>
                    <p className='w-[40em]'>Introducing the Comics friends team. The team is made up of a range of individuals with expertise in their individuals' fields of work. The commonality between all of them is their shared passion for the Comic Book universe.</p>
                </div>
                <div className='mt-16 flex items-center justify-center flex-wrap gap-6 sm:gap-16 sm:mx-30 lg:mx-60'>
                    {members.map((e, key) => (
                        <Member key={key} name={e.name} position={e.position} url={e.url} />
                    ))
                    }
                </div>
            </main>
        </>
    );
}

function Member({ name, position, url }) {
    return (
        <div className="flex justify-center">
            <div className="block p-6 rounded-2xl shadow-lg border border-gray-600 max-w-sm shadow-4xl shadow-lg shadow-[#9850b3]">
                <Image alt={name} src={url} height={200} width={200} />
                <h5 className="mt-8 text-xl leading-tight font-medium mb-2">{name}</h5>
                <p className="text-red-100 text-base mb-4">
                    {position}
                </p>
            </div>
        </div>
    )
}

const members = [
    {
        name: 'Arthur Fuchs',
        position: 'CEO Musée',
        url: '/images/members/member1.png'
    },
    {
        name: 'Adrien Fuchs',
        position: 'CEO ComicsFriends',
        url: '/images/members/member2.png'
    },
    {
        name: 'Ruben Sananes',
        position: 'CEO player one labs',
        url: '/images/members/member3.png'
    },
    {
        name: 'Frederic Bosser',
        position: 'CEO les arts dessinés',
        url: '/images/members/member4.png'
    },
    {
        name: 'Erich Schal',
        position: 'Trademark Law Advisor',
        url: '/images/members/member5.png'
    },
    {
        name: 'Jennifer Westjohn',
        position: 'DA',
        url: '/images/members/member6.png'
    },
    {
        name: 'Alex Vuillaume',
        position: 'CEO player one labs',
        url: '/images/members/member7.png'
    },
    {
        name: 'Bastien VDB',
        position: 'CTO',
        url: '/images/members/member8.png'
    },
]

export default Team;