import React from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';
export default function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <ul>
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/AddTask">Add Task</Link></li> 
                <li><Link to="/EditTask">Edit Task</Link></li> 
                <li><Filter/></li>
            </ul>
         </nav>
    </div>
  )
}
