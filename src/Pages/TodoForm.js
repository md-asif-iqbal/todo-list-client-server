import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const TodoForm = () => {
    const { register, formState: { errors }, handleSubmit ,reset } = useForm();

    const onSubmit = data => {
        const url =`https://blooming-sea-36945.herokuapp.com/todolist`;
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(res =>{
            toast.success('Congress!!! your Task added');
            console.log(res);
           reset();
            
        })
    }

    return (

       <div>
            <div className=' flex h-screen justify-center items-center'>
         <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">

                <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                            <span className="label-text">Task Name</span>
                            </label>
                            <input
                            type="text"
                            placeholder="Your Task Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("task")}/>

                        </div>
                            <div className="form-control w-full max-w-xs">
                            <label className="label">
                            <span className="label-text">Description</span>
                            </label>
                            <input
                            type="text"
                            placeholder="Description"
                            className="input input-lg input-bordered w-full max-w-xs"
                            {...register("description")}
                            />

                        </div>

                        <input className='btn w-full max-w-xs mt-2 text-white' type="submit" value="Add Task" />
                </form>
            </div>
        </div>
     
    </div>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />
       </div>
    
    );
};

export default TodoForm;