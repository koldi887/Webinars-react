import React from "react";
import classes from "../addWebinar.module.css";

export default function TitleComponent(props) {
  return (
    <div className={classes.formTitleBlock}>
      <h3>Title:</h3>
      <textarea
        name="title"
        value={props.title}
        maxLength="120"
        className={classes.addWebinarTitle}
        onChange={(event) => props.characterCounter(event)}
      />

      {Object.keys(props.errors.titleErr).map((key) => {
        return (
          <p className={classes.formErr} key={key}>
            {props.errors.titleErr[key]}
          </p>
        );
      })}
      <p>Max characters: {props.characterCount}</p>
    </div>
  );
}
