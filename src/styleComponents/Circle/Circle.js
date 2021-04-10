import "./Circle.css";

const Circle = ({ position }) => {
  const { top = "", right = "", bottom = "", left = "" } = position;
  const styles = {
    bottom,
    left,
    right,
    top
  };

  return <div style={styles} className="circle" />;
};

export default Circle;
