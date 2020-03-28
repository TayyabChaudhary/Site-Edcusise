import React from 'react'
import Imge1 from '../../Documents/Images_Folder/blog-post-background.jpg';
import Imge2 from '../../Documents/Images_Folder/course05.jpg';
import Imge3 from '../../Documents/Images_Folder/course03.jpg';
import Imge4 from '../../Documents/Images_Folder/course04.jpg';
import Post2 from '../../Documents/Images_Folder/post02.jpg';
import Post3 from '../../Documents/Images_Folder/course07.jpg';
import Post4 from '../../Documents/Images_Folder/course08.jpg';
export default function Section3() {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <h1 className="is-size-1 has-text-weight-bold has-text-centered" style={{ paddingTop: "40px" }}>
                        Explore Courses
                </h1>
                    <p className="is-size-3 has-text-centered">
                        Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.
                </p>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <img src={Imge1} />
                            <p className="is-size-4 has-text-weight-bold">
                                Beginner to Pro in Excel: Financial Modeling and Valuation
</p>
                            <hr />
                            <span className="is-size-4">
                                Business
</span>
                            <p style={{ float: "right" }} className="is-size-4">
                                Free
</p>
                        </div>
                        <div className="column">
                            <img src={Imge2} />
                            <p className="is-size-3 has-text-weight-bold" style={{ paddingTop: "13px" }}>
                                Indrucution To Css
                            </p>
                            <hr />
                            <span className="is-size-4">
                                Business
</span>
                            <p style={{ float: "right", color: "#FF6700" }} className="is-size-4">
                                Premium
</p>
                        </div>
                        <div className="column">
                            <img src={Imge3} />
                            <p className="is-size-4 has-text-weight-bold">
                                The Ultimate Drawing Course | From Beginner To Advanced
                            </p>
                            <hr />
                            <span className="is-size-4">
                                Drawing
</span>
                            <p style={{ float: "right", color: "#FF6700" }} className="is-size-4">
                                Premium
</p>
                        </div>
                        <div className="column">
                            <img src={Imge4} />
                            <p className="is-size-4 has-text-weight-bold">
                                The Complete Web Development Course

                            </p>
                            <hr />
                            <span className="is-size-4">
                                Web Development
</span>
                            <p style={{ float: "right" }} className="is-size-4">
                                Free
</p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <img src={Imge2} />
                            <p className="is-size-4 has-text-weight-bold" style={{ paddingTop: "30px" }}>
                                PHP Tips, Tricks, and Techniques</p>
                            <hr />
                            <span className="is-size-4">
                                Web Development
</span>
                            <p style={{ float: "right" }} className="is-size-4">
                                Free
</p>
                        </div>
                        <div className="column">
                            <img src={Post2} />
                            <p className="is-size-4 has-text-weight-bold" style={{ paddingTop: "10px" }}>
                                All You Need To Know About Web Design
                            </p>
                            <hr />
                            <span className="is-size-4">
                                Web Design
</span>
                            <p style={{ float: "right", color: "green" }} className="is-size-4">
                                Free
</p>
                        </div>
                        <div className="column">
                            <img src={Post3} />
                            <p className="is-size-4 has-text-weight-bold" style={{ paddingTop: "32px" }}>
                                How to Get Started in Photography
                            </p>
                            <hr />
                            <span className="is-size-4">
                                Photography
</span>
                            <p style={{ float: "right", color: "green" }} className="is-size-4">
                                Free
</p>
                        </div>
                        <div className="column">
                            <img src={Post4} />
                            <p className="is-size-4 has-text-weight-bold" style={{ paddingTop: "30px" }}>
                                Typography From A to Z

                            </p>
                            <hr />
                            <span className="is-size-4">
                                Typography
</span>
                            <p style={{ float: "right", color: "green" }} className="is-size-4">
                                Free
</p>
                        </div>
                    </div>
                </div>
                
            </section>
            <div className="has-text-centered">
            <button className="button is-large">
                  More Courses
                </button>
                </div>
        </div>
    )
}
