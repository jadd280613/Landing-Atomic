import React from 'react'
import { Banner } from '../components/Banner'
import { Section3 } from '../components/Section3'
import { DoubleTitle } from '../components/DoubleTitle'
import { Section4 } from '../components/Section4'
import { Section5 } from '../components/Section5'
import { Footer } from '../layout/Footer'

export const Landing = () => {
    return (
        <div className="container-fluid">
            <Banner />
            <DoubleTitle title1='SOMOS EL BRAZO DERECHO' title2='DE LA TECNOLOGIA' />
            <Section3 />
            <DoubleTitle title1='¡TE ENCANTARA' title2='TRABAJAR CON NOSOTROS!' />
            <Section4 />
            <Section5 />
            <Footer />
        </div>
    )
}
