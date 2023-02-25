import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamMembers from "./Pages/TeamMembers";
// import Products from "./Pages/Products";
// import Inbox from "./Pages/Inbox";
import { createContext, lazy, Suspense, useState } from "react";

export const HeaderContext = createContext(null);

function App() {
  const [header, setHeader] = useState("Team Members");
  const [searchText, setSearchText] = useState("");

  const [open, setOpen] = useState(true);
  const handleToggle = () => {
    setOpen(!open);
  };
  //Implemented lazy loading/On-demand/Chunking optimization technique to improve performance of the application.
  const Products = lazy(() => import("./Pages/Products"));
  const Inbox = lazy(() => import("./Pages/Inbox"));

  return (
    <div className="font-inter md:grid  md:grid-cols-6 md:grid-rows-6  h-screen">
      <BrowserRouter>
        <HeaderContext.Provider value={{ setHeader, header }}>
          <Header
            open={open}
            handleToggle={handleToggle}
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <Sidebar open={open} />

          <Routes>
            <Route path="/" element={<TeamMembers searchText={searchText} />} />

            <Route
              path="/products"
              element={
                <Suspense>
                  <Products />
                </Suspense>
              }
            />
            <Route
              path="/inbox"
              element={
                <Suspense>
                  <Inbox />
                </Suspense>
              }
            />
          </Routes>
        </HeaderContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
