import React from 'react'
import { List } from 'rsuite'


const TaskView = ({task}) =>{
    return(
        <List.Item>
            {task.title}
        </List.Item>)
}

export default TaskView;