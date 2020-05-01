import React from 'react';

class ProvinceForm extends React.Component {
    state = {
        il: "",
        plak: "",
        visited: true
    }
    handleChange = ( {target} ) => {
        const key = target.name; // should I change this to 'il'?
        this.setState({ [key] : target.value }, () => console.log(this.state[key]));
    }

    
    handleSubmit = (event) => {
        event.preventDefault();

        
        const visited= this.state.visited === true;
        

        fetch(`${process.env.REACT_APP_API_URL}/api/tc_provinces`, {
   
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify([{il : this.state.il, plak : parseInt(this.state.plak), visited : visited}])
        })
        .then(this.props.refresh)
        .then(() => this.setState({
            il: "",
            plak: 0, //is two zeroes do-able? this reflects the actual plaka
            visited: true
        }));
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}> 
                <input 
                    name="il" 
                    type="text"
                    value={this.state.il}
                    placeholder= "Name of THE Province"
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
                    <option value={false}>Not Visited</option>
                    <option value={true}>Visited</option>
                    
                </select>

                <input type="submit" value="Add Province"/>
            </form>
        )
    }
}


export default ProvinceForm; 