import Card from "../Cards/Card";
import "./ContentArea.css";

const ContentArea = () => {
  return (
    <div className="content">
      <h1 className="header">Hello</h1>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default ContentArea;
