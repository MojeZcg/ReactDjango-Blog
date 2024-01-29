import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";
import { Helmet } from "react-helmet-async";

import ContactForm from "components/contact/ContactForm";

function Contact() {
  return (
    <Layout>
      <Helmet>
        <title>MojeZcg | Contact</title>
        <meta
          name="description"
          content="Contactanos para alguna duda o problema. Te ayudaremos en lo que podamos. Contact us for any questions or problems. We will help you in any way we can."
        />
        <meta
          name="keywords"
          content="blog, blog de software, blog de marketing digital, blog de actualidad, blog, software blog, digital marketing blog, current affairs blog."
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="http://localhost:8000" />
        <meta name="author" content="Walter J. Montenegro" />
        <meta name="publisher" content="MojeZcg" />

        <meta name="og:title" content="MojeZcg | Contact" />
        <meta
          name="og:description"
          content="Contactanos para alguna duda o problema. Te ayudaremos en lo que podamos. Contact us for any questions or problems. We will help you in any way we can."
        />
        <meta name="og:url" content="http://localhost:8000" />
        <meta
          name="og:image"
          content="https://cdn.icon-icons.com/icons2/1996/PNG/512/blog_blogger_business_news_web_website_icon_123264.png"
        />

        <meta name="twitter:title " content="MojeZcg | Contact" />
        <meta
          name="twitter:description"
          content="Contactanos para alguna duda o problema. Te ayudaremos en lo que podamos. Contact us for any questions or problems. We will help you in any way we can."
        />
        <meta
          name="twitter:image"
          content="https://cdn.icon-icons.com/icons2/1996/PNG/512/blog_blogger_business_news_web_website_icon_123264.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />
      <div className="pt-16">
        <ContactForm />
      </div>
      <Footer />
    </Layout>
  );
}

export default Contact;
