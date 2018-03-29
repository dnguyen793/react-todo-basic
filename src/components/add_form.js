import React, {Component} from 'react';

class AddForm extends Component{
    constructor (props){
        super (props);
        this.state = {
            newItem: '',
            newDetails: ''
        }
    }

    handleAddItem (event){
        event.preventDefault();
        console.log('new item to add', this.state);

        const { newItem, newDetails } = this.state;

        this.props.add({title: newItem, details: newDetails});
        this.setState({
            newItem: '',
            newDetails: ''
        });
    }

    render () {
        const { newItem, newDetails } = this.state;

        return(
            <form className="row" onSubmit={this.handleAddItem.bind(this)}>
                <div className="col s6">
                    <label>New Item</label>
                    <input type="text" value={newItem} onChange={(event) => this.setState({newItem: event.target.value})}/>
                </div>
                <div className="col s6">
                    <label>New Details</label>
                    <input type="text" value={newDetails} onChange={(event) => this.setState({newDetails: event.target.value})}/>
                </div>
                <div className = "center">
                    <button className="btn teal darken-2">Add Item</button>
                </div>
            </form>
        )
    }
}

export default AddForm;