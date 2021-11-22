import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
          <div>
            <div className="flex justify-center">
              <img
                src="https://www.gstatic.com/pagespeed/insights/ui/img/graphic-home-hero.svg"
                alt="pic"
              />
            </div>
            <h1 className="text-4xl p-4 font-light">
              Make your web pages fast on all devices
            </h1>
            <h2 className="capitalize p-4 text-xs">CHECK OUT</h2>
            <ul className="px-4 flex flex-col">
              <li className="text-blue-500 my-2 cursor-pointer text-xs hover:underline hover:bg-blue-100 block">
                What's new
              </li>
              <li className="text-blue-500 my-2 cursor-pointer text-xs hover:underline hover:bg-blue-100 block">
                Documentation
              </li>
              <li className="text-blue-500 my-2 cursor-pointer text-xs hover:underline hover:bg-blue-100 block">
                Learn about web performance
              </li>
            </ul>
          </div>
        );
    }
}

export default Footer;