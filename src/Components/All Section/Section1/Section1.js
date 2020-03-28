import React from 'react';
import Logo from '../../Documents/Images_Folder/Logo_Imges/logo-alt.png';
import $ from 'jquery';
import './CSS/Scss/section1.scss';
export default function Section1() {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('.nav').addClass('affix');
            console.log("OK");
        } else {
            $('.nav').removeClass('affix');
        }
    });
    return (
        <div>
            <nav className="nav">
                <div className="container">
                    <div className="logo">
                        <a href="#">
                            <img src={Logo} />
                        </a>
                    </div>
                    <div id="mainListDiv" className="main_list">
                        <ul className="navlinks">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Courses</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <span className="navTrigger">
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                </div>
            </nav>
            <div className="home">
                <section className="section">
                    <div className="container">
                        <h1 style={{ paddingTop: "20rem" }} className="has-text-white">
                            Edusite Online Training Courses
                </h1>
                        <p className="has-text-white is-size-1 has-text-weigght-medium">
                            Libris vivendo eloquentiam ex ius, nec id splendide abhorreant,<br /> eu pro alii error homero.
                </p>
                        <button className="button is-large">
                            Get Started!
                </button>
                    </div>
                </section>
            </div>
        </div>
    )
}
