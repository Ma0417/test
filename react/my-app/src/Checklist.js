import React from 'react';
import ReactDOM from 'react-dom';

class Checklist extends ReactDOM.Component{
    render(){
        let tasks=this.props.tasks.map((task)=>(
            <li className="checklist_task">
                <input type="checkbox" defaultChecked={task.done}/>
                {task.name}
                <a href="#" className="checklist_task--remove"></a>
            </li>
        ));
        return (
            <div className="checklist">
                <ul>{tasks}</ul>
            </div>
        );
    }
}

export default Checklist;
