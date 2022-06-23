import React from "react";
import './App.css';
import {CardList} from './component/card-list/card-list.component'
import { SearchBox } from "./component/search-box/search-box.component";

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            singers : [],
            searchFild:''
        }
        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({singers:users}))
    }

    handleChange = e => {
        this.setState({searchFild : e.target.value});
    }
    
    render(){

        const {singers , searchFild } = this.state;
        const filteredSingers = singers.filter(singer=>singer.name.toLowerCase().includes(searchFild.toLocaleLowerCase()));

        return(
            <>
                <div className="App">
                    <h1>Tired Robots</h1>
                    <SearchBox placeholder="search robots"handleChange={this.handleChange} />
                    <CardList singers={filteredSingers} />
                </div>
            </>
        );   
    }
}

export default App;

