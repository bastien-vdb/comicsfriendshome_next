import React from 'react';
import { ConnectWallet } from "@thirdweb-dev/react";
import Image from 'next/image';

function GoConnectWallet(props) {
    return (
        <div className='mt-20 flex flex-col justify-center items-center p-2'>
            <div id='anchor_Authenticate'></div>
            <span className='text-white text-4xl lg:text-6xl m-6 block'>Connect Wallet</span>

            <div className='comicsParagraphe flex flex-col justify-center items-center p-2 sm:mt-10 sm:w-1/3'>
                <ConnectWallet />
                <div className='flex justify-center items-center gap-4 m-4 sm:gap-10 sm:mt-16'>
                    <Image className='w-10 md:w-16' alt='Metamask.png' src='/images/Metamask.png' height={70} width={70} />
                    <Image className='w-10 md:w-16' alt='WalletConnect.png' src='/images/WalletConnect.png' height={70} width={70} />
                    <Image className='w-10 md:w-16' alt='CoinBaseWallet.png' src='/images/CoinBaseWallet.png' height={70} width={70} />
                </div>
            </div>
        </div>
    );
}

export default GoConnectWallet;