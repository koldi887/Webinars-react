import React from 'react';
import classes from './addWebinar.module.css'

export default function AddWebinar(props) {
    const c = classes

    return (
        <>
            <form className={c.addFormWrapper} onSubmit={(event) => props.submitHandler(event)}>
                <i className={`fas fa-times fa-2x ${c.formClose}`} onClick={() => props.setAddHideWebinar(false)}/>
                <h2>Add new Webinar</h2>

                <div className={c.formTitleBlock}>
                    <h3>Title:</h3>
                    <textarea name="title"
                              value={props.title}
                              maxLength='120'
                              onChange={(event => props.characterCounter(event))}/>

                    {Object.keys(props.errors.titleErr).map((key) => {
                        return <p className={c.formErr} key={key}>{props.errors.titleErr[key]}</p>
                    })}
                    <p>Max characters: {props.characterCount}</p>

                </div>

                <div className={c.formSubtopicBlock}>
                    <h3>Subtopic:</h3>
                    <div className={c.formTopicInputBlock}>
                        <input
                            type="text"
                            name="subtopic"
                            value={props.subtopic}
                            onChange={(event => props.setSubtopic(event.target.value))}/>
                        <button onClick={event => props.addSubtopicHandler(event)}>Add</button>
                    </div>
                    {Object.keys(props.errors.subtopicErr).map((key) => {
                        return <p className={c.formErr} key={key}>{props.errors.subtopicErr[key]}</p>
                    })}


                    <ul className={`list ${c.formTopicList}`}>
                        {props.subtopicArr.map((item, index) => (
                            <li key={index}>
                                {item}
                                <i className={`fas fa-times ${c.removeTopic}`}
                                   onClick={() => props.removeTopicHandler(index)}/>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={c.formImageBlock}>
                    <h3>Image URL:</h3>
                    <input type="text"
                           name="image"
                           value={props.image}
                           onChange={(event => props.setImage(event.target.value))}/>
                    {Object.keys(props.errors.imageErr).map((key) => {
                        return <p className={c.formErr} key={key}>{props.errors.imageErr[key]}</p>
                    })}
                </div>

                <div className={c.formSubmitBlock}>
                    <input type="submit" value="Submit" className={`buttons`}/>
                    <h4 className={c.formSuccess}>{props.errors.formSuccess}</h4>
                </div>
            </form>
        </>
    );
}

