import React from 'react'
import Hero from '../components/hero/Hero'
import Main from '../components/Main/Main'
import Card from '../components/Card/Card'
import BedImage from '../components/Bedimage/BedImage'
import Topcreators from '../components/Topcreators/Topcreators'
import Footer from '../components/Footer/Footer'
import Header from '../components/header/Header'

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Hero />
            <Main />
            <Card />
            <BedImage />
            <Topcreators />
            <Footer />
        </div>
    )
}

export default HomePage