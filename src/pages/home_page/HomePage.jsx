import { AboutSecction } from '../../components/about_section/AboutSection';
import { CustomerSection } from '../../components/customer_section/CustomerSection';
import { Footer } from '../../components/footer/Footer';
import { HeroSection } from '../../components/hero_section/HeroSection';
import { Navbar } from '../../components/navbar/Navbar';
import { ProductSection } from '../../components/product_section/ProductSection';
import './HomePage.css';


export function HomePage() {

    return (
        <>
            <Navbar />
            <HeroSection />
            <ProductSection title={'The Biggest Price Drop in Sri Lanka'} />
            <ProductSection  title={'New Arrivals in Sri Lanka'}/>
            <CustomerSection />
            <AboutSecction />

            <Footer />
        </>
    )
}