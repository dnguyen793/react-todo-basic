import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import List from './list';
import AddForm from './add_form';
import listData from '../data/todo_items'


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            listArray: listData
        };
    }

    addItem( item ){
        this.setState({
            listArray: [item, ...this.state.listArray]
        })
    }

    render(){
        return(

            <div>
                <div className="container">
                    <h1 className="center">To Do List</h1>
                    <AddForm add={this.addItem.bind(this)}/>
                    <List list={this.state.listArray}/>
                </div>
            </div>
        )
    }
};

export default App;
