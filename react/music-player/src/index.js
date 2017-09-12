import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./component/logo";
import Progress from './component/progress';

ReactDOM.render(
    <div>
        <Header/>
        <Progress progress="1"/>
    </div>,
    document.getElementById('root')
)