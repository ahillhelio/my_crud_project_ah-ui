import React, { Component } from 'react';

class Province extends Component {
    constructor(props){
        super(props);
        this.state ={
            province : [
              
            ]
        }
    }

    getProvince = () => {
            fetch('http://localhost:5500/api/tc_provinces/')
            .then(response => response.json())
            .then(data => this.setState( {province : data } ));
        
    };

    componentDidMount (){
            this.getProvince();
    }

    render(){
        const displayProvince = this.state.province.map((province) => {
        return <div key={province._id}>{province.il}, {province.plak}, {province.visited? 'visited':'unvisited'}</div>
            
        })

        console.log(this.state.province);

        return(
            <>
                <h2>Provinces</h2>
               
                
                {displayProvince}
            </>
        )
    }
};

export default Province;