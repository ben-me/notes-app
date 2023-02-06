import styled from "@emotion/styled";
import InputNote from "./components/InputNote";

function App() {
  return (
    <>
      <Navbar>
        <NavText>Notes!</NavText>
      </Navbar>
      <main>
        <InputNote />
      </main>
    </>
  );
}

export default App;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  background-color: lightblue;
  height: 2.5rem;
  width: 100%;
  margin-bottom: 1rem;
`;

const NavText = styled.h2`
  margin: 0;
  font-size: x-large;
  text-decoration: underline;
`;
