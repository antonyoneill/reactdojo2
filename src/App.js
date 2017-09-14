import React, {Component} from 'react';
import faker from 'faker';
import AddForm from './AddForm';
import BookTable from './BookTable';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            books: JSON.parse(localStorage.getItem('books') || '[]'),
            adding: false
        };

        this.fakeTitles = [];
        for (let i = 0; i < 100; i++) {
            this.fakeTitles.push(faker.lorem.sentence());
        }
    }

    addBook(book) {
        //Persist the book


        let existingBooks = localStorage.getItem('books');
        if (existingBooks === null) {
            existingBooks = [];
        } else {
            existingBooks = JSON.parse(existingBooks);
        }
        existingBooks.push(book);
        localStorage.setItem('books', JSON.stringify(existingBooks));

        //Return to main page
        this.setState({
            adding: false,
            books: existingBooks
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-6">
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <a className="navbar-brand" href="#">
                                        📚
                                    </a>
                                    {
                                        this.state.adding ? null :
                                            <ul className="nav navbar-nav navbar-righst">
                                                <li><a onClick={() => this.setState({adding: true})}>Add book</a></li>
                                            </ul>
                                    }
                                </div>
                            </div>
                        </nav>
                        {
                            this.state.adding ?
                                <AddForm fakeTitles={this.fakeTitles} onAddBook={(book) => this.addBook(book)}/>
                                :
                                <div>
                                    <h2>Available Books</h2>
                                    <BookTable books={this.state.books}/>
                                </div>
                        }
                    </div>
                </div>
            </div>
        );
    }

}