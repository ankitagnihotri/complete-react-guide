/*
 * @Author: Ankit Agnihotri 
 * @Date: 2019-08-08 12:43:26 
 * @Last Modified by:   Ankit Agnihotri 
 * @Last Modified time: 2019-08-08 12:43:26 
 */

import React from "react";
import Aux from "./../../hoc/Aux";
import classes from "./Cockpit.css";

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = classes.Button;
  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(" ");
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(" ")}>working.....</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={props.login}>Log In </button>
    </Aux>
  );
};

export default cockpit;
