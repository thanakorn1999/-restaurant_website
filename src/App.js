import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./component/Navbar";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { News } from "./pages/News/Index";
import { NewsDetails } from "./pages/News/Details";
import { Package } from "./pages/Package";
import { AboutUs } from "./pages/AboutUs";
//

import { LayoutUser } from "./pages/User/Index";
import { Dashboard } from "./pages/User/Index/Dashboard";
import { GlobalSetting } from "./pages/User/Index/GlobalSetting";
import { Profile } from "./pages/User/Index/Profile";
import { MyRestaurant } from "./pages/User/Index/MyRestaurant/Index";
import { MyRestaurantId } from "./pages/User/Index/MyRestaurant/_Id/Index";
//
import { Customer } from "./pages/User/Index/MyRestaurant/_Id/Customer";
import { Kitchen } from "./pages/User/Index/MyRestaurant/_Id/Kitchen/Index";
import { Menu } from "./pages/User/Index/MyRestaurant/_Id/Menu/Index";
import { Setting } from "./pages/User/Index/MyRestaurant/_Id/Setting";

import { NotFound } from "./pages/NotFound";

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
        <Route path="/" element={<Navbar />}/>
      </Routes> */}
      {/* https://www.youtube.com/watch?v=Ul3y1LXxzdU&ab_channel=WebDevSimplified */}
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="news">
            <Route index element={<News />} />
            <Route path=":id" element={<NewsDetails />} />
          </Route>
          <Route path="package" element={<Package />} />
          <Route path="about_us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* User */}
        <Route path="/user" element={<LayoutUser />}>
          <Route index element={<Dashboard />} />
          <Route path="global_setting" element={<GlobalSetting />} />
          <Route path="profile" element={<Profile />} />
          <Route path="my_restaurant">
            <Route index element={<MyRestaurant />} />
            <Route path=":id">
              <Route index element={<MyRestaurantId />} />
              <Route path="customer" element={<Customer />} />
              <Route path="kitchen" element={<Kitchen />} />
              <Route path="menu" element={<Menu />} />
              <Route path="setting" element={<Setting />} />
            </Route>
          </Route>
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
