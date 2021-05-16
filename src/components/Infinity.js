import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import Typical from "react-typical";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import CancelIcon from '@material-ui/icons/Cancel';
import CaesarKeyTable from "./CaesarKeyTable";
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    content: {
        '& > *': {
            backgroundColor: "#002984",
            padding: "20px",
            margin: "200px",
            color: "white"
          },
    },
    yesNoButton: {
      '& > *': {
        margin: theme.spacing(5),
        backgroundColor: "white"
      },
    },
    puzzleCard: {
        width : '20ch',
        background: "#002984",
        // margin: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#ffffff"
    },
    hintCard: {
        width : '1300px',
        background: "lightblue",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#black"
    },
}));

const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);
export default function Infinity(props) {
    function StartChooseCategory(props){
        const classes = useStyles();

        function chooseVegeDisableCategorySelection(){
            setPhaseChooseCategory(false); 
            setCategoryVegetables(true);
        }

        function chooseFruitsDisableCategorySelection(){
            setPhaseChooseCategory(false);
            setCategoryFruits(true);
        }

        return (
        <div className={classes.content}>
              <div>
              <h1> 
                  <Typical steps={['Are you a master at deciphering?', 1000]}/>
              </h1>
              <p> Select your category</p>
              <div className={classes.yesNoButton}>
                <Button variant="outlined" color="primary" onClick={chooseVegeDisableCategorySelection}> Vegetables </Button>
                <Button variant="outlined" color="primary" onClick={chooseFruitsDisableCategorySelection}> Fruits </Button>
              </div>
              </div>
          </div>
          )
    }
    
    function PlayVegetables(){
        const [score, setScore] = useState(0);
        const [counter, setCounter] = useState(1);
        const [answer, setAnswer] = useState('');
        const [wrongAns, setWrongAns] = useState(false);
        const [showScoreCard, setShowScoreCard] = useState(false);

        var vegetables = {
            1: ["JHIIHNL", "CABBAGE"], 
            2: ["LJAAXC", "CARROT"],
            3: ["LDALCLRFD", "ASPARAGUS"],
            4: ["HYAPJOVRL", "ARTICHOKE"],
            5: ["MKEVSPVYGOB", "CAULIFLOWER"],
            6: ["TVCVIP", "CELERY"],
            7: ["GDWBOQV", "SPINACH"],
            8: ["TOWWBCHC", "ZUCCHINI"],
            9: ["PKIWPK", "TOMATO"],
            10: ["QVNQLJO", "PUMPKIN"]
        }

        function checkAnswer(){
            if(answer.toUpperCase() === vegetables[counter][1]){
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
            if (counter < Object.keys(vegetables).length){
                setCounter(counter+1)
            } else {
                console.log("last")
                console.log("c" + score)
                setShowScoreCard(true);
            }
            setAnswer("")
        }

        function clickReplay(){
            setPhaseChooseCategory(true);
            setCategoryVegetables(false);
            props.history.push('/infinity');
        }

        return (
           <div> 
               <div style={{ display: !showScoreCard? 'inline': 'none', justifyContent:'center' }}>
                    <h1>Score: {score}/{Object.keys(vegetables).length}</h1>
                    <Card className={classes.puzzleCard}> 
                        <CardContent>
                            Ciphertext:
                            <h2>
                            {vegetables[counter][0]}
                            </h2>
                        </CardContent>
                    </Card>
                    <br/>
                    <TextField id="vege-answer" label="Plaintext" value={answer} variant="outlined" multiline inputProps={{ 
                                style: {textTransform: 'uppercase',
                                        textAlign: 'center'}
                            }}  onChange={(e) => setAnswer(e.target.value)} /> 
                    { wrongAns ? <CancelIcon style={{color:"red"}} fontSize="large"/> : <br/> }
                    <br/>
                    <div className={classes.yesNoButton}>
                        <Button variant="outlined" color="primary" onClick={nextQuestion}> Skip </Button>
                        <Button variant="outlined" color="primary" onClick={checkAnswer}> Next </Button>
                    </div>
                    <Card className={classes.hintCard}>
                        <CardContent>   
                            <h2> Need a Helping Hand? </h2>
                            <Accordion square defaultExpanded="true">
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1d-content"
                                id="panel1d-header"
                                >
                                <Typography className={classes.heading}> Caesar Table</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <CaesarKeyTable/>
                                </AccordionDetails>
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>
                <div style={{ display: showScoreCard? 'inline': 'none', justifyContent:'center'}}>
                    <Card className={classes.content}> 
                        <CardContent>
                            <h1> Great job!</h1>
                            <h2> {score} out of {Object.keys(vegetables).length}! </h2>
                        </CardContent>
                    </Card>
                    <div className={classes.yesNoButton}>
                        <Button variant="outlined" color="primary" onClick={() => props.history.push('/home')}> Home </Button>
                        <Button variant="outlined" color="primary" onClick={clickReplay}> Replay</Button>
                    </div>
                </div>
           </div> 
        )
    }
    
    function PlayFruits(){
        const [score, setScore] = useState(0);
        const [counter, setCounter] = useState(1);
        const [answer, setAnswer] = useState('');
        const [wrongAns, setWrongAns] = useState(false);
        const [showScoreCard, setShowScoreCard] = useState(false);

        var fruits = {
            1: ["GJSFYW", "ORANGE"], 
            2: ["RGGCV", "APPLE"],
            3: ["LGZNLOZ", "AVOCADO"],
            4: ["PZISPSFFM", "BLUEBERRY"],
            5: ["LXLXWDC", "COCONUT"],
            6: ["WKQLQ", "GUAVA"],
            7: ["ZNATB", "MANGO"],
            8: ["PGDUMZ", "DURIAN"],
            9: ["UIVOWABMMV", "MANGOSTEEN"],
            10: ["QPNFHSBOBUF", "POMEGRANATE"]
        }

        function checkAnswer(){
            if(answer.toUpperCase() === fruits[counter][1]){
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
            if (counter < Object.keys(fruits).length){
                setCounter(counter+1)
            } else {
                console.log("last")
                console.log("c" + score)
                setShowScoreCard(true);
            }
            setAnswer("")
        }

        function clickReplay(){
            setPhaseChooseCategory(true);
            setCategoryFruits(false);
            props.history.push('/infinity');
        }

        return (
           <div> 
               <div style={{ display: !showScoreCard? 'inline': 'none', justifyContent:'center' }}>
                    <h1>Score: {score}/{Object.keys(fruits).length}</h1>
                    <Card className={classes.puzzleCard}> 
                        <CardContent>
                            Ciphertext:
                            <h2>
                            {fruits[counter][0]}
                            </h2>
                        </CardContent>
                    </Card>
                    <br/>
                    <TextField id="vege-answer" label="Plaintext" value={answer} variant="outlined" multiline inputProps={{ 
                                style: {textTransform: 'uppercase',
                                        textAlign: 'center'}
                            }}  onChange={(e) => setAnswer(e.target.value)} /> 
                    { wrongAns ? <CancelIcon style={{color:"red"}} fontSize="large"/> : <br/> }
                    <br/>
                    <div className={classes.yesNoButton}>
                        <Button variant="outlined" color="primary" onClick={nextQuestion}> Skip </Button>
                        <Button variant="outlined" color="primary" onClick={checkAnswer}> Next </Button>
                    </div>
                    <Card className={classes.hintCard}>
                        <CardContent>   
                            <h2> Need a Helping Hand? </h2>
                            <Accordion square defaultExpanded="true">
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1d-content"
                                id="panel1d-header"
                                >
                                <Typography className={classes.heading}> Caesar Table</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <CaesarKeyTable/>
                                </AccordionDetails>
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>
                <div style={{ display: showScoreCard? 'inline': 'none', justifyContent:'center'}}>
                    <Card className={classes.content}> 
                        <CardContent>
                            <h1> Great job!</h1>
                            <h2> {score} out of {Object.keys(fruits).length}! </h2>
                        </CardContent>
                    </Card>
                    <div className={classes.yesNoButton}>
                        <Button variant="outlined" color="primary" onClick={() => props.history.push('/home')}> Home </Button>
                        <Button variant="outlined" color="primary" onClick={clickReplay}> Replay</Button>
                    </div>
                </div>
           </div> 
        )
    }

    const classes = useStyles();
    const [phaseChooseCategory, setPhaseChooseCategory] = useState(true);
    const [categoryVegetables, setCategoryVegetables] = useState(false); //change to false
    const [categoryFruits, setCategoryFruits] = useState(false);
    
    
    return (
      <div>
          <h1 style={{ backgroundColor: '#33539c', padding: "12px", margin: "0px", color: "white"}}> Cryptoy</h1>
          <div style={{ display: phaseChooseCategory? 'inline': 'none', justifyContent:'center' }}>
            <StartChooseCategory />
          </div>
          <div style={{ display: categoryVegetables? 'inline': 'none', justifyContent:'center' }}>
            <PlayVegetables />
          </div>
          <div style={{ display: categoryFruits? 'inline': 'none', justifyContent:'center' }}>
            <PlayFruits />
          </div>
      </div>
    
  );

  
}
