import React from "react";
import classes from "../addWebinar.module.css";

export default function ImageComponent(props) {
  return (
    <div className={classes.formImageBlock}>
      <h3>Image URL:</h3>
      <input
        type="text"
        name="image"
        value={props.image}
        onChange={(event) => props.setImage(event.target.value)}
      />
      {Object.keys(props.errors.imageErr).map((key) => {
        return (
          <p className={classes.formErr} key={key}>
            {props.errors.imageErr[key]}
          </p>
        );
      })}
    </div>
  );
}
