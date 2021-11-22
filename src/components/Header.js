import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="flex justify-between border">
                <h1 className="m-4 text-xl p-2 text-gray-600">PageSpeed Insights</h1>
                <button className="m-4 hover:bg-blue-50 px-2  text-blue-500">Docs</button>
            </div>
        );
    }
}

export default Header;