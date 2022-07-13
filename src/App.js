import styled from "styled-components";
import "./App.css";
// import Final from "./color.js";
import Colors from "design-system/src";

const Test = styled.div`
  background-color: ${Colors["--color-brand"]};
`;

function App() {
  return (
    <div className="App">
      {/* <Test style={{ backgroundColor: "var(--color-brand)" }}> */}
      <Test>
        <p>hihih~~~~~~~~~~</p>
      </Test>
    </div>
  );
}

export default App;
