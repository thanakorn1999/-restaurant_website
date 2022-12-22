import "./App.css";
// import Button from "@mui/material/Button";
// import styled from "@emotion/styled";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { News } from "./pages/News/Index";
import { NewsDetails } from "./pages/News/Details";
import { Package } from "./pages/Package";
import { NotFound } from "./pages/NotFound";

import { Navbar } from "./component/Navbar";

import { Route, Routes } from "react-router-dom";

function App() {
  // const Button = styled.button`
  //   padding: 32px;
  //   background-color: hotpink;
  //   font-size: 24px;
  //   border-radius: 4px;
  //   color: black;
  //   font-weight: bold;
  //   &:hover {
  //     color: white;
  //   }
  // `;

  return (
    <>
      {/* <Routes location="/">
        <Route path="/" element={<Navbar />}></Route>
      </Routes> */}
      {/* https://www.youtube.com/watch?v=Ul3y1LXxzdU&ab_channel=WebDevSimplified */}
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="news">
            <Route index element={<News />}></Route>
            <Route path=":id" element={<NewsDetails />}></Route>
          </Route>
          <Route path="package" element={<Package />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>

      {/* className="App" */}
      {/* <header className="App-header"> */}
      {/* <div>
        <Button variant="contained">Hello World</Button>
      </div> */}

      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </>
  );
}

export default App;
