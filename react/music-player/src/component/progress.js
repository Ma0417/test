import React,{Component} from 'react';
import './progress.css';


class Progress extends Component{
    render(){
        return (
            <div className="component-progress">
                {this.props.progress}S
            </div>
        )
    }
}

export default Progress;