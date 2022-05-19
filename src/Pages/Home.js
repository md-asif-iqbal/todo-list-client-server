import React from 'react';
import { Link } from 'react-router-dom';
import ManageList from './ManageList';
import TodoForm from './TodoForm';

const Home = () => {
    return (
        <div>
            <h2 className='text-5xl mt-10'>What's the Plan for Today?</h2>
            <h2 className='text-3xl mt-5 mb-10'>Please go to Todo List</h2>
      <Link to='/todolist' ><button className="btn btn-primary mb-40">Click Here</button></Link>
            
        </div>
    );
};

export default Home;