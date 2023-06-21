import React from "react";
import ProgressBox from "../ProgressBox/ProgressBox";
import './ProgressRow.css';
import TaskBox from "../TaskBox/TaskBox";

const ProgressRow = ({taskList}) => {
    return (
        <div className="progress-row">
            <ProgressBox
                title="TO DO"
                tasks={taskList}
            />
            <ProgressBox title="READY FOR DEV" tasks={[]}/>
            <ProgressBox title="IN PROGRESS" tasks={[]}/>
            <ProgressBox title="DONE" tasks={[]}/>
        </div>
    );
};

export default ProgressRow;
