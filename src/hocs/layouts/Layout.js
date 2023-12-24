import { connect } from "react-redux";

function Layout({ children }) {
  return <div className=" dark:bg-black font-Main ">{children}</div>;
}

const mapStateToProp = (state) => ({});

export default connect(mapStateToProp, {})(Layout);
