import  React, { useState, componentDidMount, useEffect } from 'react';
// import members from "./communities/venture_capitalists";
import "./index.css";
import "./checkboxes.css"
import Typography from '@material-ui/core/typography';
import Slider from '@material-ui/core/slider';
import Button from '@material-ui/core/Button';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

// const getFormattedhandle = (handle) => `$${handle.toFixed(2)}`;

export default function CheckBoxes() {
  const [checkedState, setCheckedState] = useState(
    new Array(0).fill(true)
    // new Array(members.length).fill(true)
  );
  const [members, setMembers] = useState([]);
  const { id } = useParams();
//   const [lis, setLis] = useState([]);
  
  useEffect(()=>{  
      console.log(require(`./communities/${id}`));
      setMembers(require(`./communities/${id}`).default);
    //   setCheckedState(new Array(members.length).fill(true))
      console.log(members);
  }, []);

  useEffect(()=>{  
    setCheckedState(new Array(members.length).fill(true))
    console.log(members);
}, [members]);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    // console.log(checkedState)
    // const totalhandle = updatedCheckedState.reduce(
    //   (sum, currentState, index) => {
    //     if (currentState === true) {
    //       return sum + members[index].handle;
    //     }
    //     return sum;
    //   },
    //   0
    // );

    // setTotal(totalhandle);
  };

  const handleSliderChange = (event, value) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index >= value ? false : true
    );

    setCheckedState(updatedCheckedState);
    // console.log(checkedState)
    // const totalhandle = updatedCheckedState.reduce(
    //   (sum, currentState, index) => {
    //     if (currentState === true) {
    //       return sum + members[index].handle;
    //     }
    //     return sum;
    //   },
    //   0
    // );

    // setTotal(totalhandle);
  };

//   const handleSliderChange = (event, value) => {
//     const updatedCheckedState = checkedState.map((item, index) => {
//       console.log(value);
//       console.log(index);
//       console.log(checkedState);
//       index === value ? !item : item
//     //   if(index > members.length - value) {
//     //       item : false;
//     //   }
//     //   else {
//     //       item : true;
//     //   }
//     }
//     );
//     setCheckedState(updatedCheckedState);
//   } 

  return (
    <div className="CheckBoxes">
      <div className="slider">
      <h1 className="banner-follow">Select the members you would like to follow</h1>
      {/* <Typography className="typography" id="discrete-slider-always" paragraph>
        Number of members you would like to follow
      </Typography> */}
      <h2 className="lower-banner">
        Flashfollow will follow all the members of the community selected. Be sure you want to do this.
      </h2>
        <Slider
        defaultValue={80}
        // getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={1}
        valueLabelDisplay="on"
        max={members.length}
        onChange={handleSliderChange}
        />
        <div className="buttonWiderContainer">
            <div className="buttonContainer">
                <Button variant="contained" href="/">go back</Button>
            </div>
            <div className="buttonContainer">
                <Button style={{
                    backgroundColor: "#c00",
                }} variant="contained" color="Secondary">flashfollow!</Button>
            </div>
        </div>
        </div>
      <ul className="members-list">
        
        { members.length > 0 && members.map(({ name, handle }, index) => {
          return (
            <li key={index}>
              <div className="members-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                <div className="right-section"><a href={`https://twitter.com/${handle}`}>@{handle}</a></div>
              </div>
            </li>
          );
        })}
        
        {/* <li>
          <div className="members-list-item">
            <div className="left-section">Total:</div>
            <div className="right-section">{total}</div>
          </div>
        </li> */}
      </ul>
    </div>
  );
}
