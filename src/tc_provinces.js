import React, { Component } from 'react';
import ProvinceForm from './provinceform'

class Province extends Component {
    constructor(props){
        super(props);
        this.state ={
            province : [
              
            ]
        }
    }

    getProvince = () => {
            fetch('http://localhost:5500/api/tc_provinces/') //accesses API/database
            .then(response => response.json())
            .then(data => this.setState( {province : data } ));//further instructions about what to do with it
        
    };

    componentDidMount (){ //not sure, better ask
            this.getProvince();
    }

    render(){ //had to add three parameters and make sure keys were as I had entered them
        const displayProvince = this.state.province.map((province) => {
        return <div key={province._id}>{province.il}, {province.plak}, {province.visited? 'visited':' not yet visited'}</div>
            
        })

        console.log(this.state.province);

        return( // appears on the 
            <>
                <h2>Provinces</h2>
                <ProvinceForm refresh={this.getProvince} />
                {displayProvince} 
            </>
        )
    }
};

export default Province;