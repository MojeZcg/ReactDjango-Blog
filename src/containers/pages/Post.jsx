import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";

import { useEffect } from "react";
import { connect } from "react-redux";
import { get_blog } from "redux/actions/blog/blog";
import { useLocation, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { useTranslation } from "react-i18next";

function Post({ get_blog, post }) {
  const { t } = useTranslation("global");

  const location = useLocation();
  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    window.scroll(0, 0);
    get_blog(slug);
  }, [get_blog, slug, location]);

  return (
    <Layout>
      <Navbar />
      {post?.slug === slug ? (
        <>
          <div className=" overflow-hidden h-5/6 opacity-80 fixed -z-10 flex items-center justify-center">
            <img
              src={`${process.env.REACT_APP_API_URL}${post.thumbnail}`}
              className="w-full "
            />
          </div>
          <div className="pt-16 px-16">
            <div className=" flex flex-col w-full h-full ">
              <h1 className="flex items-center justify-center py-24 text-4xl max-w-3xl">
                {post.title}
              </h1>
              <div className="flex flex-row items-center justify-between">
                <h3>{post.status}</h3>
                <h3>{post.time_read + " " + t("")} </h3>
                <h3>{post.published}</h3>
              </div>
              <h2>{post.description}</h2>
              {DOMPurify.sanitize(post.content)}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <Footer />
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  post: state.blog.post,
});

export default connect(mapStateToProps, {
  get_blog,
})(Post);
