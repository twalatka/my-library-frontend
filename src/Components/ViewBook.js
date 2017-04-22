import React, {Component} from 'react';

export default class ViewBook extends Component {
    constructor( props ){
        super ( props );
        this.state = { item: {}, id: "1" };
        console.log( this.state );
    }

    getBookById(id){
        fetch('http://localhost:3000/Books/${id}', { method: 'GET', mode: 'cors'})
        .then(response => response.json())
        .then(books => {
            let book = books[0];
            this.setState({book, id});
            console.log(this.state.book);
        })
        .catch(err => console.error(err));
      
    }

    componentDidMount(){
        this.getBookById(1);
    }

    render(){
        return (
            <div>
            <h1>{this.state.book.summary}</h1>
            <p>Details: <br />
            {this.state.book.description}
            </p>
            <p> Created By: {this.state.book.user}</p>
            </div>
        )
    }
}

