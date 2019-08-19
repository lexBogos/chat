import React from 'react';
import './spinner.css';

const Spinner = () => {
    return <div className='spiner'>
        <div className="lds-css ng-scope">
            <div className="lds-double-ring">
                <div></div>
                <div></div>
                <div><div></div></div>
                <div><div></div></div>
            </div>
            <style type="text/css">
            </style>
            </div>
        </div>
}

export default Spinner;