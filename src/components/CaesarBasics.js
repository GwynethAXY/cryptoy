import React, {useState} from "react";
import ResizePanel from "react-resize-panel";
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
import Typical from "react-typical";
import ImportExportIcon from '@material-ui/icons/ImportExport';
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
      },
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
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

    const [clickedHint, setClickedHint] = useState(false);

    var keyCipherToPlainQ = ['T','S','F','S','F','S']
    const [isCorrectKeyCipherToPlain, setCorrectKeyCipherToPlain] = useState(false);
    const [ansKeyCipherToPlain1, setAnsKeyCipherToPlain1] = useState('');
    const [ansKeyCipherToPlain2, setAnsKeyCipherToPlain2] = useState('');
    const [ansKeyCipherToPlain3, setAnsKeyCipherToPlain3] = useState('');
    const [ansKeyCipherToPlain4, setAnsKeyCipherToPlain4] = useState('');
    const [ansKeyCipherToPlain5, setAnsKeyCipherToPlain5] = useState('');
    const [ansKeyCipherToPlain6, setAnsKeyCipherToPlain6] = useState('');
  
    var cipherPlainToKeyQCipher = ['N','Y','L','B','Y']
    var cipherPlainToKeyQPlain = ['P','A','N','D','A']
    const [isCorrectCipherPlainToKey, setCorrectCipherPlainToKey] = useState(false);
    const [ansCipherPlainToKey, setAnsCipherPlainToKey] = useState('');
    
    var keyPlainToCipherQ = ['B','A','M','B','O','O']
    const [isCorrectKeyPlainToCipher, setCorrectKeyPlainToCipher] = useState(false);
    const [ansKeyPlainToCipher1, setAnsKeyPlainToCipher1] = useState('');
    const [ansKeyPlainToCipher2, setAnsKeyPlainToCipher2] = useState('');
    const [ansKeyPlainToCipher3, setAnsKeyPlainToCipher3] = useState('');
    const [ansKeyPlainToCipher4, setAnsKeyPlainToCipher4] = useState('');
    const [ansKeyPlainToCipher5, setAnsKeyPlainToCipher5] = useState('');
    const [ansKeyPlainToCipher6, setAnsKeyPlainToCipher6] = useState('');

  function checkKeyCipherToPlainAnswer(){
        if(ansKeyCipherToPlain1.toUpperCase() === "B" && ansKeyCipherToPlain2.toUpperCase() === "A" && ansKeyCipherToPlain3.toUpperCase() === "N" && 
        ansKeyCipherToPlain4.toUpperCase() === "A" && ansKeyCipherToPlain5.toUpperCase() === "N" && ansKeyCipherToPlain6.toUpperCase() === "A"
        && isCorrectKeyCipherToPlain === false
    ){
        setCorrectKeyCipherToPlain(!isCorrectKeyCipherToPlain) 
        console.log("it coreect!!")
    }
  }

  function checkCipherPlainToKeyAnswer(){
      if(ansCipherPlainToKey == "24" && isCorrectCipherPlainToKey === false){
          setCorrectCipherPlainToKey(!isCorrectCipherPlainToKey)
      }
  }

  function checkKeyPlainToCipherAnswer(){
    if(ansKeyPlainToCipher1.toUpperCase() === "Z" && ansKeyPlainToCipher2.toUpperCase() === "Y" && ansKeyPlainToCipher3.toUpperCase() === "K" && 
    ansKeyPlainToCipher4.toUpperCase() === "Z" && ansKeyPlainToCipher5.toUpperCase() === "M" && ansKeyPlainToCipher6.toUpperCase() === "M"
    && isCorrectKeyPlainToCipher === false){
        setCorrectKeyPlainToCipher(!isCorrectKeyPlainToCipher)
    }
  }

  function onClickHint(){
    setClickedHint(!clickedHint);
  }

  function header(){
    return (
      <h1 style={{ backgroundColor: '#33539c', padding: "12px", margin: "0px", color: "white"}}> Cryptoy </h1>
    )
  }

  function leftPanel(){
    return (
      <ResizePanel direction="e" style={{ flexGrow: '1' }} >
        <div className={cx('sidebar', 'withMargin', 'panel')} style={{color:"white"}}>
          <div className={cx('withMargin')}>
            <h1>
              <Typical steps={['Caesar Cipher', 1000]} />
            </h1>
            <Typography paragraph align="left">
                The Caesar cipher is one of the earliest known and simplest ciphers. 
                It is a type of substitution cipher in which each letter in the plaintext 
                is 'shifted' a certain number of places down the alphabet.
            </Typography>
            <Typography paragraph align="left">
                For example, with a shift key of 1, A would become B, B would be replaced by C, and so on.
            </Typography>
            <Typography paragraph>
                E(x) = (x+k) (mod 26)
                <br/>
                D(x) = (x-k) (mod 26)
            </Typography>
          </div>
        </div>
      </ResizePanel>
    )
  }

  function caesarAccordionWithHintButton(){
    return(
      <div>
        <Grid container alignItems="center" justify="center" spacing={2}>
          <Grid xs>
            <h1> Caesar Cipher Warm Up</h1>
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
        <Button variant="outlined" color="primary" style={{marginRight: '1em'}} onClick={onClickHint} disabled={clickedHint}>
          Hint
        </Button>
        <br/>
        <br/>
        <div style={{ display: clickedHint? 'flex': 'none', justifyContent:'center' }} >
          <Card className={classes.explanationCard}>
            <CardContent>
              Which is the ciphertext and plaintext? Refer the right class of text to the right row in the Caesar Key Table.
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  function qOne(){
    return(
      <div>
        <h3>Given that the ciphertext is TSFSFS and the key is 18, what is the plaintext? </h3>
        <form className={classes.letterQuestion}>
          <TextField id="conf-1" value={keyCipherToPlainQ[0]} variant="outlined" disabled
          InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectKeyCipherToPlain? 'green' : 'black', textAlign: 'center'}}}
          />
          <TextField id="conf-2" value={keyCipherToPlainQ[1]} variant="outlined" disabled
          InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectKeyCipherToPlain? 'green' : 'black', textAlign: 'center'}}}
          />
          <TextField id="conf-3" value={keyCipherToPlainQ[2]} variant="outlined" disabled
          InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectKeyCipherToPlain? 'green' : 'black', textAlign: 'center'}}}
          />
          <TextField id="conf-4" value={keyCipherToPlainQ[3]} variant="outlined" disabled
          InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectKeyCipherToPlain? 'green' : 'black', textAlign: 'center'}}}
          />
          <TextField id="conf-5" value={keyCipherToPlainQ[4]} variant="outlined" disabled
          InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectKeyCipherToPlain? 'green' : 'black', textAlign: 'center'}}}
          />
          <TextField id="conf-6" value={keyCipherToPlainQ[5]} variant="outlined" disabled
          InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectKeyCipherToPlain? 'green' : 'black', textAlign: 'center'}}}
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
          onChange={(e) => setAnsKeyCipherToPlain1(e.target.value)}
          />
          <TextField id="conf-ans-2" variant="outlined"
          inputProps={{ 
              maxLength: CHARACTER_LIMIT,
              style: {textTransform: 'capitalize',
                      textAlign: 'center'}
          }} 
          onChange={(e) => setAnsKeyCipherToPlain2(e.target.value)}
          />
          <TextField id="conf-ans-3" variant="outlined" 
          inputProps={{ 
              maxLength: CHARACTER_LIMIT,
              style: {textTransform: 'capitalize',
                      textAlign: 'center'}
          }} 
          onChange={(e) => setAnsKeyCipherToPlain3(e.target.value)}
          />
          <TextField id="conf-ans-4" variant="outlined" 
          inputProps={{ 
              maxLength: CHARACTER_LIMIT,
              style: {textTransform: 'capitalize',
                      textAlign: 'center'}
          }} 
          onChange={(e) => setAnsKeyCipherToPlain4(e.target.value)}
          />
          <TextField id="conf-ans-5" variant="outlined" 
          inputProps={{ 
              maxLength: CHARACTER_LIMIT,
              style: {textTransform: 'capitalize',
                      textAlign: 'center'}
          }} 
          onChange={(e) => setAnsKeyCipherToPlain5(e.target.value)}
          />
          <TextField id="conf-ans-6" variant="outlined" 
          inputProps={{ 
              maxLength: CHARACTER_LIMIT,
              style: {textTransform: 'capitalize',
                      textAlign: 'center'}
          }} 
          onChange={(e) => setAnsKeyCipherToPlain6(e.target.value)}
          />
        </form>
        <div className={classes.yesNoButton}>
          <Button variant="contained" color="primary" onClick={checkKeyCipherToPlainAnswer} disabled={isCorrectKeyCipherToPlain}>
              Check
          </Button>
          { isCorrectKeyCipherToPlain ? <CheckCircleIcon style={{color:"green"}}/> : null }
        </div>
      </div>
    )
  }

  function qTwo(){
    return(
      <div>
        <h3>Given that the ciphertext is NYLBY and the plaintext is PANDA, what is the key? </h3>
        <form className={classes.letterQuestion}>
            <TextField id="conf-1" value={cipherPlainToKeyQCipher[0]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectCipherPlainToKey? 'green' : 'black', textAlign: 'center'}}}
            />
            <TextField id="conf-2" value={cipherPlainToKeyQCipher[1]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectCipherPlainToKey? 'green' : 'black', textAlign: 'center'}}}
            />
            <TextField id="conf-3" value={cipherPlainToKeyQCipher[2]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectCipherPlainToKey? 'green' : 'black', textAlign: 'center'}}}
            />
            <TextField id="conf-4" value={cipherPlainToKeyQCipher[3]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectCipherPlainToKey? 'green' : 'black', textAlign: 'center'}}}
            />
            <TextField id="conf-5" value={cipherPlainToKeyQCipher[4]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectCipherPlainToKey? 'green' : 'black', textAlign: 'center'}}}
            />
        </form>
        ENCRYPT(k) <ImportExportIcon fontSize='large'/> DECRYPT(k)
        <form className={classes.letterQuestion}>
            <TextField id="conf-1" value={cipherPlainToKeyQPlain[0]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectCipherPlainToKey? 'green' : 'black', textAlign: 'center'}}}
            />
            <TextField id="conf-2" value={cipherPlainToKeyQPlain[1]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectCipherPlainToKey? 'green' : 'black', textAlign: 'center'}}}
            />
            <TextField id="conf-3" value={cipherPlainToKeyQPlain[2]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectCipherPlainToKey? 'green' : 'black', textAlign: 'center'}}}
            />
            <TextField id="conf-4" value={cipherPlainToKeyQPlain[3]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectCipherPlainToKey? 'green' : 'black', textAlign: 'center'}}}
            />
            <TextField id="conf-5" value={cipherPlainToKeyQPlain[4]} variant="outlined" disabled
            InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectCipherPlainToKey? 'green' : 'black', textAlign: 'center'}}}
            />
        </form>
        <form className={classes.letterAnswer} autoComplete="off">
            <TextField id="cipher-plain-key" variant="outlined" multiline onChange={(e) => setAnsCipherPlainToKey(e.target.value)}/>
        </form>
        <div className={classes.yesNoButton}>
            <Button variant="contained" color="primary" onClick={checkCipherPlainToKeyAnswer} disabled={isCorrectCipherPlainToKey}>
                Check
            </Button>
            { isCorrectCipherPlainToKey ? <CheckCircleIcon style={{color:"green"}}/> : null }
            
        </div>
      </div>
    )
  }

  function qThree(){
    return(
      <div>
        <h3>Using the key you found above, what is the cipher text of "BAMBOO"?</h3>
          <form className={classes.letterQuestion}>
              <TextField id="conf-1" value={keyPlainToCipherQ[0]} variant="outlined" disabled
              InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectKeyPlainToCipher? 'green' : 'black', textAlign: 'center'}}}
              />
              <TextField id="conf-2" value={keyPlainToCipherQ[1]} variant="outlined" disabled
              InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectKeyPlainToCipher? 'green' : 'black', textAlign: 'center'}}}
              />
              <TextField id="conf-3" value={keyPlainToCipherQ[2]} variant="outlined" disabled
              InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectKeyPlainToCipher? 'green' : 'black', textAlign: 'center'}}}
              />
              <TextField id="conf-4" value={keyPlainToCipherQ[3]} variant="outlined" disabled
              InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectKeyPlainToCipher? 'green' : 'black', textAlign: 'center'}}}
              />
              <TextField id="conf-5" value={keyPlainToCipherQ[4]} variant="outlined" disabled
              InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectKeyPlainToCipher? 'green' : 'black', textAlign: 'center'}}}
              />
              <TextField id="conf-6" value={keyPlainToCipherQ[5]} variant="outlined" disabled
              InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: isCorrectKeyPlainToCipher? 'green' : 'black', textAlign: 'center'}}}
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
              onChange={(e) => setAnsKeyPlainToCipher1(e.target.value)}
              />
              <TextField id="conf-ans-2" variant="outlined"
              inputProps={{ 
                  maxLength: CHARACTER_LIMIT,
                  style: {textTransform: 'capitalize',
                          textAlign: 'center'}
              }} 
              onChange={(e) => setAnsKeyPlainToCipher2(e.target.value)}
              />
              <TextField id="conf-ans-3" variant="outlined" 
              inputProps={{ 
                  maxLength: CHARACTER_LIMIT,
                  style: {textTransform: 'capitalize',
                          textAlign: 'center'}
              }} 
              onChange={(e) => setAnsKeyPlainToCipher3(e.target.value)}
              />
              <TextField id="conf-ans-4" variant="outlined" 
              inputProps={{ 
                  maxLength: CHARACTER_LIMIT,
                  style: {textTransform: 'capitalize',
                          textAlign: 'center'}
              }} 
              onChange={(e) => setAnsKeyPlainToCipher4(e.target.value)}
              />
              <TextField id="conf-ans-5" variant="outlined" 
              inputProps={{ 
                  maxLength: CHARACTER_LIMIT,
                  style: {textTransform: 'capitalize',
                          textAlign: 'center'}
              }} 
              onChange={(e) => setAnsKeyPlainToCipher5(e.target.value)}
              />
              <TextField id="conf-ans-6" variant="outlined" 
              inputProps={{ 
                  maxLength: CHARACTER_LIMIT,
                  style: {textTransform: 'capitalize',
                          textAlign: 'center'}
              }} 
              onChange={(e) => setAnsKeyPlainToCipher6(e.target.value)}
              />
          </form>
          <div className={classes.yesNoButton}>
              <Button variant="contained" color="primary" onClick={checkKeyPlainToCipherAnswer} disabled={isCorrectKeyPlainToCipher}>
                  Check
              </Button>
              { isCorrectKeyPlainToCipher ? <CheckCircleIcon style={{color:"green"}}/> : null }
          </div>
          <br/>
          <Divider />
          <br/>
          <div className={classes.yesNoButton}>
            <Button variant="outlined" color="primary" >
                Previous Puzzle
            </Button>
            <Button variant="outlined" color="primary" disabled={!(isCorrectKeyCipherToPlain && isCorrectCipherPlainToKey && isCorrectKeyPlainToCipher)} onClick={() => props.history.push('/ptwo')}>
                Next Puzzle
            </Button> 
        </div> 
      </div>
    )
  }

  return (
    <div className={cx('container')}>
      {/*** HEAD ***/}
      {header()}
      {/*** BODY ***/}
      <div className={cx('body')}>
        {/*** LEFT PANEL: TUTORIAL ***/}
        {leftPanel()}
        {/*** RIGHT PANEL: PUZZLE ***/}
        <div className={cx('content', 'panel')}>
          <div>
            {caesarAccordionWithHintButton()}
            <br/>
            <div>
              {qOne()}
              <br/>
              <Divider />
              <br/>
              {qTwo()}
              <br/>
              <Divider />
              <br/>
              {qThree()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
