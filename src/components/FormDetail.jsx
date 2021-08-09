import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button";
import "./FormDetail.css";
import axios from "axios";
export default function FormDetail() {
  const [checked, setChecked] = useState({
    travelling: false,
    music: false,
    playing: false,
    reading: false,
  });

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    hobbies: "",
  });

  const [error, setError] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    data.hobbies = Object.keys(checked)
      .filter((key) => checked[key])
      .join(", ");
    try {
      const submit = await axios.post(`http://localhost:5000/user`, data);
      if (submit) {
        setError("");
        setMessage("SUBMITTED");
      }
    } catch (e) {
      if (e.response.status === 400) {
        setError(e.response.data);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-group">
        <TextField
          value={data.name}
          id="standard-basic"
          label="Name"
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Email"
          type="email"
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Number"
          type="numeric"
          onChange={(e) => {
            setData({ ...data, phone: e.target.value });
          }}
        />

        <FormControl
          style={{ marginTop: "15px" }}
          className="forgenders"
          component="fieldset"
        >
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            name="gender"
            aria-label="gender"
            style={{ display: "initial" }}
            onChange={(e) => {
              setData({ ...data, gender: e.target.value });
            }}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <label>Hobbies</label>
        <div className="hobbiesA">
          <Checkbox
            checked={checked.reading}
            onChange={(event) => {
              setChecked({ ...checked, reading: event.target.checked });
            }}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <label>Reading</label>
          <Checkbox
            checked={checked.playing}
            onChange={(event) => {
              setChecked({ ...checked, playing: event.target.checked });
            }}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <label>Playing Football</label>
        </div>
        <div className="hobbiesB">
          <Checkbox
            checked={checked.travelling}
            onChange={(event) => {
              setChecked({ ...checked, travelling: event.target.checked });
            }}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <label>Travelling</label>

          <Checkbox
            checked={checked.music}
            onChange={(event) => {
              setChecked({ ...checked, music: event.target.checked });
            }}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <label>Listening Music</label>
        </div>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="button-submit"
        >
          Submit
        </Button>
      </form>
      <div className="error">
        {error ? (
          error.map((val) => (
            <p style={{ color: "red", fontsize: "1.8rem" }}>Error: {val}</p>
          ))
        ) : (
          <p style={{ color: "green", fontsize: "1.8rem" }}>{message}</p>
        )}
      </div>
    </>
  );
}
