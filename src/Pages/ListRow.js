import React, { useState } from 'react';
import Loading from './Loading';

const ListRow = ({ datas, index, refetch, setDeletingTask }) => {
    const { task, description , _id} = datas;
    const [strick , setStrick] =useState();

    const completeData=(id)=>{
    setStrick(id);
    }
    return (
      
             <tr>
                <th>{index + 1}</th>
                { strick?<td className='line-through'>{task}</td>:<td>{task}</td> }
                <td>{description}</td>
                
                <td> <label onClick={() => completeData(_id)} htmlFor="delete-confirm-modal" className="btn btn-xs">Done</label></td>
            <td><label onClick={() => setDeletingTask(datas)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
        </td>
    </tr>
       
    );
};

export default ListRow;