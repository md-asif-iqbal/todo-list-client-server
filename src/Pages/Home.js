import React from 'react';
import TodoForm from './TodoForm';

const Home = () => {
    return (
        <div>
            <h2 className='text-3xl mt-3'>What's the Plan for Today?</h2>
            <TodoForm></TodoForm>
        </div>
    );
};

export default Home;