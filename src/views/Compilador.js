import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Card, Grid } from "@material-ui/core";
import {evaluarTokens} from "../utils/functions"
import Tabla from "./Tabla"
import { tokensRegex } from "../regex/regex";
import { reservadasArray } from "../data/palabrasReservadas";
import CheckboxesGroup from "./CheckboxesGroup"

const useStyles = makeStyles((theme) => ({
  caja: {
    width: "-webkit-fill-available",
    margin: 24,

  },
  root: {
    width: "100%",
    height: "100%",
  },
  cardText: {
    maxHeight: "100%",
    maxWidth: "100%",
    margin: 8,
    overflow: "hidden"
  },
}));

export default function Compilador() {
  const classes = useStyles();
  const [tokens_,setTokens] = useState([]);
  const [check,setCheck] = useState("JAVASCRIPT");
  const [valTxArea,setValTextArea] = useState("");
  const [state, setState] = React.useState({
    PL_SQL: false,
    T_SQL: false,
    CMASMAS: false,
    PASCAL: false,
    JAVASCRIPT: true,
    HTML: false,
  });

  const onChange = (e) => {
    setValTextArea(e.target.value)
  }

  useEffect((e) =>{
    setTokens(evaluarTokens(valTxArea,tokensRegex[check],reservadasArray[check], check));
  },[check,valTxArea]);

  const onCheck = (event) =>{
    setCheck(event.target.name)
    setState({
      ...{
        PL_SQL: false,
        T_SQL: false,
        CMASMAS: false,
        PASCAL: false,
        JAVASCRIPT: false,
        HTML: false,
      },
      [event.target.name]: event.target.checked,
    });
  }


  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <Card className={classes.cardText}>
          <TextField
            id="standard-textarea"
            label="Codigo Fuente"
            placeholder="Ingrese su codigo fuente."
            multiline
            rowsMax={30}
            rows={30}
            variant="outlined"
            onChange={(e) => {onChange(e)}}
            className={classes.caja}
          />
        </Card>
        <CheckboxesGroup state={state} onCheck={onCheck}/>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card className={classes.cardText}>
          <TextField
            id="standard-textarea"
            label="Consola"
            disabled
            multiline
            rowsMax={30}
            rows={30}
            variant="outlined"
            onChange={(e) => {}}
            className={classes.caja}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={4} style={{overflow: "hidden"}}>
        <Card className={classes.cardText}>
          <Tabla source={tokens_} style={{height: "100%"}}/>
        </Card>
      </Grid>
    </Grid>
  );
}