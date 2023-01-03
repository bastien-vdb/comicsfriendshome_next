import React from 'react';
import AppBarMainMenu from '../AppBar/AppBarMainMenu';
import Footer from './Footer';

function TermsAndConditions(props) {
    return (
        <>
            <div className='comicsStack2'></div>
            <AppBarMainMenu />
            <div className='py-24 px-10 sm:px-32 md:px-32 lg:px-44 xl:px-80 flex flex-col gap-10'>
                <span className='text-5xl sm:text-7xl'>Terms & Conditions</span>
                <p>Welcome to our website, which allows users to buy and sell unique digital comic book items using non-fungible tokens (NFTs). By accessing or using our website, you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our website.</p>
                <span className='text-3xl'>Eligibility</span>
                <p>Our website is intended for users who are at least 18 years old. By using our website, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into a contract.</p>
                <span className='text-3xl'>Content</span>
                <p>All content on our website, including but not limited to text, graphics, images, and software, is the property of our website or its content suppliers and is protected by international copyright laws. The compilation of all content on our website is the exclusive property of our website and is protected by international copyright laws.</p>
                <span className='text-3xl'>Use of Website</span>
                <p>You may not use our website for any illegal or unauthorized purpose. You must not transmit any worms or viruses or any code of a destructive nature. You may not use our website to engage in any form of spam or unsolicited commercial communication.</p>
                <span className='text-3xl'>Links to Other Websites</span>
                <p>Our website may contain links to other websites that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party websites. We strongly advise you to read the terms and conditions and privacy policy of any third party website that you visit.</p>
                <span className='text-3xl'>Termination</span>
                <p>We reserve the right to terminate your access to our website at any time, without notice, for any reason, including but not limited to a violation of these Terms & Conditions.</p>
                <span className='text-3xl'>Dispute Resolution</span>
                <p>Any dispute arising out of or in connection with these Terms & Conditions or the use of our website shall be resolved through binding arbitration in accordance with the American Arbitration Association's rules for commercial arbitration. The arbitration shall be conducted in the English language in New York, New York, United States.</p>
                <span className='text-3xl'>Governing Law</span>
                <p>These Terms & Conditions and your use of our website shall be governed by and construed in accordance with the laws of the state of New York, United States, without giving effect to any principles of conflicts of law.</p>
                <span className='text-3xl'>Changes to These Terms & Conditions</span>
                <p>We reserve the right to modify these Terms & Conditions at any time. If we make any material changes, we will post the updated terms on this page and indicate the effective date at the top. By continuing to use our website after the effective date of any such changes, you agree to be bound by the modified terms. Please review these terms periodically for changes.</p>
                <span className='text-3xl'>Contact Us</span>
                <p>If you have any questions about these Terms & Conditions, please contact us at <b><u>info@comicsfriends.art</u></b>.</p>
            </div>
            <Footer />
        </>
    );
}

export default TermsAndConditions;