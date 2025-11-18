import { Footer } from '../components/footer/Footer';
import { HeroSection } from '../components/hero_section/HeroSection';
import { Navbar } from '../components/navbar/Navbar';
import './HomePage.css';


export function HomePage() {

    return (
        <>
            <Navbar />
            <HeroSection />

            <Footer />
        </>
    )
}