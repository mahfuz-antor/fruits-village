import React from 'react';

const DeleteFruit = ({ event }) => {
    console.log(event);

    const handleDelete = (id) => {
        fetch(`https://glacial-anchorage-30312.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        // console.log('click succcess');
    }
    const tableStyle = {
        width: '200px'
    }
    return (
        <div style={{ width: '700px' }} className="container">

            {/* <h1>Name: {event.name}  Price: {event.price}</h1> */}
            <table className="table container">
                <thead>
                    <tr className="row">
                        {/* <th style={tableStyle}>#</th> */}
                        <th style={tableStyle}>Name: {event.name} ---</th>
                        <th style={tableStyle}>Price: {event.price}  -----</th>
                        <th style={tableStyle}><button className="btn btn-primary" onClick={() => handleDelete(event._id)}>Delete</button></th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default DeleteFruit;