import React from "react";
import classes from "./addWebinar.module.css";
import SubtopicComponent from "./add-webinars-components/SubtopicComponent";
import TitleComponent from "./add-webinars-components/TitleComponent";
import ImageComponent from "./add-webinars-components/ImageComponent";

export default function AddWebinar(props) {
  return (
    <>
      <form
        className={classes.addWebinarForm}
        onSubmit={(event) => props.submitHandler(event)}
      >
        <i
          className={`fas fa-times fa-2x ${classes.closeFormIcon}`}
          onClick={() => props.setAddHideWebinar(false)}
        />

        <h2 className={classes.formTitle}>Add new Webinar</h2>

        <TitleComponent
          title={props.title}
          characterCounter={props.characterCounter}
          errors={props.errors}
          characterCount={props.characterCount}
        />

        <SubtopicComponent
          subtopic={props.subtopic}
          addSubtopicHandler={props.addSubtopicHandler}
          removeTopicHandler={props.removeTopicHandler}
          setSubtopic={props.setSubtopic}
          errors={props.errors}
          subtopicErr={props.subtopicErr}
          subtopicArr={props.subtopicArr}
        />

        <ImageComponent
          image={props.image}
          setImage={props.setImage}
          errors={props.errors}
        />

        <div className={classes.formSubmitBlock}>
          <input type="submit" value="Submit" className={`buttons`} />
          <h4 className={classes.formSuccess}>{props.errors.formSuccess}</h4>
        </div>
      </form>
    </>
  );
}
