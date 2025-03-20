import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { authors } from '../db';

function Home() {
  return (
    <div>
        <ul>
            {authors.map((author, index)=>(                
                <li key={index}><Link to={`/authors/${author.name}`}>{author.name}</Link></li>
            ))}
        </ul>
        <Outlet/>
    </div>
  );
}

export default Home;
