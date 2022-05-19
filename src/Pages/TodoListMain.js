import React from 'react';
import ManageList from './ManageList';
import TodoForm from './TodoForm';

const TodoListMain = () => {
    return (
        <div>
            <h2 className='text-3xl mt-3'>What's the Plan for Today?</h2>
            <TodoForm></TodoForm>
            <ManageList></ManageList>
        </div>
    );
};

export default TodoListMain;