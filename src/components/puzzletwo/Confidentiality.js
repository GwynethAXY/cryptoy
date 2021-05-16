import React, {useState} from "react";
import ResizePanel from "react-resize-panel";
import classNames from 'classnames/bind';
import style from '../TestResize.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CaesarKeyTable from "../CaesarKeyTable"

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
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

export default function PTwo() {
    const classes = useStyles();
    const CHARACTER_LIMIT = 1;
    const QUESTION_FONTSIZE = 28;

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

    function checkConfidentialityAnswer() {
        if(ansConf1.toUpperCase() === "C" && ansConf2.toUpperCase() === "O" && ansConf3.toUpperCase() === "N" && 
          ansConf4.toUpperCase() === "F" && ansConf5.toUpperCase() === "I" && ansConf6.toUpperCase() === "D" && 
          ansConf7.toUpperCase() === "E" && ansConf8.toUpperCase() === "N" && ansConf9.toUpperCase() === "T" && 
          ansConf10.toUpperCase() === "I" && ansConf11.toUpperCase() === "A" && ansConf12.toUpperCase() === "L" && 
          ansConf13.toUpperCase() === "I" && ansConf14.toUpperCase() === "T" && ansConf15.toUpperCase() === "Y" 
          && isCorrectConfidentiality === false
        ){
          setIsCorrectConfidentiality(!isCorrectConfidentiality)
        //   addNumCorrectAns();
          console.log("it coreect!!")
        }
        // checkCanProceedNextQuestion();
      }

    return( 
        <div>
            <div>
                { isCorrectConfidentiality ? <DoneOutlineRoundedIcon /> : null }
            </div>
            <div>
                <form className={classes.letterQuestion}>
                    <TextField id="conf-1" value={encryptedConfidentiality[0]} variant="outlined" disabled
                    InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: 'black', textAlign: 'center'}}}
                    />
                    <TextField id="conf-2" value={encryptedConfidentiality[1]} variant="outlined" disabled
                    InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: 'black', textAlign: 'center'}}}
                    />
                    <TextField id="conf-3" value={encryptedConfidentiality[2]} variant="outlined" disabled
                    InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: 'black', textAlign: 'center'}}}
                    />
                    <TextField id="conf-4" value={encryptedConfidentiality[3]} variant="outlined" disabled
                    InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: 'black', textAlign: 'center'}}}
                    />
                    <TextField id="conf-5" value={encryptedConfidentiality[4]} variant="outlined" disabled
                    InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: 'black', textAlign: 'center'}}}
                    />
                    <TextField id="conf-6" value={encryptedConfidentiality[5]} variant="outlined" disabled
                    InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: 'black', textAlign: 'center'}}}
                    />
                    <TextField id="conf-7" value={encryptedConfidentiality[6]} variant="outlined" disabled
                    InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: 'black', textAlign: 'center'}}}
                    />
                    <TextField id="conf-8" value={encryptedConfidentiality[7]} variant="outlined" disabled
                    InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: 'black', textAlign: 'center'}}}
                    />
                    <TextField id="conf-9" value={encryptedConfidentiality[8]} variant="outlined" disabled
                    InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: 'black', textAlign: 'center'}}}
                    />
                    <TextField id="conf-10" value={encryptedConfidentiality[9]} variant="outlined" disabled
                    InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: 'black', textAlign: 'center'}}}
                    />
                    <TextField id="conf-11" value={encryptedConfidentiality[10]} variant="outlined" disabled
                    InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: 'black', textAlign: 'center'}}}
                    />
                    <TextField id="conf-12" value={encryptedConfidentiality[11]} variant="outlined" disabled
                    InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: 'black', textAlign: 'center'}}}
                    />
                    <TextField id="conf-13" value={encryptedConfidentiality[12]} variant="outlined" disabled
                    InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: 'black', textAlign: 'center'}}}
                    />
                    <TextField id="conf-14" value={encryptedConfidentiality[13]} variant="outlined" disabled
                    InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: 'black', textAlign: 'center'}}}
                    />
                    <TextField id="conf-15" value={encryptedConfidentiality[14]} variant="outlined" disabled
                    InputProps={{style: {fontSize: QUESTION_FONTSIZE, color: 'black', textAlign: 'center'}}}
                    />
                    
                </form>
                <form className={classes.letterAnswer}>
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

                <CaesarKeyTable/>
                <div className={classes.yesNoButton}>
                <Button variant="outlined" color="primary" >
                    Hint
                </Button>
                <Button variant="contained" color="primary" onClick={checkConfidentialityAnswer} >
                    Check
                </Button>
                </div> 
            </div>
            </div>
            );
            }