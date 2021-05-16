import React, { Component } from 'react';

// NOTE: this is a class component, not a functional component

export default class AppDragDropDemo extends Component {  
    state = {
        tasks: [
            {name:"Learn Angular", category: "wip", bgcolour: "yellow"},
            {name:"React", category: "wip", bgcolour: "pink"},
            {name:"Vue", category: "complete", bgcolour: "skyblue"},
        ]
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }
    
    render () {
        var tasks = {
            wip: [],
            complete: []
        }
        
        this.state.tasks.forEach((t) => {
            tasks[t.category].push(
                <div key={t.name} onDragStart={(e)=>this.onDragStart(e, t.name)} draggable className="draggable" style = {{backgroundColor:t.bgcolour}}>
                    {t.name}
                </div>
            )
        })
        return (
        <div className="container-drag">
            <h2 className="header"> DRAG & DROP DEMO </h2>
            <div className="wip" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e, "wip")}>
                <span className="task-header"> WIP </span> 
                {tasks.wip}
            </div>
            <div className="droppable" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e, "complete")}>
                <span className="task-header"> COMPLETED </span> 
                {tasks.complete}
            </div>
        </div>

        );
    }
}