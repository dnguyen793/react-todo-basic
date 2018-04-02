import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import List from './list';
import AddForm from './add_form';
// import listData from '../data/todo_items';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
// const API_KEY = '?key=somethinghasntbeenusedbefore';
const API_KEY = '?key=testuser1234';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            listArray: []
        };
    }

    //lifecycle method get called by React, we never call them
    componentDidMount(){
        this.getList();
    }

    getList(){
        axios.get(`${BASE_URL}/todos${API_KEY}`).then(resp =>{
           console.log('server resp:', resp);

           this.setState({
               listArray: resp.data.todos,
           })
        });
    }

    getOneItem(){
        //axios.get
        //(`${BASE_URL}/todos/[item id]?key=[your api key]`)
    }

    tootleItem(){
        //axios.put
        // (`${BASE_URL}/todos/[item id]?key=[your api key]`)
    }

    addItem( item ){
        // this.setState({
        //     listArray: [item, ...this.state.listArray]
        // })

        axios.post(`${BASE_URL}/todos${API_KEY}`, item).then( resp => {
            console.log('add resp:', resp);
            this.getList();
        })
    }

    deleteItem( index ){
        //axios.delete
        //url:
        // axios.delete(`${BASE_URL}/todos/[item id]?key=[your api key]`)

        // console.log('index', index);
        // const newList = this.state.listArray.slice();
        console.log('newList', newList)
        newList.splice(index,1);
        this.setState({
            listArray: newList
        });
    }

    render(){
        return(

            <div>
                <div className="container">
                    <h1 className="center">To Do List</h1>
                    <AddForm add={this.addItem.bind(this)}/>
                    <List list={this.state.listArray} delete = {this.deleteItem.bind(this)}/>
                </div>
            </div>
        )
    }
};

export default App;
