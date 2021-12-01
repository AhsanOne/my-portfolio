import React from 'react'
import Navigation from '../../Shared/Navigation/Navigation'
import About from '../About/About'
import Banner from '../Banner/Banner'
import CustomerBrand from '../CustomerBrand/CustomerBrand'
import Expert from '../Expert/Expert'
import Projects from '../Projects/Projects'
import Services from '../Services/Services'

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <main>
                <CustomerBrand></CustomerBrand>
                <Services></Services>
                <About></About>
                <Expert></Expert>
                <Projects></Projects>
            </main>
        </div>
    )
}

export default Home
