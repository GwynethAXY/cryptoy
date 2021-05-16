import React from "react";
import Button from '@material-ui/core/Button';
import Typical from "react-typical";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import AliceBobEve from "./pictures/ABE.png";
import Divider from '@material-ui/core/Divider';

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

    const classes = useStyles();
    
    
    return (
      <div style={{marginLeft:"auto", marginRight:"auto"}}>
          <h1 style={{ backgroundColor: '#33539c', padding: "12px", margin: "0px", color: "white"}}> Cryptoy </h1>

          <h1> <Typical steps={['Symmetric Key Cryptography', 1000]}/> </h1>
          
          <Card className={classes.hintCard}> 
            <CardContent>
                <p style={{textAlign: "left"}}> 
                    Cryptography is about communicating securely over insecure communication channels. 
                    As mentioned, there are 3 main types of cryptography:
                    <ul>
                        <li>Symmetric Key Cryptography (SKC)</li>
                        <li>Public Key Cryptography (PKC)</li>
                        <li>Hash Functions</li>
                    </ul>
                    In this section, we focus on Symmetric Key Cryptography.
                </p>
                <Divider/>
                <p style={{textAlign: "left"}}> 
                    Symmetric Key Cryptography uses the same cryptographic key for both encryption of 
                    plaintext and decryption of ciphertext, ie both endpoints of communication share the same key.
                    <br/>
                    We introduce three classical figures in cryptography, Alice, Bob and Eve. Alice and Bob are the two endpoints of communication. 
                    We can assume Alice to be the sender and Bob to be the receiver. Eve is the malicious attacker who is trying to interfere with
                    Alice and Bob's communication.
                    <br/>
                </p>
                <img src={AliceBobEve} width="650px" ></img>
                <p style={{textAlign: "left"}}> 
                    Alice can encrypt her messages under key <i>K</i> shared with Bob, and then send the ciphertext to Bob; 
                    Bob will also use <i>K</i> to decrypt. So long as eavesdroppers like Eve do not know <i>K</i>, 
                    they will not be able to learn anything about the messages Alice is sending.
                    <br/> 
                    In symmetric encryption schemes, Alice and Bob share a random key and use this single key to repeatedly exchange information
                    securely despite the existence of an eavesdropping adversary, Eve. <b>Block Ciphers</b> are a fundamental building block in 
                    implementing a symmetric encryption scheme.
                    <br/>
                    A symmetric encryption algorithm that builds upon block ciphers aim to achieve two goals:
                    <ol>
                        <li> Encrypt arbitrarily long messages using a fixed-length block cipher.</li>
                        <li> Make sure that if the same message is sent twice, the ciphertext in the two transmissions is not the same.</li>
                    </ol>
                    <br/> 
                    There are 4 ways we can build an encryption algorithm, using a block cipher.
                    <ol>
                        <li> Electronic Code Block (ECB) Mode</li>
                        <li> Cipher Block Chaining (CBC) Mode</li>
                        <li> Output Feedback (OFB) Mode</li>
                        <li> Counter Mode</li>
                    </ol>
                </p>
            </CardContent>
          </Card>
          
          <p> Click "Next Puzzle" to learn more about the different ways to build an encryption algorithm with block ciphers.</p>

          <div>
                <Button variant="outlined" color="primary" onClick={() => props.history.push('/ptwo')} style={{marginRight: '1em'}} >
                    Previous Puzzle
                </Button>
                <Button variant="outlined" color="primary"  onClick={() => props.history.push('/pthree')}>
                    Next Puzzle
                </Button>
          </div>
          <br/>
      </div>
    
  );

  
}
