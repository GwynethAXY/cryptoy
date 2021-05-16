import React, { Component } from 'react';
import ResizePanel from "react-resize-panel";
import classNames from 'classnames/bind';
import style from './TestResize.css';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import ecbEncryptionImg from './puzzlethree/tileData/ECB_Encryption.png';
import messageBox from './puzzlethree/tileData/messageBox.png';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/Button';
import Typical from "react-typical";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

let cx = classNames.bind(style);

// NOTE: this is a class component, not a functional component

export default class PThreeClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {name:"Ciphertext", category: "elements", bgcolour: "yellow"},
                {name:"Plaintext", category: "elements", bgcolour: "pink"},
                {name:"Block Cipher Decryption", category: "elements", bgcolour: "skyblue"},
            ],
            correct: false,
            hintsLeft: 2,
            hint1: 0,
            hint2: 0
        }
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

       console.log(tasks)
    }

    checkAnswer = (ev) => {
        let task = this.state.tasks
        console.log(this.state.correct)
        if (JSON.stringify(task) ==  JSON.stringify([
            {name:"Ciphertext", category: "ctAnswer", bgcolour: "yellow"},
            {name:"Plaintext", category: "ptAnswer", bgcolour: "pink"},
            {name:"Block Cipher Decryption", category: "decryptAnswer", bgcolour: "skyblue"},
        ])) {
            console.log("correct")
            this.setState(prevState => ({
                correct: true
              }));
        } else {
            this.setState(prevState => ({
                correct: false
              }));
        }
        console.log(this.state.correct)
    }

    onClickHint = (ev) => {
        if (this.state.hintsLeft <= 0) return
        if (this.state.hintsLeft === 2){
            this.setState(prevState => ({
                hint1: 1
            }));
        } else if (this.state.hintsLeft === 1){
            this.setState(prevState => ({
                hint2: 1
            }));
        }
        this.setState(prevState => ({
            hintsLeft: this.state.hintsLeft -1
        }));



    }

    render () {
        var tasks = {
            elements: [],
            ctAnswer: [],
            ptAnswer: [],
            decryptAnswer: []
        }

        this.state.tasks.forEach((t) => {
            tasks[t.category].push(
                <div key={t.name} onDragStart={(e)=>this.onDragStart(e, t.name)} draggable className="draggable" style = {{backgroundColor:"white"}}>
                    {t.name}
                </div>
            )
        })
        return (
            <div className={cx('container')}>
    {/*** HEADER ***/}
    <h1 style={{ backgroundColor: '#33539c', padding: "12px", margin: "0px", color: "white"}}> Cryptoy </h1>
    {/*** BODY ***/}
    <div className={cx('body')}>

        {/*** LEFT PANEL: TUTORIAL ***/}
        <ResizePanel direction="e" style={{ flexGrow: '1' }} >
            <div className={cx('sidebar', 'withMargin', 'panel')} style={{color:"white"}}>
            <div>
            <h2>
                <Typical steps={['Electronic Code Block', 1000]}/>
            </h2>
                <p>
                    The secret key is used to encrypt the plaintext block to form a ciphertext block. Two identical plaintext blocks, then, will always generate the same ciphertext block. ECB is susceptible to a variety of brute-force attacks (because of the fact that the same plaintext block will always encrypt to the same ciphertext), as well as deletion and insertion attacks. In addition, a single bit error in the transmission of the ciphertext results in an error in the entire block of decrypted plaintext.
                </p>
                <br/>
                <Divider/>
                <h3> Next Steps</h3>
                Given the schematic of ECB Encryption, how would we go about decrypting ECB? Drag and drop the right elements to the right boxes to do Electronic Code Block Decryption.
            </div>
            </div>
        </ResizePanel>

        {/*** RIGHT PANEL: PUZZLE ***/}
        <div className={cx('content', 'panel')}>
          <div>
          <h2> Electronic Code Block Encryption</h2>
          <img src={ecbEncryptionImg} width="1000"/>
          <br/>
          <br/>
          <Divider />
          <br/>
          <Grid className="container-drag" container spacing={3}>
          <Grid item xs={12}>
                <h2 style={{color: this.state.correct ? "green": "black"}}> Electronic Code Block Decryption</h2>
            </Grid>
            <Grid  item xs={3}>
                <Grid item >
                    <div className="wip" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e, "elements")}>
                        <span className="task-header"> Drag Elements </span>
                        {tasks.elements}
                    </div>
                </Grid>
            </Grid>

            <Grid  item xs={3}>
                <Grid>
                    <div className="droppable" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e, "ctAnswer")} style={{padding: '1em'}}>
                        <img src={messageBox} width="300" style={{opacity: this.state.hint1}} />
                        {tasks.ctAnswer}
                    </div>
                </Grid>
                <Grid>
                    <ArrowDownwardIcon fontSize="large"/>
                </Grid>
                <Grid>
                    <div className="droppable" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e, "decryptAnswer")} style={{padding: '1em'}}>
                        {tasks.decryptAnswer}
                    </div>
                </Grid>
                <Grid>
                    <ArrowDownwardIcon fontSize="large"/>
                </Grid>
                <Grid>
                <div className="droppable" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e, "ptAnswer")} style={{padding: '1em'}}>
                    <img src={messageBox} width="300" style={{opacity: this.state.hint2}} />
                        {tasks.ptAnswer}
                    </div>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid>
                    <div className="droppable" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e, "ctAnswer")} style={{padding: '1em'}}>
                        <img src={messageBox} width="300" style={{opacity: this.state.hint1}} />
                        {tasks.ctAnswer}
                    </div>
                </Grid>
                <Grid>
                    <ArrowDownwardIcon fontSize="large"/>
                </Grid>
                <Grid>
                    <div className="droppable" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e, "decryptAnswer")} style={{padding: '1em'}}>
                        {/* <span className="task-header"> DEC </span>  */}
                        {tasks.decryptAnswer}
                    </div>
                </Grid>
                <Grid>
                    <ArrowDownwardIcon fontSize="large"/>
                </Grid>
                <Grid>
                <div className="droppable" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e, "ptAnswer")} style={{padding: '1em'}}>
                    <img src={messageBox} width="300" style={{opacity: this.state.hint2}} />
                        {tasks.ptAnswer}
                    </div>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid>
                    <div className="droppable" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e, "ctAnswer")} style={{padding: '1em'}}>

                        <img src={messageBox} width="300" style={{opacity: this.state.hint1}} />
                        {tasks.ctAnswer}
                    </div>
                </Grid>
                <Grid>
                    <ArrowDownwardIcon fontSize="large"/>
                </Grid>
                <Grid>
                    <div className="droppable" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e, "decryptAnswer")} style={{padding: '1em'}}>
                        {tasks.decryptAnswer}
                    </div>
                </Grid>
                <Grid>
                    <ArrowDownwardIcon fontSize="large"/>
                </Grid>
                <Grid>
                <div className="droppable" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e, "ptAnswer")} style={{padding: '1em'}}>
                    <img src={messageBox} width="300" style={{opacity: this.state.hint2}} />
                        {tasks.ptAnswer}
                    </div>
                </Grid>
            </Grid>

            </Grid>

            <br/>
            <div>
                <Button variant="outlined" color="primary" style={{marginRight: '1em'}} onClick={(e) => this.onClickHint(e)}>
                    Hint ({this.state.hintsLeft})
                </Button>
                <Button variant="contained" color="primary" onClick={(e) => this.checkAnswer(e)} disabled={this.state.correct}>
                    Check
                </Button>
                { this.state.correct ? <CheckCircleIcon style={{color:"green"}}/> : null }
            </div>
            <br/>
            <Divider/>
            <br/>
            <div>
                <Button variant="outlined" color="primary" onClick={() => this.props.history.push('/ptwo')} style={{marginRight: '1em'}} >
                    Previous Puzzle
                </Button>

                <Button variant="outlined" color="primary" disabled={!this.state.correct}  onClick={() => this.props.history.push('/home')}>
                    Home
                </Button>

            </div>
          </div>

        </div>
    </div>
  </div>
        );
    }
}
