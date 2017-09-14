import React, {Component} from 'react';
import './App.css';
import {Typeahead} from 'react-bootstrap-typeahead'; // ES2015

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            author: '',
            title: '',
            email: '',
            date: '',
            owner: ''
        };
    }

    componentDidMount() {
    }

    render() {
        return (
                        <form onSubmit={(e) => this.submitForm(e)}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <Typeahead
                                    id="title"
                                    labelKey="name"
                                    options={this.props.fakeTitles}
                                    allowNew={true}
                                    className="form-control"
                                    type="text"
                                    value={this.state.title}
                                    onChange={(value) => this.setState({title: value[0]})}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Author</label>
                                <input id="author"
                                       className="form-control"
                                       type="text"
                                       value={this.state.author}
                                       onChange={(event) => (this.setState({author: event.target.value}))}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Date Available</label>
                                <input id="date"
                                       className="form-control"
                                       type="date"
                                       value={this.state.date}
                                       onChange={(event) => (this.setState({date: event.target.value}))}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="owner">Owner</label>
                                <input id="owner"
                                       className="form-control"
                                       type="text"
                                       value={this.state.owner}
                                       onChange={(event) => (this.setState({owner: event.target.value}))}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input id="email"
                                       className="form-control"
                                       type="email"
                                       value={this.state.email}
                                       onChange={(event) => (this.setState({email: event.target.value}))}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="submit" value="Submit my book"/>
                            </div>

                        </form>
        );
    }

    submitForm(event) {
        event.preventDefault();
        // ls.set('books', {});
        // {
        //     author: 'Bob',
        //     title: 'Ready Player One!',
        // }
        this.props.onAddBook(this.state);
        this.setState({
            author: '',
            title: '',
            email: '',
            date: '',
            owner: ''
        });
        return false;
    }
}

export default App;
