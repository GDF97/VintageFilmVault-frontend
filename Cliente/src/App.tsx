import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const BodyStyle = styled.div`
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <BodyStyle>
      <Navbar />
      <Outlet />
    </BodyStyle>
  );
}

export default App;
