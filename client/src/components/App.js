import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./UserContext"
import LoginPage from "./page/LoginPage"
import RegisterPage from "./page/RegisterPage"
import ArticlesPage from "./page/ArticlesPage"
import ArticlePage from "./page/ArticlePage"
import InfoPage from "./page/InfoPage"
import "../styles/Reset.css"
import IndexPage from "./page/IndexPage"
import Layout from "./Layout";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/articles" element={<ArticlesPage/>} />
            <Route path="/article" element={<ArticlePage/>} />
            <Route path="/infos" element={<InfoPage/>} />
          </Route>  
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
