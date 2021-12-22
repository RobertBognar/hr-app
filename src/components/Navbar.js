import React from "react";
import { Link } from "react-router-dom";


const Navbar = ()=>{


    return(
        <div className="navbar-wrap">
            <div className="logo-wrap">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.33347 6.81214L9.22207 1.5L11.7222 6.11651L17 7.3181L13.2222 11.9347L13.8333 17.5L9.22207 14.0217L3.11112 17.5L4.22223 11.9347L1 7.3181L6.33347 6.81214Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h4>Logo</h4>
            </div>
            <ul>
                <Link to='/page-one'><li>Page one</li></Link>
                <Link to='/page-two'><li>Page two</li></Link>
                <Link to='/page-three'><li>Page three</li></Link>
            </ul>

        </div>
    )
}

export default Navbar