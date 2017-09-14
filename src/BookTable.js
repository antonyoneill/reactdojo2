import React from 'react';
import BookRow from './BookRow';

export default function BookTable(props) {
    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Author</th>
                <th>Title</th>
            </tr>
            </thead>
            <tbody>
            {
                props.books.length ?
                    props.books.map((book, index) => <BookRow key={index} book={book}/>)
                    :
                    (
                        <tr>
                            <td colSpan="2">No Books here!</td>
                        </tr>
                    )
            }
            </tbody>
        </table>
    );
}
//Props.book = object