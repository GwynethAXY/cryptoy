import React from "react";
import Button from '@material-ui/core/Button';
import Typical from "react-typical";
import { makeStyles } from '@material-ui/core/styles';

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
    }
}));

export default function Home(props) {

    const classes = useStyles();

    return (
      <div className={classes.content}>
          <h1 style={{ backgroundColor: '#33539c', padding: "12px", margin: "0px", color: "white"}}> Cryptoy </h1>
          <div>
          <h1> 
              <Typical steps={['Welcome to Cryptoy!', 1000]}/>
          </h1>
          <p><b>Click on "Start Learning" to begin your cryptography learning journey. Click on "Infinity Mode" to test your cryptographic prowess! </b> </p>
          <div className={classes.yesNoButton}>
            <Button variant="outlined" color="primary" onClick={() => props.history.push('/pone')}> Start Learning! </Button>
            <Button variant="outlined" color="primary" onClick={() => props.history.push('/infinity')}> Infinity Mode </Button>
          </div>
          </div>
      </div>
    
  );
}
