import React from 'react'
import VedioImage from '../../Documents/Images_Folder/about-video.jpg';
import './Css/Scss/section5.scss';
export default function Section5() {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h1 className="is-size-1 has-text-weight-medium">
                                Persius imperdiet incorrupte et qui, munere nusquam et nec.
                        </h1>
                            <h3 className="is-size-1">
                                Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.
                        </h3>
                            <p className="is-size-4">
                                No vel facete sententiae, quodsi dolores no quo, pri ex tamquam interesset necessitatibus. Te denique cotidieque delicatissimi sed. Eu doming epicurei duo. Sit ea perfecto deseruisse theophrastus. At sed malis hendrerit, elitr deseruisse in sit, sit ei facilisi mediocrem.
                        </p>
                        </div>
                        <div className="column">
                        <img src={VedioImage}/>
                        </div>
                    </div>
                </div>
            </section>
            <div className="contact-us-background">
                <div className="container">
                    <h1 className="has-text-centered has-text-white has-text-weight-bold">
                        Contact Us
                    </h1>
                    <p className="is-size-1 has-text-centered has-text-white">
                    Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.
                    </p>
                    <div className="has-text-centered">
                        <button className="button ">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
