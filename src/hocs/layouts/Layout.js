import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  return (
    <div
      className={`${
        /^\/post\//.test(location.pathname) ? "" : "dark:bg-neutral-950"
      } font-Main transition-all duration-500 ease-in-out `}
    >
      {children}
    </div>
  );
}

const mapStateToProp = (state) => ({});

export default connect(mapStateToProp, {})(Layout);
