import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Header from "components/home/Header";
import DescriptionCards from "components/home/DescriptionCards";
import Feature from "components/home/Feature";
import CTA from "components/home/CTA";
import Footer from "components/navigation/Footer";

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