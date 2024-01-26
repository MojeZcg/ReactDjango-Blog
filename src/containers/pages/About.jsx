import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";
import { Helmet } from "react-helmet-async";
import AboutUs from "components/about/AboutUs";

function About() {
  return (
    <Layout>
      <Helmet>
        <title>MojeZcg | About us</title>
        <meta
          name="description"
          content="Conoce mas sobre este maravilloso blog sobre actualidad en software y marketing digital. Learn more about this wonderful blog about current software and digital marketing."
        />
        <meta
          name="keywords"
          content="sobre nosotros, blog de actualidad, informacion sobre los trabajadores, marketing digital, blog sobre actualidad, about us, current affairs blog, information about workers, digital marketing, current affairs blog"
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="http://localhost:8000" />
        <meta name="author" content="Walter J. Montenegro" />
        <meta name="publisher" content="MojeZcg" />

        <meta name="og:title" content="MojeZcg | About us" />
        <meta
          name="og:description"
          content="Conoce mas sobre este maravilloso blog sobre actualidad en software y marketing digital. Learn more about this wonderful blog about current software and digital marketing."
        />
        <meta name="og:url" content="http://localhost:8000" />
        <meta
          name="og:image"
          content="https://cdn.icon-icons.com/icons2/1996/PNG/512/blog_blogger_business_news_web_website_icon_123264.png"
        />

        <meta name="twitter:title " content="MojeZcg | About us" />
        <meta
          name="twitter:description"
          content="Conoce mas sobre este maravilloso blog sobre actualidad en software y marketing digital. Learn more about this wonderful blog about current software and digital marketing."
        />
        <meta
          name="twitter:image"
          content="https://cdn.icon-icons.com/icons2/1996/PNG/512/blog_blogger_business_news_web_website_icon_123264.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />
      <div className="pt-18">
        <AboutUs />
      </div>
      <Footer />
    </Layout>
  );
}

export default About;
