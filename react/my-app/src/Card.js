/**
 * Created by Administrator on 2017/8/28.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Checklist from './Checklist'

class Card extends ReactDOM.Component{
    render(){
        return (
            <div className="card">
                <div className="card_title">{this.props.title}</div>
                <div className="card_details">
                    {this.props.description}
                    <Checklist cardId={this.props.id} tasks={this.props.tasks}/>
                </div>
            </div>
        )
    }
}

export default Card;