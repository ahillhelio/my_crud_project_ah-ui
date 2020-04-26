import React, { Component } from 'react';
import ProvinceForm from './provinceform';
import Dprovince from './Dprovince';

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

    deleteProvince = (id) => {
            fetch(`http://localhost:5500/api/tc_provinces/${id}`, {
                method: 'DELETE'
            }) 
            .then(response => response.json())
            .then(console.log)
            .then(this.getProvince);
    };

  

    componentDidMount (){ //not sure, better ask
            this.getProvince();
    }

    render(){ //had to add three parameters and make sure keys were as I had entered them
        const displayProvince = this.state.province.map((province) => {
        return <div> 
                    {province.il}, {province.plak}, {province.visited? 'visited':' not yet visited'}
                    <Dprovince province={province} deleteProvince={this.deleteProvince}/>
               </div>
               // top div above was <div key={province._id}>
      
           
            //         province={province} deleteProvince={this.deleteProvince}
            
             
        })

        console.log(this.state.province);

        return( // appears on the browser
            <>
                <h2>Provinces</h2>
                <ProvinceForm refresh={this.getProvince} />
                {displayProvince} 
            </>
        )
    }
};

export default Province;