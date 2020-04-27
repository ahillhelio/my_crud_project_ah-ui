import React, { Component } from 'react';
import ProvinceForm from './provinceform';
import ProvinceUpdate from './provinceupdate';
import Dprovince from './Dprovince';

//TODO: Get Update to Function Properly
//Clear field
//Get "Cancel" button to work
//Don't let "Not yet visited" be default anymore

class Province extends Component {
    constructor(props){
        super(props);
        this.state ={
            province : [
              
            ],
            isCreate : true,
            updateProvince: {}//? updateRelative: {} in the tutorial
        }
    }

    getProvince = () => {
            fetch('http://localhost:5500/api/tc_provinces/') //accesses API/database
            .then(response => response.json())
            .then(data => this.setState( {province : data, isCreate: true } ));//further instructions about what to do with it
        
    };

    deleteProvince = (id) => {
            fetch(`http://localhost:5500/api/tc_provinces/${id}`, {
                method: 'DELETE'
            }) 
            .then(response => response.json())
            .then(console.log)
            .then(this.getProvince);
    };

    // updateProvince = (id) => {
    //         fetch(`http://localhost:5500/api/tc_provinces/${id}`, {
    //             method: 'PUT'
    //         }) 
    //         .then(response => response.json())
    //         .then(console.log)
    //         .then(this.getProvince);
    // };

    updateProvince = (province) => {
        this.setState({
            updateProvince: province,
            isCreate: false,
        })
    };

    renderForm = () => {
            let result;
            if (this.state.isCreate){
                result = (<ProvinceForm key="createForm" refresh={this.getProvince} />);
            } else {
                const data = this.state.updateProvince; 
                result = <ProvinceUpdate key={data._id} province={data} refresh={this.getProvince}/>; // double check "ProvinceUpdate"
            }
            return result; 
    }

    componentDidMount (){ //not sure, better ask
            this.getProvince();
    }

    render(){ //had to add three parameters and make sure keys were as I had entered them
        const displayProvince = this.state.province.map((province) => {
        return <div> 
                    {province.il}, {province.plak}, {province.visited? 'visited': 'not yet visited'}
                    <Dprovince province={province} 
                    deleteProvince={this.deleteProvince}
                    updateProvince={this.updateProvince}/>
               </div>
               // top div above was <div key={province._id}>
      
           
            //         province={province} deleteProvince={this.deleteProvince}
            
             
        })

        console.log(this.state.province);

        return( // appears on the browser
            <>
                <h2>Provinces</h2>
                {this.renderForm()}
                {/* <ProvinceForm refresh={this.getProvince} -COPIED TO renderform- /> */  }
                {displayProvince} 
            </>
        )
    }
};

export default Province;