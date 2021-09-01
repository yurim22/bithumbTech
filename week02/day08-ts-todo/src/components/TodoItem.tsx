import React from 'react';

interface IList {
    idx: number,
    todo: string,
    isDelete: boolean,
    onDelete: Function
}

function TodoItem(props: IList) {
    const mk = {fontSize: '16px', color: 'hotpink'}
    const handleDelete = () => {
        props.onDelete(props.idx)
    }

    return(
        <div>
            TodoItem.tsx document 9:07 <p></p>
            <button style={mk} onClick={handleDelete}>delete</button>
        </div>
    )
}

export default TodoItem;