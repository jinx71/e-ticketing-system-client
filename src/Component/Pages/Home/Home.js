import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import CTA from '../../Shared/CTA/CTA';
import Features from '../../Shared/Features/Features';
import Footer from '../../Shared/Footer/Footer';
import IconsGrid from '../../Shared/IconsGrid/IconsGrid';
import Navbar from '../../Shared/Navbar/Navbar';
import Testimonials from '../../Shared/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <IconsGrid></IconsGrid>
            <Features></Features>
            <Testimonials></Testimonials>
            <CTA></CTA>

        </div>
    );
};

export default Home;