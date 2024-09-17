import PropTypes from "prop-types";

const Container = ({ children }) => <div className="Container">{children}</div>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
