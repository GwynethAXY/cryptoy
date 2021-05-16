import React, {useState} from "react";
import ResizePanel from "react-resize-panel";
import classNames from 'classnames/bind';
import style from './TestResize.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typical from "react-typical";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import plaintextToFroCiphertext from './pictures/plaintextToFroCiphertext.png';


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

export default function POne(props) {
    const classes = useStyles();
    const [isCorrectSKC, setIsCorrectSKC] = useState(false);
    const [isCorrectPKC, setIsCorrectPKC] = useState(false);
    const [isCorrectHash, setIsCorrectHash] = useState(false);
    const [clickYes, setClickYes] = useState(false);
    const [clickNo, setClickNo] = useState(false);

    const [ansSKC, setAnsSKC] = useState('');
    const [ansPKC, setAnsPKC] = useState('');
    const [ansHash, setAnsHash] = useState('');
    const [numCorrectAns, setNumCorrectAns] = useState(0);

    const skcQuestion = "Uess a silgne key for btoh ectyniropn and dciyrteopn; also called symiremtc eyortpnicn. "
      + "Plarimriy uesd for paricvy and cfnidleatoniity.";
    const pkcQuestion = "Uess one key for eoyprnticn and antheor for dcrtiopeyn; aslo celald ameitsrmyc enyrtcpion. "
      + "Pliimarry used for aotitcuiheatnn, non-rtoiepduian, and key exhgacne.";
    const hashQuestion = "Uess a metcimhaatal trsiaortonmfan to ieevirlrsrby \"eycrpnt\" iamrtoinfon, poriidnvg a ditgial fniigprnret. "
      + "Plrraiimy used for masesge igrteitny.";

    const skcAnswer = "uses a single key for both encryption and decryption; also called symmetric encryption. "
      + "primarily used for privacy and confidentiality.";
    const pkcAnswer = "uses one key for encryption and another for decryption; also called asymmetric encryption. "
      + "primarily used for authentication, non-repudiation, and key exchange.";
    const hashAnswer = "uses a mathematical transformation to irreversibly \"encrypt\" information, providing a digital fingerprint. "
      + "primarily used for message integrity.";

    function checkSKCAnswer() {
      console.log(ansSKC)
      if(ansSKC.toLowerCase() === skcAnswer && isCorrectSKC === false
      ){
        console.log("it coreect!!")
        setIsCorrectSKC(!isCorrectSKC);
      }
    }

    function checkPKCAnswer() {
      if(ansPKC.toLowerCase() === pkcAnswer && isCorrectPKC === false
      ){
        console.log("it coreect!!")
        setIsCorrectPKC(!isCorrectPKC);
      }
    }

    function checkHashAnswer() {
      if(ansHash.toLowerCase() === hashAnswer && isCorrectHash === false
      ){
        console.log("it coreect!!")
        setIsCorrectHash(!isCorrectHash);
      }
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
              <div verticalAlign="top">
                <h1>
                  <Typical steps={['What is Cryptography?', 1000]}/>
                </h1>
                <Typography paragraph align="left">
                  The four goals of cryptography are <b>Confidentiality</b>, <b>Integrity</b>, <b>Authenticity</b> and <b>Availability</b>.
                </Typography>
                  <ul align="left">
                      <li> <b>Confidentiality</b> refers to the protection of information or resources from exposure. </li>
                      <li> <b>Integrity</b> protects the trustworthiness/correctness of an information's <u>contents</u>.</li>
                      <li> <b>Authenticity</b> protects the trustworthiness/correctness of an information's <u>origins</u>.</li>
                      <li> <b>Availability</b> refers to the ability to access or use information through accepting and responding to legitimate requests.</li>
                  </ul>

                <Typography align="left">
                    In cryptography, we start with the unencrypted data, referred to as plaintext.
                    {/* Plaintext is encrypted into ciphertext, which will in turn (usually) be decrypted back into usable plaintext.
                    The encryption and decryption is based upon the type of cryptography scheme being employed and some form of key.
                    For those who like formulas, this process is sometimes written as: */}
                </Typography>
                <Typography align="left">
                    Plaintext is encrypted into ciphertext, which will in turn (usually) be decrypted back into usable plaintext.
                </Typography>
                <Typography align="left">
                    The encryption and decryption is based upon the type of cryptography scheme being employed and some form of key.
                </Typography>
                <img src={plaintextToFroCiphertext} width="700"/>
                <Typography align="left">
                    For those who like formulas, this process is sometimes written as:
                </Typography>
                <Typography paragraph>
                    C = E<sub>k</sub>(P)
                    <br/>
                    P = D<sub>k</sub>(C)
                </Typography>
                <Typography align="left">
                    where P = plaintext, C = ciphertext, E = the encryption method, D = the decryption method, and k = the key.
                </Typography>
              </div>
            </div>
        </ResizePanel>

        {/*** RIGHT PANEL: PUZZLE ***/}
        <div className={cx('content', 'panel')}>
          <div>
        <h1> There are three types of algorithms. Scramble them to get the right answers!</h1>
        <p> Answer boxes are not case sensitive.</p>
        <Divider />
        <div>
        <h2 style={{color: isCorrectSKC ? "green": "black"}}> Secret Key Cryptography (SKC) </h2>
        </div>
        <Card className={classes.puzzleCard}>
            <CardContent>
                <Typography>
                {skcQuestion}
                </Typography>
            </CardContent>
        </Card>
        <br/>
        <form className={classes.textAnswer} noValidate autoComplete="off">
            <TextField id="skc-answer" label="Answer" variant="outlined" defaultValue={skcQuestion} multiline onChange={(e) => setAnsSKC(e.target.value)}/>
        </form>
        <Button variant="outlined" color="primary" onClick={checkSKCAnswer} disabled={isCorrectSKC}>
            Submit
        </Button>
        { isCorrectSKC ? <CheckCircleIcon style={{color:"green"}}/> : null }
        <br/>
        <br/>
        <Divider />
        <h2 style={{color: isCorrectPKC ? "green": "black"}}> Public Key Cryptography (PKC) </h2>
        <Card className={classes.puzzleCard}>
            <CardContent>
                <Typography>
                {pkcQuestion}
                </Typography>
            </CardContent>
        </Card>
        <br/>
        <form className={classes.textAnswer} noValidate autoComplete="off">
            <TextField id="pkc-answer" label="Answer" variant="outlined" defaultValue={pkcQuestion} multiline onChange={(e) => setAnsPKC(e.target.value)}/>
        </form>
        <Button variant="outlined" color="primary" onClick={checkPKCAnswer} disabled={isCorrectPKC}>
            Submit
        </Button>
        { isCorrectPKC ? <CheckCircleIcon style={{color:"green"}}/> : null }
        <br/>
        <br/>
        <Divider />
        <h2 style={{color: isCorrectHash ? "green": "black"}}> Hash Functions </h2>
        <Card className={classes.puzzleCard}>
            <CardContent>
                <Typography>
                {hashQuestion}
                </Typography>
            </CardContent>
        </Card>
        <br/>
        <form className={classes.textAnswer} noValidate autoComplete="off">
            <TextField id="hash-answer" label="Answer" variant="outlined" defaultValue={hashQuestion} multiline onChange={(e) => setAnsHash(e.target.value)}/>
        </form>
        <Button variant="outlined" color="primary" onClick={checkHashAnswer} disabled={isCorrectHash}>
            Submit
        </Button>
        { isCorrectHash ? <CheckCircleIcon style={{color:"green"}}/> : null }
        <br/>
        <br/>
        <Divider />
        <br/>
        <h3>Is scrambling/unscrambling a form of cryptography?</h3>
        <div className={classes.yesNoButton}>
            <Button variant="outlined" color="primary" onClick={(e) => setClickYes(true)} disabled={clickNo}>
                Yes
            </Button>
            <Button variant="outlined" color="primary" onClick={(e) => setClickNo(true)} disabled={clickNo}>
                No
            </Button>
            { clickYes && !clickNo ? <CancelIcon style={{color:"red"}}/> : null }
            { clickNo ? <CheckCircleIcon style={{color:"green"}}/> : null }
            <br/>
            {/* <p  width="10px"> </p> */}
            <div style={{ display: clickNo? 'flex': 'none', justifyContent:'center' }} >
            <Card className={classes.explanationCard}>
              <CardContent>
              That's right! There is no key involved in unscrambling this puzzle and does not
              follow the encryption-decryption formula, hence it is not a form of cryptography.
              </CardContent>
            </Card>
            </div>

        </div>
        <br/>
        <br/>
        <Divider />
        <br/>
        <div className={classes.yesNoButton}>
            <Button variant="outlined" color="primary" >
                Previous Puzzle
            </Button>
            <Button variant="outlined" color="primary" disabled={!(isCorrectSKC && isCorrectPKC && isCorrectHash && clickNo)} onClick={() => props.history.push('/mod')}>
                Next Puzzle
            </Button>

        </div>
        <br/>
          </div>

        </div>
    </div>
  </div>
  );
}
