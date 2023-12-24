import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";
import Header from "components/home/Header";
import DescriptionCards from "components/home/DescriptionCards";
import CTA from "components/home/CTA";
import Feature from "components/home/Feature";

function Home(){
    return(
        <Layout >
            <Navbar/>
            <div className="bg-gradient-secundary dark:bg-gradient-dark pt-22">
                <Header />
                <DescriptionCards />
                <Feature />
                <CTA />
            </div>
            <Footer/>
        </Layout>
    )
}

export default Home;