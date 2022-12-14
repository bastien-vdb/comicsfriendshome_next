import React from 'react';
import Head from 'next/head';
import { ConnectWallet } from "@thirdweb-dev/react";
import Image from 'next/image';

function GoConnectWallet(props) {
    return (
        <>
            <Head>
                <meta name="description" content="Connect your wallet to our website and access a wide range of services and features. We support popular wallet options like MetaMask, WalletConnect, and CoinBase Wallet." />
            </Head>

            <main className='mt-20 flex flex-col justify-center items-center p-2' id='anchor_Authenticate'>
                <h1 className='title'>Connect Wallet</h1>

                <div className='comicsParagraphe flex flex-col justify-center items-center p-2 sm:mt-10 sm:w-1/3 shadow-lg shadow-[#78716c]'>
                    <ConnectWallet />
                    <div className='flex justify-center items-center gap-4 m-4 sm:gap-10 sm:mt-16'>
                        <Image className='w-10 md:w-16' alt='Metamask logo' src='/images/Metamask.png' height={70} width={70} />
                        <Image className='w-10 md:w-16' alt='WalletConnect logo' src='/images/WalletConnect.png' height={70} width={70} />
                        <Image className='w-10 md:w-16' alt='CoinBaseWallet logo' src='/images/CoinBaseWallet.png' height={70} width={70} />
                    </div>
                </div>
            </main>
        </>
    );
}

export default GoConnectWallet;