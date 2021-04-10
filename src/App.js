import Glass from "./styleComponents/Glass/Glass";
import Circle from "./styleComponents/Circle/Circle";
import "./styles.css";
import Dashboard from "./component/Dashboard/Dashboard";
import ContentArea from "./component/ContentArea/ContentArea";

export default function App() {
  return (
    <div className="App">
      <main>
        <Glass>
          <Dashboard />
          <ContentArea />
        </Glass>
      </main>
      <Circle position={{ top: "4%", right: "16%" }} />
      <Circle position={{ bottom: "25%", left: "15%" }} />
      <Circle position={{ bottom: "5%", right: "8%" }} />
    </div>
  );
}
