import React from 'react'
import './CSS/Scss/Section2.scss';
import Image1 from '../../Documents/Images_Folder/about.png'
export default function Section2() {
    return (
        <div>
            <section className="section welcome-section">
                <div className="container">
                    <h1 className="has-text-weight-bold ">
                        Welcome to Edusite
            </h1>
                    <p>
                        Libris vivendo eloquentiam ex ius, nec id splendide<br /> abhorreant.
            </p>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div>
                                <ul>
                                    <li className='feature-icons'>
                                        <i className="fa fa-flask">

                                        </i>
                                        <p>
                                            Online Courses
                                </p>
                                    </li><br /><br />
                                    <li className='feature-icons'>
                                        <i className="fa fa-users"></i>
                                        <p>
                                            Expert Teachers
                                </p>

                                    </li><br /><br />
                                    <li className='feature-icons'>
                                        <i className="fa fa-comment"></i>
                                        <p>
                                            Community
                                      </p>

                                    </li><br /><br />
                                </ul>
                            </div>
                        </div>
                        <div className="column">
                            <div>
                                <img src={Image1} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
