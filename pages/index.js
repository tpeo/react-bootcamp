import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";

//import ListItem from '../components/ListItem'

export default function Home() {
    // START JAVASCRIPT HERE.
    // You can technically write Javascript anywhere inside this file, but these start and end points are done for teaching purposes. 

    // This function allows you to view your state in console
    // UseEffect is a more advanced React topic
    useEffect(() => {
        console.log('taskInputValue', taskInputValue)
        //console.log('toDoArray', toDoArray)
        //console.log('doneArray', doneArray)
    });

    // STATE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // use state when you know that variable is changed by the page or can change the page

    // taskInputValue: a string of the name of task that you want to add; setToDoArray: a function that allows you to edit the taskInputValue
    const [taskInputValue, setTaskInputValue] = useState('')

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    // FUNCTIONS ____________________________________________________________________________________________________________________________
    // deals with actions that HTML calls apon 

    // ______________________________________________________________________________________________________________________________________

    // LISTITEM COMPONENT


    // END JAVASCRIPT HERE.
    return (
        // START HTML HERE.
        // You can also encapsulate HTML inside a Javascript const/function/object and return it here was well. 
        <div className='globalContainer'>
            {/* HTML for the Header starts here */}
            <div className='headerContainer'>
                <img className='profileImg' src='/SleepingBeauty.jpg' />
                <h1 className='titleText'>React Bootcamp</h1>
                <div className="navigationContainer">
                    <a className='navigationLink' href='/'>Tasks</a>
                    <a className='navigationLink'>Weather</a>
                </div>
            </div>
            {/* HTML for Header ends here */}
            <div className='contentContainer'>
                <h2>
                    You have have UNKNOWN task(s) left to do.
                </h2>
                <p>This site was created by BLANK NAME, a TPEO Member.</p>
                <div className='inputContainer'>
                    <h3>Add a task</h3>
                    <input
                        className='inputTask'
                        value={taskInputValue}
                        onChange={(event) => setTaskInputValue(event.target.value)}
                    ></input>
                    <button onClick={() => addTask()}>Add</button>
                </div>
                <div className='toDoContainer'>
                    <h3>To Do</h3>
                </div>
                <div className='doneContainer'>
                    <h3>Done</h3>
                </div>
            </div>
            <style jsx>
                {`
                    /*
                     START CSS HERE.
                        CSS can also be written directly inside HTML elements or imported from another file,
                        but writing inside style jsx tags is the best practice. 
                    */
                    .globalContainer {
                        background-color: red;
                        align-items: flex-start;
                        display: flex;
                        flex-direction: column;
                        min-height: 100vh;
                        width: 100%;
                    }
                    /* CSS for the header starts here*/ 
                    .headerContainer {
                        background-color: grey;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        padding-right: 20px;
                        padding-left: 20px;
                        color: white;
                        width: 100%;
                        height: 150px;

                    }

                    .profileImg {
                        width: 120px;
                        height: 120px;
                        object-fit: cover;
                        border-radius: 50%;
                    }

                    .titleText {
                        padding-left: 20px;
                    }

                    .navigationContainer {
                        //background-color: yellow;
                        display: flex;
                        flex-direction: row;
                        margin-left: auto;
                    }

                    .navigationLink {
                        margin: 5px;
                    }
                    /* CSS for the Header ends here*/
                    .contentContainer {
                        background-color: purple;
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        max-width: 2000px;
                        padding: 5%;
                    }

                    .inputContainer {
                        align-self: center;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    }

                    .inputTask {
                        height: 25px;
                        width: 300px;
                        margin-left: 10px;
                        margin-right: 10px;
                    }

                    .listItem {
                        display: flex;
                        flex-direction: row;
                        height: 20px;
                        line-height: 20px;
                        list-style-type: circle;
                    }

                    .icon {
                        padding-left: 5px;
                        cursor: pointer;
                    }

                    .icon:hover {
                        opacity: 0.6;
                    }
                    /*
                     STOP CSS HERE.
                    */
                `}
            </style>
        </div>
        // STOP HTML HERE.
    )
}
