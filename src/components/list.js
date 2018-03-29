import React from 'react';

export default props => {

    const listElements = props.list.map((item, index) => {
        return(
            <li key={index} className="collection-item row">
                <div className="col s8">
                    {item.title}
                </div>
                <div className="col s4 right-align">
                    <button onClick={ props.delete.bind(this, index) } className="btn btn-sm red darken-2">Delete</button>
                </div>
            </li>
        )
    });
    return(
        <ul className="collection">
            {listElements}
        </ul>
    )
}