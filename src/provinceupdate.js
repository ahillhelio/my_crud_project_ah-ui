import React from 'react';

class ProvinceUpdate extends React.Component {
    state = {
        il: this.props.province.il, //(?)
        plak: this.props.province.plak,
        visited: this.props.province.visited//BOOLEAN?
    }
  
    handleChange = ( {target} ) => {
        const key = target.name; // should I change this to 'il'? or name?
        this.setState({ [key] : target.value }, () => console.log(this.state[key]));
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const visited= this.state.visited === "true";
        //fetch(('http://localhost:5500/api/tc_provinces/'), {
        fetch(`${process.env.REACT_APP_API_URL}/api/tc_provinces/${this.props.province._id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({il : this.state.il, plak : this.state.plak, visited : visited})
        })
        .then(this.props.refresh)
        .then(() => this.setState({
            il: "",
            plak: 0,
            visited: ""
        }));
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}> 
                <input 
                    name="il" 
                    type="text"
                    value={this.state.il}
                    placeholder= "Name of Province"
                    onChange={this.handleChange}/>
                <input
                    name="plak"
                    type="number"
                    value={this.state.plak}
                    placeholder= "Plaka No."
                    onChange={this.handleChange}/>
                <select
                    name="visited"
                    //type="boolean"
                    value={this.state.visited}
                    onChange={this.handleChange}>
                    <option value={true}>Visited</option>
                    <option value={false}>Not Visited</option>
                    
                </select>

                <input type="submit" value="Edit or Update a Province"/>
                <input type="button" value="Cancel" onClick={this.props.refresh}/>
            </form>
        )
    }
}


export default ProvinceUpdate; 