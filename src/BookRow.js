import React from 'react';

export default function BookRow(props) {

    return (
        <tr>
            <td>
                {props.book.author}
            </td>
            <td>
                <a href="#">{props.book.title}</a>
            </td>
        </tr>
    )

}
//Props.book = object