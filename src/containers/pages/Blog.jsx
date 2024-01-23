import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";

import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { get_categories } from "redux/actions/categories/categories";
import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page } from "redux/actions/blog/blog";
import ByCategory from "components/blog/ByCategory";
import BlogList from "components/blog/BlogList";

function Blog({
  get_categories,
  categories,
  get_blog_list,
  get_blog_list_page,
  posts,
  count,
  next,
  previous,
}) {
  useEffect(() => {
    window.scroll(0, 0);
    get_categories();
    get_blog_list();
  }, [get_categories, get_blog_list]);

  return (
    <Layout>
      <Helmet>
        <title>MojeZcg | Blog</title>
        <meta
          name="description"
          content="Blog sobre actualidad en software y marketing digital. Crea articulos inspiradores para la comunidad. Blog about current software and digital marketing. Create inspiring articles for the community."
        />
        <meta
          name="keywords"
          content="blog, blog de software, blog de marketing digital, blog de actualidad, blog, software blog, digital marketing blog, current affairs blog"
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="http://localhost:8000" />
        <meta name="author" content="Walter J. Montenegro" />
        <meta name="publisher" content="MojeZcg" />

        <meta name="og:title" content="MojeZcg | Blog" />
        <meta
          name="og:description"
          content="Blog sobre actualidad en software y marketing digital. Crea articulos inspiradores para la comunidad. Blog about current software and digital marketing. Create inspiring articles for the community."
        />
        <meta name="og:url" content="http://localhost:8000" />
        <meta
          name="og:image"
          content="https://cdn.icon-icons.com/icons2/1996/PNG/512/blog_blogger_business_news_web_website_icon_123264.png"
        />

        <meta name="twitter:title " content="MojeZcg | Blog" />
        <meta
          name="twitter:description"
          content="Blog sobre actualidad en software y marketing digital. Crea articulos inspiradores para la comunidad. Blog about current software and digital marketing. Create inspiring articles for the community."
        />
        <meta
          name="twitter:image"
          content="https://cdn.icon-icons.com/icons2/1996/PNG/512/blog_blogger_business_news_web_website_icon_123264.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />
      <div className="pt-16">
        <ByCategory categories={categories && categories} />
        <BlogList posts={posts} />
      </div>
      <Footer />
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  posts: state.blog.blog_list,
  count: state.blog.count,
  next: state.blog.next,
  previous: state.blog.previous,
});

export default connect(mapStateToProps, {
  get_categories,
  get_blog_list,
  get_blog_list_page,
})(Blog);
