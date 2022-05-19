import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const ListDelete = ({deletingTask , refetch , setDeletingTask}) => {
    const {task, _id} = deletingTask;
    console.log(_id);
    const handleDelete = (_id) => {
        fetch(`https://blooming-sea-36945.herokuapp.com/todolist/${_id}`, {
            method: 'DELETE',
            
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                     toast.success(`Task: ${task} is deleted.`)
                    setDeletingTask(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete  {task}!</h3>
                    <p className="py-4">You've been selected to Delete this task</p>
                    <div className="modal-action">
                    <button onClick={() => handleDelete(_id)} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div >
    );
};


export default ListDelete;