import React from "react";
import classes from "../addWebinar.module.css";

export default function SubtopicComponent(props) {
  return (
    <div className={classes.formSubtopicBlock}>
      <h3>Subtopic:</h3>
      <div className={classes.formTopicInputBlock}>
        <input
          type="text"
          name="subtopic"
          value={props.subtopic}
          onChange={(event) => props.setSubtopic(event.target.value)}
        />
        <button onClick={(event) => props.addSubtopicHandler(event)}>
          Add
        </button>
      </div>
      {Object.keys(props.errors.subtopicErr).map((key) => {
        return (
          <p className={classes.formErr} key={key}>
            {props.errors.subtopicErr[key]}
          </p>
        );
      })}

      <ul className={`list ${classes.addedTopicsList}`}>
        {props.subtopicArr.map((item, index) => (
          <li key={index}>
            {item}
            <i
              className={`fas fa-times ${classes.removeTopic}`}
              onClick={() => props.removeTopicHandler(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
