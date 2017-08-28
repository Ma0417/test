/**
 * Created by Administrator on 2017/8/28.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './KanbanBoard';


let CartList=[
    {
        id:1,
        title:"Read the Book",
        description:"I should read the whole book",
        status:"in-progress",
        tasks:[]
    },
    {
        id:2,
        title:"Write some code",
        description:"Code along with the samples in the book",
        status:"todo",
        tasks:[
            {
                id:1,
                name:"ContactList Example",
                done:true
            },
            {
                id:2,
                name:"ContactList Example",
                done:false
            },
            {
                id:3,
                name:"ContactList Example",
                done:false
            }
        ]
    },
];

// ========================================

ReactDOM.render(
    <KanbanBoard cards={CartList}/>,
    document.getElementById('root')
);
