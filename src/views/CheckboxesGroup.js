import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { nombres } from "../data/lenguajesInfo";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

/**
 * 
 * @returns "PL_SQL",
    "T_SQL",
    "CMASMAS",
    "PASCAL",
    "JAVASCRIPT",
    "HTML"
    
 */
export default function CheckboxesGroup({onCheck, state}) {
  const classes = useStyles();

  const handleChange = (event) => {
    onCheck(event);
  };

  const {PL_SQL, T_SQL, CMASMAS, PASCAL, JAVASCRIPT, HTML } = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Lenguaje</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={PL_SQL}
                onChange={handleChange}
                name="PL_SQL"
              />
            }
            label={nombres["PL_SQL"]}
          />
          <FormControlLabel
            control={
              <Checkbox checked={T_SQL} onChange={handleChange} name="T_SQL" />
            }
            label={nombres["T_SQL"]}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={CMASMAS}
                onChange={handleChange}
                name="CMASMAS"
              />
            }
            label={nombres["CMASMAS"]}
          />
        </FormGroup>
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Lenguaje</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={PASCAL}
                onChange={handleChange}
                name="PASCAL"
              />
            }
            label={nombres["PASCAL"]}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={JAVASCRIPT}
                onChange={handleChange}
                name="JAVASCRIPT"
              />
            }
            label={nombres["JAVASCRIPT"]}
          />
          <FormControlLabel
            control={
              <Checkbox checked={HTML} onChange={handleChange} name="HTML" />
            }
            label={nombres["HTML"]}
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}