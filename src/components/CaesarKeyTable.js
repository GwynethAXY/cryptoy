import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  root: {
    width: 1250,
    backgroundColor: "#cdcdcd",
    margin: "auto"
  },
  input: {
    width: 42,
  },
  table: {
    margin: "auto",
    maxWidth: 650,
  },
});


function createData(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z) {
  return { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z };
}

var alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P','Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


export default function InputSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 25) {
      setValue(25);
    }
  };

  var key = value;
  const rows = [
    createData(alphabets[(0+key)%26], alphabets[(1+key)%26], alphabets[(2+key)%26], alphabets[(3+key)%26], alphabets[(4+key)%26], alphabets[(5+key)%26], alphabets[(6+key)%26],
    alphabets[(7+key)%26], alphabets[(8+key)%26], alphabets[(9+key)%26], alphabets[(10+key)%26], alphabets[(11+key)%26], alphabets[(12+key)%26], alphabets[(13+key)%26],
    alphabets[(14+key)%26], alphabets[(15+key)%26], alphabets[(16+key)%26], alphabets[(17+key)%26], alphabets[(18+key)%26], alphabets[(19+key)%26], alphabets[(20+key)%26], 
    alphabets[(21+key)%26], alphabets[(22+key)%26], alphabets[(23+key)%26], alphabets[(24+key)%26], alphabets[(25+key)%26])
  ];

  return (
    <div className={classes.root}>
      <Typography id="input-slider" gutterBottom margin={2}>
        Key
      </Typography>
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item xs={10}>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            max={25}
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 25,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="right">Plaintext</TableCell>
            <TableCell align="right">A</TableCell>
            <TableCell align="right">B</TableCell>
            <TableCell align="right">C</TableCell>
            <TableCell align="right">D</TableCell>
            <TableCell align="right">E</TableCell>
            <TableCell align="right">F</TableCell>
            <TableCell align="right">G</TableCell>
            <TableCell align="right">H</TableCell>
            <TableCell align="right">I</TableCell>
            <TableCell align="right">J</TableCell>
            <TableCell align="right">K</TableCell>
            <TableCell align="right">L</TableCell>
            <TableCell align="right">M</TableCell>
            <TableCell align="right">N</TableCell>
            <TableCell align="right">O</TableCell>
            <TableCell align="right">P</TableCell>
            <TableCell align="right">Q</TableCell>
            <TableCell align="right">R</TableCell>
            <TableCell align="right">S</TableCell>
            <TableCell align="right">T</TableCell>
            <TableCell align="right">U</TableCell>
            <TableCell align="right">V</TableCell>
            <TableCell align="right">W</TableCell>
            <TableCell align="right">X</TableCell>
            <TableCell align="right">Y</TableCell>
            <TableCell align="right">Z</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="right">Ciphertext</TableCell>
              <TableCell align="right">{row.a}</TableCell>
              <TableCell align="right">{row.b}</TableCell>
              <TableCell align="right">{row.c}</TableCell>
              <TableCell align="right">{row.d}</TableCell>
              <TableCell align="right">{row.e}</TableCell>
              <TableCell align="right">{row.f}</TableCell>
              <TableCell align="right">{row.g}</TableCell>
              <TableCell align="right">{row.h}</TableCell>
              <TableCell align="right">{row.i}</TableCell>
              <TableCell align="right">{row.j}</TableCell>
              <TableCell align="right">{row.k}</TableCell>
              <TableCell align="right">{row.l}</TableCell>
              <TableCell align="right">{row.m}</TableCell>
              <TableCell align="right">{row.n}</TableCell>
              <TableCell align="right">{row.o}</TableCell>
              <TableCell align="right">{row.p}</TableCell>
              <TableCell align="right">{row.q}</TableCell>
              <TableCell align="right">{row.r}</TableCell>
              <TableCell align="right">{row.s}</TableCell>
              <TableCell align="right">{row.t}</TableCell>
              <TableCell align="right">{row.u}</TableCell>
              <TableCell align="right">{row.v}</TableCell>
              <TableCell align="right">{row.w}</TableCell>
              <TableCell align="right">{row.x}</TableCell>
              <TableCell align="right">{row.y}</TableCell>
              <TableCell align="right">{row.z}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}