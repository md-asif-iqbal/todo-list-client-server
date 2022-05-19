import React, { useState } from 'react';
import { useQuery } from 'react-query';


import ListDelete from './ListDelete';
import ListRow from './ListRow';
import Loading from './Loading';

const ManageList = () => {
    const [deletingTask, setDeletingTask] = useState(null);

    const { data, isLoading,refetch } = useQuery('data', () => fetch('https://blooming-sea-36945.herokuapp.com/todolist')
    .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            {/* <h2 className="text-2xl">List: {todoList.length}</h2> */}
            <div className="overflow-x-auto">
                <table className="table w-4/5 mx-auto mb-5">
                    <thead>
                        <tr>
                            <th></th>
                            
                            <th>Task</th>
                            <th>Discription</th>
                            <th>Complete</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                             data.map((datas, index) => <ListRow
                             key={datas._id}
                             datas={datas}
                             index={index}
                             refetch={refetch}
                             setDeletingTask={setDeletingTask}
                         ></ListRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingTask && <ListDelete
                deletingTask={deletingTask}
                refetch={refetch}
                setDeletingTask={setDeletingTask}
            ></ListDelete>}
        </div>
    );
};

export default ManageList;
