import React from 'react';
import {Link,Routes,Route} from "react-router-dom";
import Home from "./page/Home";
import Layout from "./page/Layout";
import About from "./page/About";
const App = () => {
    return (
        <div>
            <div>
                <h2>Text</h2>
                <ul>
                    <li><Link to={"/"}>home</Link></li>
                    <li><Link to={"/layout"}>layout</Link></li>
                    <li><Link to={"/about"}>about</Link></li>
                </ul>
            </div>
            <div>
                <h2>content</h2>
                <Routes>
                    <Route path={"/"} element={Home}/>
                    <Route path={"/layout"} element={Layout}/>
                    <Route path={"/about"} element={About}/>
                </Routes>
            </div>
        </div>
    );
};

export {App};