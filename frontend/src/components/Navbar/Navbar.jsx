import React, { useState, useEffect } from 'react'
// import Navbar from '../../components/Navbar/Navbar'
// import Footer from '../../components/Footer/Footer'
// import Main from '../../components/Main/Main'
// import Banner from '../../components/Banner/Banner'
import './style.css'


export default function Navbar() {
    const [time, setTime] = useState('')
    
    useEffect(() => {
        var d = new Date();
        setTime(d.toLocaleTimeString())
    }, [time])
    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                <div class="container-fluid row">
                    <div class="col">
                        <a class="navbar-brand " href="www">
                            <img src="https://poltekbangsby.ac.id/wp-content/uploads/2021/02/cropped2-logo-square-2-150x150-1.png" alt="" width="70" height="50" class="d-inline-block align-top" />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse col" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            {/* <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="www">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="www">Features</a>
                            </li> */}
                            <li class="nav-item">
                                <a class="nav-link" href="www">{time}</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="www" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link</a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="www">Action</a></li>
                                    <li><a class="dropdown-item" href="www">Another action</a></li>
                                    <li><a class="dropdown-item" href="www">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

