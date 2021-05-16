import React, {useState} from "react";
import classNames from 'classnames/bind';
import style from './TestResize.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CaesarKeyTable from "./CaesarKeyTable";
import Grid from '@material-ui/core/Grid';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



let cx = classNames.bind(style);

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    keyAnswer: {
      '& > *': {
        margin: theme.spacing(1),
        width: '15ch',
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
    },
    explanationCard: {
      width : '70ch',
      background: "grey",
      margin: "auto",
      color: "#ffffff"
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


export default function PTwo(props) {
    const classes = useStyles();
    const CHARACTER_LIMIT = 1;
    const QUESTION_FONTSIZE = 28;
    const [numCorrectAns, setNumCorrectAns] = useState(0);

    // Confidentiality
  var encryptedConfidentiality = ['Q','C','B','T','W','R','S','B','H','W','O','Z','W','H','M']
  const [isCorrectConfidentiality, setIsCorrectConfidentiality] = useState(false);
  const [ansConf1, setAnsConf1] = useState('');
  const [ansConf2, setAnsConf2] = useState('');
  const [ansConf3, setAnsConf3] = useState('');
  const [ansConf4, setAnsConf4] = useState('');
  const [ansConf5, setAnsConf5] = useState('');
  const [ansConf6, setAnsConf6] = useState('');
  const [ansConf7, setAnsConf7] = useState('');
  const [ansConf8, setAnsConf8] = useState('');
  const [ansConf9, setAnsConf9] = useState('');
  const [ansConf10, setAnsConf10] = useState('');
  const [ansConf11, setAnsConf11] = useState('');
  const [ansConf12, setAnsConf12] = useState('');
  const [ansConf13, setAnsConf13] = useState('');
  const [ansConf14, setAnsConf14] = useState('');
  const [ansConf15, setAnsConf15] = useState('');
  // Integrity
  var encryptedIntegrity = ['N','S', 'Y','J','L','W','N','Y','D']
  const [isCorrectIntegrity, setIsCorrectIntegrity] = useState(false);
  const [ansIntegrity1, setAnsIntegrity1] = useState('');
  const [ansIntegrity2, setAnsIntegrity2] = useState('');
  const [ansIntegrity3, setAnsIntegrity3] = useState('');
  const [ansIntegrity4, setAnsIntegrity4] = useState('');
  const [ansIntegrity5, setAnsIntegrity5] = useState('');
  const [ansIntegrity6, setAnsIntegrity6] = useState('');
  const [ansIntegrity7, setAnsIntegrity7] = useState('');
  const [ansIntegrity8, setAnsIntegrity8] = useState('');
  const [ansIntegrity9, setAnsIntegrity9] = useState('');
  // Authenticity
  var encryptedAuthenticity = ['J','D','C','Q','N','W','C','R','L','R','C','H']
  const [isCorrectAuthenticity, setIsCorrectAuthenticity] = useState(false);
  const [ansAuth1, setAnsAuth1] = useState('');
  const [ansAuth2, setAnsAuth2] = useState('');
  const [ansAuth3, setAnsAuth3] = useState('');
  const [ansAuth4, setAnsAuth4] = useState('');
  const [ansAuth5, setAnsAuth5] = useState('');
  const [ansAuth6, setAnsAuth6] = useState('');
  const [ansAuth7, setAnsAuth7] = useState('');
  const [ansAuth8, setAnsAuth8] = useState('');
  const [ansAuth9, setAnsAuth9] = useState('');
  const [ansAuth10, setAnsAuth10] = useState('');
  const [ansAuth11, setAnsAuth11] = useState('');
  const [ansAuth12, setAnsAuth12] = useState('');
  // Password
  const [isCorrectPassword, setIsCorrectPassword] = useState(false);
  const [keySum, setKeySum] = useState('');
  const [canProceedNextQuestion, setCanProceedNextQuestion] = useState(false);

  function addNumCorrectAns(){
    setNumCorrectAns(prevNumCorrectAns => prevNumCorrectAns + 1);
  }

  function checkConfidentialityAnswer() {
    if(ansConf1.toUpperCase() === "C" && ansConf2.toUpperCase() === "O" && ansConf3.toUpperCase() === "N" && 
      ansConf4.toUpperCase() === "F" && ansConf5.toUpperCase() === "I" && ansConf6.toUpperCase() === "D" && 
      ansConf7.toUpperCase() === "E" && ansConf8.toUpperCase() === "N" && ansConf9.toUpperCase() === "T" && 
      ansConf10.toUpperCase() === "I" && ansConf11.toUpperCase() === "A" && ansConf12.toUpperCase() === "L" && 
      ansConf13.toUpperCase() === "I" && ansConf14.toUpperCase() === "T" && ansConf15.toUpperCase() === "Y" 
      && isCorrectConfidentiality === false
    ){
      setIsCorrectConfidentiality(!isCorrectConfidentiality)
      addNumCorrectAns();
      console.log("it coreect!!")
    }
    
  }

  function checkIntegrityAnswer() {
    if(ansIntegrity1.toUpperCase() === "I" && ansIntegrity2.toUpperCase() === "N" && ansIntegrity3.toUpperCase() === "T" && 
      ansIntegrity4.toUpperCase() === "E" && ansIntegrity5.toUpperCase() === "G" && ansIntegrity6.toUpperCase() === "R" && 
      ansIntegrity7.toUpperCase() === "I" && ansIntegrity8.toUpperCase() === "T" && ansIntegrity9.toUpperCase() === "Y" 
      && isCorrectIntegrity === false
    ){
      setIsCorrectIntegrity(!isCorrectIntegrity)
      addNumCorrectAns();
    }
    
  }

  function checkAuthenticityAnswer() {
    if(ansAuth1.toUpperCase() === "A" && ansAuth2.toUpperCase() === "U" && ansAuth3.toUpperCase() === "T" && 
      ansAuth4.toUpperCase() === "H" && ansAuth5.toUpperCase() === "E" && ansAuth6.toUpperCase() === "N" && 
      ansAuth7.toUpperCase() === "T" && ansAuth8.toUpperCase() === "I" && ansAuth9.toUpperCase() === "C" 
      && ansAuth10.toUpperCase() === "I" && ansAuth11.toUpperCase() === "T" && ansAuth12.toUpperCase() === "Y"
      && isCorrectAuthenticity === false
    ){
      setIsCorrectAuthenticity(!isCorrectAuthenticity)
      addNumCorrectAns();
    }
    
  }

  function checkPassword() {
    console.log("keySum: " + keySum);
    if(keySum == "28" && isCorrectPassword === false){
      setIsCorrectPassword(!isCorrectPassword)
      console.log("correct!")
    }
    
  }

  return (
    <div className={cx('container')}>
    {/*** HEADER ***/}
    <h1 style={{ backgroundColor: '#33539c', padding: "12px", margin: "0px", color: "white"}}> Cryptoy</h1>

    {/*** BODY ***/}
        <div className={cx('content')} >
            <div>
                <Grid container alignItems="center" justify="center" spacing={2}>
                <Grid xs>
                    <h1> Use what you learnt in the previous lesson on Caesar Cipher, to decrypt the following ciphertexts!</h1>
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
                </Grid>
                
                </Grid>
                <br/>
                <Divider />

                {/*** CONFIDENTIALITY PUZZLE ***/}
                <div >
                    <form className={classes.letterQuestion}>
                        <TextField id="conf-1" value={encryptedConfidentiality[0]} variant="outlined" disabled
                        InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectConfidentiality? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="conf-2" value={encryptedConfidentiality[1]} variant="outlined" disabled
                        InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectConfidentiality? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="conf-3" value={encryptedConfidentiality[2]} variant="outlined" disabled
                        InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectConfidentiality? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="conf-4" value={encryptedConfidentiality[3]} variant="outlined" disabled
                        InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectConfidentiality? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="conf-5" value={encryptedConfidentiality[4]} variant="outlined" disabled
                        InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectConfidentiality? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="conf-6" value={encryptedConfidentiality[5]} variant="outlined" disabled
                        InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectConfidentiality? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="conf-7" value={encryptedConfidentiality[6]} variant="outlined" disabled
                        InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectConfidentiality? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="conf-8" value={encryptedConfidentiality[7]} variant="outlined" disabled
                        InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectConfidentiality? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="conf-9" value={encryptedConfidentiality[8]} variant="outlined" disabled
                        InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectConfidentiality? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="conf-10" value={encryptedConfidentiality[9]} variant="outlined" disabled
                        InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectConfidentiality? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="conf-11" value={encryptedConfidentiality[10]} variant="outlined" disabled
                        InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectConfidentiality? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="conf-12" value={encryptedConfidentiality[11]} variant="outlined" disabled
                        InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectConfidentiality? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="conf-13" value={encryptedConfidentiality[12]} variant="outlined" disabled
                        InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectConfidentiality? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="conf-14" value={encryptedConfidentiality[13]} variant="outlined" disabled
                        InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectConfidentiality? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="conf-15" value={encryptedConfidentiality[14]} variant="outlined" disabled
                        InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectConfidentiality? 'green' : 'black', textAlign: 'center'}}}
                        />
                        
                    </form>
                    <form className={classes.letterAnswer} autoComplete="off">
                        <TextField id="conf-ans-1" variant="outlined"
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'
                                    },
                            className: classes.multilineColor
                        }} 
                        onChange={(e) => setAnsConf1(e.target.value)}
                        />
                        {/* {console.log(ansConf1)} */}
                        <TextField id="conf-ans-2" variant="outlined"
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsConf2(e.target.value)}
                        />
                        <TextField id="conf-ans-3" variant="outlined" 
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsConf3(e.target.value)}
                        />
                        <TextField id="conf-ans-4" variant="outlined" 
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsConf4(e.target.value)}
                        />
                        <TextField id="conf-ans-5" variant="outlined" 
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsConf5(e.target.value)}
                        />
                        <TextField id="conf-ans-6" variant="outlined" 
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsConf6(e.target.value)}
                        />
                        <TextField id="conf-ans-7" variant="outlined" 
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsConf7(e.target.value)}
                        />
                        <TextField id="conf-ans-8" variant="outlined" 
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsConf8(e.target.value)}
                        />
                        <TextField id="conf-ans-9" variant="outlined" 
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsConf9(e.target.value)}
                        />
                        <TextField id="conf-ans-10" variant="outlined" 
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsConf10(e.target.value)}
                        />
                        <TextField id="conf-ans-11" variant="outlined" 
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsConf11(e.target.value)}
                        />
                        <TextField id="conf-ans-12" variant="outlined" 
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsConf12(e.target.value)}
                        />
                        <TextField id="conf-ans-13" variant="outlined" 
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsConf13(e.target.value)}
                        />
                        <TextField id="conf-ans-14" variant="outlined" 
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsConf14(e.target.value)}
                        />
                        <TextField id="conf-ans-15" variant="outlined" 
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsConf15(e.target.value)}
                        />
                    </form>
                    <br/>

                    <div className={classes.yesNoButton}>
                        {/* <Button variant="outlined" color="primary" >
                            Hint
                        </Button> */}
                        <Button variant="contained" color="primary" onClick={checkConfidentialityAnswer} disabled={isCorrectConfidentiality}>
                            Check
                        </Button>
                        { isCorrectConfidentiality ? <CheckCircleIcon style={{color:"green"}}/> : null }
                        <div style={{ display: isCorrectConfidentiality? 'flex': 'none', justifyContent:'center' }} >
                          <Card className={classes.explanationCard}>
                            <CardContent>
                            That's right! Do you know what Confidentiality is?
                            <br/>
                            <Accordion square>
                                  <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1d-content"
                                  id="panel1d-header"
                                  >
                                  <Typography className={classes.heading}> Confidentiality</Typography>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                      <p> Confidentiality prevents adversaries from reading private data.</p>
                                  </AccordionDetails>
                              </Accordion>
                            </CardContent>
                          </Card>
                        </div>
                    </div>
                    
                </div>
                <Divider />       

                {/*** INTEGRITY PUZZLE ***/}
                
                <div>
                    <form className={classes.letterQuestion}>
                        <TextField id="integrity-1" value={encryptedIntegrity[0]} variant="outlined" disabled
                            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectIntegrity? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="integrity-2" value={encryptedIntegrity[1]} variant="outlined" disabled
                            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectIntegrity? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="integrity-3" value={encryptedIntegrity[2]} variant="outlined" disabled
                            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectIntegrity? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="integrity-4" value={encryptedIntegrity[3]} variant="outlined" disabled
                            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectIntegrity? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="integrity-5" value={encryptedIntegrity[4]} variant="outlined" disabled
                            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectIntegrity? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="integrity-6" value={encryptedIntegrity[5]} variant="outlined" disabled
                            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectIntegrity? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="integrity-7" value={encryptedIntegrity[6]} variant="outlined" disabled
                            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectIntegrity? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="integrity-8" value={encryptedIntegrity[7]} variant="outlined" disabled
                            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectIntegrity? 'green' : 'black', textAlign: 'center'}}}
                        />
                        <TextField id="integrity-9" value={encryptedIntegrity[8]} variant="outlined" disabled
                            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectIntegrity? 'green' : 'black', textAlign: 'center'}}}
                        />
                    </form>
                    <form className={classes.letterAnswer} autoComplete="off">
                        <TextField id="integrity-ans-1" variant="outlined"
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsIntegrity1(e.target.value)}
                        />
                        <TextField id="integrity-ans-2" variant="outlined"
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsIntegrity2(e.target.value)}
                        />
                        <TextField id="integrity-ans-3" variant="outlined"
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsIntegrity3(e.target.value)}
                        />
                        <TextField id="integrity-ans-4" variant="outlined"
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsIntegrity4(e.target.value)}
                        />
                        <TextField id="integrity-ans-5" variant="outlined"
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsIntegrity5(e.target.value)}
                        />
                        <TextField id="integrity-ans-6" variant="outlined"
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsIntegrity6(e.target.value)}
                        />
                        <TextField id="integrity-ans-7" variant="outlined"
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsIntegrity7(e.target.value)}
                        />
                        <TextField id="integrity-ans-8" variant="outlined"
                        inputProps={{ 
                            maxLength: CHARACTER_LIMIT,
                            style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsIntegrity8(e.target.value)}
                        /><TextField id="integrity-ans-9" variant="outlined"
                        inputProps={{ 
                        maxLength: CHARACTER_LIMIT,
                        style: {textTransform: 'capitalize',
                                    textAlign: 'center'}
                        }} 
                        onChange={(e) => setAnsIntegrity9(e.target.value)}
                    />
                    </form>

                    <br/>

                    <div className={classes.yesNoButton}>
                    {/* <Button variant="outlined" color="primary" >
                        Hint
                    </Button> */}
                    <Button variant="contained" color="primary" onClick={checkIntegrityAnswer} disabled={isCorrectIntegrity}>
                        Check
                    </Button>
                    { isCorrectIntegrity ? <CheckCircleIcon style={{color:"green"}}/> : null }
                    <div style={{ display: isCorrectIntegrity? 'flex': 'none', justifyContent:'center' }} >
                          <Card className={classes.explanationCard}>
                            <CardContent>
                            That's right! Do you know what Integrity is?
                            <br/>
                            <Accordion square>
                                  <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1d-content"
                                  id="panel1d-header"
                                  >
                                  <Typography className={classes.heading}> Integrity</Typography>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                      <p> Integrity prevents attackers from altering source data.</p>
                                  </AccordionDetails>
                              </Accordion>
                            </CardContent>
                          </Card>
                        </div>
                    </div>
                </div>
                <Divider/>

                {/*** AUTHENTICITY PUZZLE ***/}
                
        <div>
        <form className={classes.letterQuestion}>
          <TextField id="auth-1" value={encryptedAuthenticity[0]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectAuthenticity? 'green' : 'black', textAlign: 'center'}}}
          />
          <TextField id="auth-2" value={encryptedAuthenticity[1]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectAuthenticity? 'green' : 'black', textAlign: 'center'}}}
          />
          <TextField id="auth-3" value={encryptedAuthenticity[2]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectAuthenticity? 'green' : 'black', textAlign: 'center'}}}
          />
          <TextField id="auth-4" value={encryptedAuthenticity[3]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectAuthenticity? 'green' : 'black', textAlign: 'center'}}}
          />
          <TextField id="auth-5" value={encryptedAuthenticity[4]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectAuthenticity? 'green' : 'black', textAlign: 'center'}}}
          />
          <TextField id="auth-6" value={encryptedAuthenticity[5]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectAuthenticity? 'green' : 'black', textAlign: 'center'}}}
          />
          <TextField id="auth-7" value={encryptedAuthenticity[6]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectAuthenticity? 'green' : 'black', textAlign: 'center'}}}
          />
          <TextField id="auth-8" value={encryptedAuthenticity[7]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectAuthenticity? 'green' : 'black', textAlign: 'center'}}}
          />
          <TextField id="auth-9" value={encryptedAuthenticity[8]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectAuthenticity? 'green' : 'black', textAlign: 'center'}}}
          />
          <TextField id="auth-10" value={encryptedAuthenticity[9]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectAuthenticity? 'green' : 'black', textAlign: 'center'}}}
          />
          <TextField id="auth-11" value={encryptedAuthenticity[10]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectAuthenticity? 'green' : 'black', textAlign: 'center'}}}
          />
          <TextField id="auth-12" value={encryptedAuthenticity[11]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectAuthenticity? 'green' : 'black', textAlign: 'center'}}}
          />
        </form>
        <form className={classes.letterAnswer} autoComplete="off">
                <TextField id="auth-ans-1" variant="outlined" 
                  inputProps={{ 
                    maxLength: CHARACTER_LIMIT,
                    style: {textTransform: 'capitalize',
                              textAlign: 'center'},
                  }} 
                  onChange={(e) => setAnsAuth1(e.target.value)}
                />
                <TextField id="auth-ans-2" variant="outlined" 
                  inputProps={{ 
                    maxLength: CHARACTER_LIMIT,
                    style: {textTransform: 'capitalize',
                              textAlign: 'center'}
                  }} 
                  onChange={(e) => setAnsAuth2(e.target.value)}
                />
                <TextField id="auth-ans-3" variant="outlined" 
                  inputProps={{ 
                    maxLength: CHARACTER_LIMIT,
                    style: {textTransform: 'capitalize',
                              textAlign: 'center'}
                  }} 
                  onChange={(e) => setAnsAuth3(e.target.value)}
                />
                <TextField id="auth-ans-4" variant="outlined" 
                  inputProps={{ 
                    maxLength: CHARACTER_LIMIT,
                    style: {textTransform: 'capitalize',
                              textAlign: 'center'}
                  }} 
                  onChange={(e) => setAnsAuth4(e.target.value)}
                />
                <TextField id="auth-ans-5" variant="outlined" 
                  inputProps={{ 
                    maxLength: CHARACTER_LIMIT,
                    style: {textTransform: 'capitalize',
                              textAlign: 'center'}
                  }} 
                  onChange={(e) => setAnsAuth5(e.target.value)}
                />
                <TextField id="auth-ans-6" variant="outlined" 
                  inputProps={{ 
                    maxLength: CHARACTER_LIMIT,
                    style: {textTransform: 'capitalize',
                              textAlign: 'center'}
                  }} 
                  onChange={(e) => setAnsAuth6(e.target.value)}
                />
                <TextField id="auth-ans-7" variant="outlined" 
                  inputProps={{ 
                    maxLength: CHARACTER_LIMIT,
                    style: {textTransform: 'capitalize',
                              textAlign: 'center'}
                  }} 
                  onChange={(e) => setAnsAuth7(e.target.value)}
                />
                <TextField id="auth-ans-8" variant="outlined" 
                  inputProps={{ 
                    maxLength: CHARACTER_LIMIT,
                    style: {textTransform: 'capitalize',
                              textAlign: 'center'}
                  }} 
                  onChange={(e) => setAnsAuth8(e.target.value)}
                />
                <TextField id="auth-ans-9" variant="outlined" 
                  inputProps={{ 
                    maxLength: CHARACTER_LIMIT,
                    style: {textTransform: 'capitalize',
                              textAlign: 'center'}
                  }} 
                  onChange={(e) => setAnsAuth9(e.target.value)}
                />
                <TextField id="auth-ans-10" variant="outlined" 
                  inputProps={{ 
                    maxLength: CHARACTER_LIMIT,
                    style: {textTransform: 'capitalize',
                              textAlign: 'center'}
                  }} 
                  onChange={(e) => setAnsAuth10(e.target.value)}
                />
                <TextField id="auth-ans-11" variant="outlined" 
                  inputProps={{ 
                    maxLength: CHARACTER_LIMIT,
                    style: {textTransform: 'capitalize',
                              textAlign: 'center'}
                  }} 
                  onChange={(e) => setAnsAuth11(e.target.value)}
                />
                <TextField id="auth-ans-12" variant="outlined" 
                  inputProps={{ 
                    maxLength: CHARACTER_LIMIT,
                    style: {textTransform: 'capitalize',
                              textAlign: 'center'}
                  }} 
                  onChange={(e) => setAnsAuth12(e.target.value)}
                />
            </form>
            <br/>

            <div className={classes.yesNoButton}>
              {/* <Button variant="outlined" color="primary" >
                  Hint
              </Button> */}
              <Button variant="contained" color="primary" onClick={checkAuthenticityAnswer} disabled={isCorrectAuthenticity}>
                  Check
              </Button>
              { isCorrectAuthenticity ? <CheckCircleIcon style={{color:"green"}}/> : null }
              <div style={{ display: isCorrectAuthenticity? 'flex': 'none', justifyContent:'center' }} >
                <Card className={classes.explanationCard}>
                  <CardContent>
                  That's right! Do you know what Authenticity is?
                  <br/>
                  <Accordion square>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                        >
                        <Typography className={classes.heading}> Authenticity</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>Authenticity ensures that source data is created by the expected person. Authentication is the process of proving one's identity.</p>
                        </AccordionDetails>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </div>
                  
        <br/>
        <Divider />
        <br/>
        <h3>What is the sum of the keys of the 3 puzzles above? </h3>
        <div >
          <form className={classes.letterAnswer} autoComplete="off">
            <TextField id="key-sum" variant="outlined" multiline onChange={(e) => setKeySum(e.target.value)}/>
          </form>
          <Button variant="contained" color="primary" onClick={checkPassword} disabled={isCorrectPassword}>
              Check
          </Button>
          { isCorrectPassword ? <CheckCircleIcon style={{color:"green"}}/> : null }
        </div>
        <br/>
        <Divider />
        <br/>
        <div className={classes.yesNoButton}>
            {/* <h4>{numCorrectAns} out of 4 correct!</h4> */}
            <Button variant="outlined" color="primary" onClick={() => props.history.push('/pone')} >
                Previous Puzzle
            </Button>
            <Button variant="outlined" color="primary" disabled={!(isCorrectConfidentiality && isCorrectIntegrity && isCorrectAuthenticity && isCorrectPassword)}  onClick={() => props.history.push('/skc')}>
                Next Puzzle
            </Button>
        </div>
        </div>
                
            </div>
        </div>
    </div>
  );
}
