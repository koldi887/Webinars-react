import React, {useState} from 'react';
import AddWebinar from "./AddWebinar";


export default function AddWebinarContainer(props) {

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [subtopic, setSubtopic] = useState('')
    const [subtopicArr, setSubtopicArr] = useState([])
    const [characterCount, setCharacterCount] = useState(120)

    const [errors,setErrors] = useState({
        titleErr: {},
        subtopicErr: {},
        imageErr: {},
        formSuccess: '',
    })


    const submitHandler = (e) => {
        e.preventDefault()
        const isValid = formValidation()

        if (isValid) {
            props.setCurrentState([...props.currentState, {
                subtitle: 'Webinar',
                title: title,
                subtopic: subtopicArr,
                image: image,
            }])
            setErrors({
                titleErr: {},
                subtopicErr: {},
                imageErr: {},
                formSuccess: 'Webinar added successfully',
            })
            setCharacterCount(120)
            setTitle('')
            setSubtopicArr([])
            setImage('')
        }
    }

    const formValidation = () => {
        const newErrorsState = {...errors}
        let isValid = true;

        if (title === '') {
            newErrorsState.titleErr.titleEmpty = 'Field is not filled'
            isValid = false
        }
        if (subtopicArr.length === 0) {
            newErrorsState.subtopicErr.topicArrayEmpty = 'No topics added'
            isValid = false
        }

        if (image === '') {
            newErrorsState.imageErr.imageEmpty = 'Field is not filled'
            isValid = false
        }
        setErrors({...newErrorsState, formSuccess: ''})
        return isValid
    }

    const addSubtopicHandler = (e) => {
        e.preventDefault()
        if (subtopic !== '') {
            setSubtopicArr([...subtopicArr, subtopic])
            setSubtopic('')
        }
    }

    const removeTopicHandler = (elem) => {
        const newArr = subtopicArr.filter((item, index) => index !== elem)
        setSubtopicArr(newArr)
    }

    const characterCounterHandler = (e) => {
        setTitle(e.target.value)
        setCharacterCount(120 - e.target.value.length)
    }


    return (
        <>
            <AddWebinar
                setAddHideWebinar={props.setHide}
                title={title}
                subtopic={subtopic}
                setSubtopic={setSubtopic}
                subtopicArr={subtopicArr}
                image={image}
                setImage={setImage}
                characterCount={characterCount}
                submitHandler={submitHandler}
                characterCounter={characterCounterHandler}
                addSubtopicHandler={addSubtopicHandler}
                removeTopicHandler={removeTopicHandler}
                errors={errors}
            />
        </>
    );
}

