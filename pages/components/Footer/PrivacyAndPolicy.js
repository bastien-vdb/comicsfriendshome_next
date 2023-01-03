import React from 'react';
import AppBarMainMenu from '../AppBar/AppBarMainMenu';
import Footer from './Footer';

function PrivacyAndPolicy(props) {
    return (
        <>
            <div className='comicsStack2'></div>
            <AppBarMainMenu />
            <div className='py-24 px-10 sm:px-32 md:px-32 lg:px-44 xl:px-80 flex flex-col gap-10'>
                <span className='text-5xl sm:text-7xl'>Privacy & Policy</span>
                <p>At ComicsFriends, we are committed to protecting your privacy. This Privacy & Policy explains how we collect, use, and share information when you visit or make a purchase from ComicsFriends.com (the "Site").</p>
                <p>By using the Site, you agree to the collection, use, and sharing of your information as described in this Privacy & Policy. If you do not agree with our policies and practices, do not use the Site.</p>
                <span className='text-3xl'>Information We Collect</span>
                <p>We collect information from you when you visit the Site or make a purchase. This may include your name, email address, phone number, billing and shipping address, payment information, and any other information you choose to provide.</p>
                <p>We also collect information about your device, including your IP address, browser type, and location. We may use cookies and similar technologies to collect and store information about your preferences and activities on the Site.</p>
                <span className='text-3xl'>How We Use Your Information</span>
                <p>We use the information we collect from you to operate and improve the Site, process your transactions, and communicate with you. We may use your information to send you promotional materials or updates about our products and services.</p>
                <p>We may also use your information to personalize your experience on the Site, to troubleshoot problems, and to enforce our policies.</p>
                <span className='text-3xl'>Sharing Your Information</span>
                <p>We do not sell or rent your personal information to third parties for their marketing purposes without your explicit consent. We may share your information with third parties to complete your transactions, to provide the services you have requested, or to comply with legal obligations.</p>
                <p>We may also share your information with our affiliates and business partners, but only for the purpose of providing you with the best possible service.</p>
                <span className='text-3xl'>Your Choices</span>
                <p>You have the right to access and correct your personal information, or to request that we delete it. You may also opt out of receiving promotional communications from us at any time by following the unsubscribe instructions in the communication.</p>
                <p>You can control the use of cookies and similar technologies through your browser settings. Please note that some features of the Site may not be available if you disable these technologies.</p>
                <span className='text-3xl'>Children's Privacy</span>
                <p>The Site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you believe that your child has provided personal information to us, please contact us.</p>
                <span className='text-3xl'>Changes to This Privacy & Policy</span>
                <p>We may update this Privacy & Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this Privacy & Policy regularly.</p>
                <span className='text-3xl'>Contact Us</span>
                <p>If you have any questions or concerns about this Privacy & Policy, please contact us at <b><u>info@comicsfriends.art</u></b>.</p>
            </div>
            <Footer />
        </>
    );
}

export default PrivacyAndPolicy;