import React, {useState} from "react";
import ResizePanel from "react-resize-panel";
import classNames from 'classnames/bind';
import style from './TestResize.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typical from "react-typical";
import CancelIcon from '@material-ui/icons/Cancel';
import modFormula from './pictures/modFormula.png';
import modExamples from './pictures/modExamples.png';


let cx = classNames.bind(style);

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginRight: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      overflow: "auto",
    },
    drawerPaper: {
      width: drawerWidth,
      // makes drawer resizable
      resize: "horizontal",
      overflow: "auto",
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    puzzleCard: {
        width : '100ch',
        background: "#002984",
        // margin: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#ffffff"
    },
    explanationCard: {
      width : '70ch',
      background: "grey",
      margin: "auto",
      color: "#ffffff"
    },
    textAnswer: {
      '& > *': {
        margin: theme.spacing(1),
        width: '75ch',
      },
    },
    letterQuestion: {
      '& > *': {
        margin: theme.spacing(1),
        width: '7ch',
      },"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
      },
    },
    letterAnswer: {
      '& > *': {
        margin: theme.spacing(1),
        width: '7ch',
      },
    },
    yesNoButton: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    multilineColor:{
      '& > *': {
        color: "red"
      }
    }
}));

const drawerWidth = 1800;

export default function BeginMath(props) {
    const classes = useStyles();
   
    function PlayMod(){
        const [score, setScore] = useState(0);
        const [counter, setCounter] = useState(1);
        const [answer, setAnswer] = useState('');
        const [wrongAns, setWrongAns] = useState(false);
        const [showScoreCard, setShowScoreCard] = useState(false);

        var questions = {
            1: ["13 mod 2", "1"], 
            2: ["45 % 5", "0"],
            3: ["64 / 8", "8"],
            4: ["64 % 8", "0"],
            5: ["4 mod 6", "4"]
        }

        function checkAnswer(){
            if(answer.toUpperCase() === questions[counter][1]){
                (console.log("hwllo"));
                setScore(score+1);
                (console.log("hwldvvdlo"));
                nextQuestion()
            } else {
                setWrongAns(true);
            }
        }

        function nextQuestion(){
            if (wrongAns === true) setWrongAns(false);
            if (counter < Object.keys(questions).length){
                setCounter(counter+1)
            } else {
                console.log("last")
                console.log("c" + score)
                setShowScoreCard(true);
            }
            setAnswer("")
        }

        function clickNext(){
            props.history.push('/cb');
        }

        return (
           <div> 
               <div style={{ display: !showScoreCard? 'inline': 'none', justifyContent:'center' }}>
                    <h1>Score: {score}/5</h1>
                    <Card className={classes.puzzleCard}> 
                        <CardContent>
                            Solve this equation:
                            <h2>
                            {questions[counter][0]}
                            </h2>
                        </CardContent>
                    </Card>
                    <br/>
                    <TextField id="vege-answer" label="Answer" value={answer} variant="outlined" multiline inputProps={{ 
                                style: {textTransform: 'uppercase',
                                        textAlign: 'center'}
                            }}  onChange={(e) => setAnswer(e.target.value)} /> 
                    { wrongAns ? <CancelIcon style={{color:"red"}} fontSize="large"/> : <br/> }
                    <br/>
                    <div className={classes.yesNoButton}>
                        <Button variant="outlined" color="primary" onClick={nextQuestion}> Skip </Button>
                        <Button variant="outlined" color="primary" onClick={checkAnswer}> Next </Button>
                    </div>
                    
                </div>
                <div style={{ display: showScoreCard? 'inline': 'none', justifyContent:'center'}}>
                    <Card className={classes.content}> 
                        <CardContent>
                            <h1> Great job!</h1>
                            <ol align="center">
                                <li>13 mod 2 = 1</li>
                                <li>45 % 5 = 0</li>
                                <li>64 / 8 = 8</li>
                                <li>64 % 8 = 0</li>
                                <li>4 mod 6 = 4</li>
                            </ol>
                            <h2> {score} out of {Object.keys(questions).length}! </h2>
                        </CardContent>
                    </Card>
                    
                    <div className={classes.yesNoButton}>
                        <Button variant="outlined" color="primary" onClick={clickNext}> Next Puzzle</Button>
                    </div>
                </div>
           </div> 
        )
    }
    

    return (
        <div className={cx('container')}>
        {/*** HEADER ***/}
        <h1 style={{ backgroundColor: '#33539c', padding: "12px", margin: "0px", color: "white"}}> Cryptoy </h1>
        {/*** BODY ***/}
        <div className={cx('body')}>

            {/*** LEFT PANEL: TUTORIAL ***/}
            <ResizePanel direction="e" style={{ flexGrow: '1' }} >
                <div className={cx('sidebarOne', 'withMargin', 'panel')}  style={{color:"white"}}>
                <div>
                <h1>
                    <Typical steps={['Modular Arithmetic!', 1000]}/>
                </h1>
                    <Typography paragraph align="left">
                        Modular Arithmetic is fundamental to modern cryptography. But what exactly is modular ? You might not have noticed, but the 12-hour clock is an application of modular arithmetic!
                    </Typography>
                    <Typography align="left">
                        Modular Arithmetic is a system of arithmetic for integers. The operator, called the modulo operator is usually expressed as 'mod' or the percent sign '%'.
                    </Typography>
                    <img src={modFormula} width="250"/>
                    <Typography paragraph align="left">
                        where a is the dividend, b is the modulus and r is the remainder.
                    </Typography>
                    
                    <Typography align="left">
                        You can think of it visually as numbers wrapping around a certain value, called the modulus.
                        <br/> In the clock example the modulus is 12.
                    </Typography>
                    <img src={modExamples} width="500"/>
                    <br/>
                    <Typography variant='caption' align="left">Clock Image from: <u>https://www.math-salamanders.com/image-files/24-hour-clock-face.gif</u></Typography>
                    <Typography align="left">
                        Simply put, A modulo B would give us the remainder of A divided by B!
                    </Typography>
                    
                </div>
                </div>
            </ResizePanel>

            {/*** RIGHT PANEL: PUZZLE ***/}
            <div className={cx('content', 'panel')}>
            <PlayMod/>    
            
            </div>
        </div>
    </div>
    );}

