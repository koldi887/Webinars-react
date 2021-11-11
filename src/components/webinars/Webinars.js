import React, { useState } from "react";
import classes from "./webinars.module.css";
import { WebinarsData } from "./WebinarsData";
import AddWebinarContainer from "./add-webinars/AddWebinarContainer";

export default function Webinars() {
  const c = classes;
  const [currentState, setCurrentState] = useState(WebinarsData);
  const [hideAddWebinar, setHideAddWebinar] = useState(false);

  return (
    <div className={c.webinarWrapper}>
      <div className={c.addButtonBlock}>
        <h3>Add new webinar:</h3>
        <i
          className={`fas fa-plus fa-2x ${c.faPlus}`}
          onClick={() => setHideAddWebinar(true)}
        />
      </div>

      {hideAddWebinar && (
        <AddWebinarContainer
          currentState={currentState}
          setCurrentState={setCurrentState}
          setHide={setHideAddWebinar}
        />
      )}

      {currentState.map((item, index) => (
        <div className={c.webinarBlock} key={index}>
          <img src={item.image} alt="webinar" />
          <div className={c.webinarInfo}>
            <div className={c.subtitle}>
              <strong>Webinar</strong>
            </div>

            <div className={c.title}>
              <strong>{item.title}</strong>
            </div>

            <div className={c.topicsList}>
              <ul className={"list"}>
                {item.subtopic.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={c.btn}>
              <button className={`buttons`}>Read more</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
