import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
        <div>
        <h1>Best Seller Authors</h1>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>about</Link></li>
        </ul>
        <hr/>
        <Outlet/>
    </div>
    </div>
  );
}

export default App;
