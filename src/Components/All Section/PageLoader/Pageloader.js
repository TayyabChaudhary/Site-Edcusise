import React from 'react';
import $ from 'jquery';
import './CSS/SCSS/pageloader.scss';
export default function Pageloader() {
    $(document).ready(function() {
 
        // Fakes the loading setting a timeout
          setTimeout(function() {
              $('body').addClass('loaded');
          }, 100);
       
      });
    return (
        <div>
            <div id="loader-wrapper">
                <div id="loader"></div>
                <div className="loader-section section-left"></div>
                <div className="loader-section section-right"></div>
            </div>
        </div>
    )
}
