import React from 'react';

const Dprovince = ({province, deleteProvince, updateProvince}) => {
    return(
        <>
        <button onClick={() => deleteProvince(province._id)}>Delete</button>
        <button onClick={() => updateProvince(province)}>Edit</button>
        </>
    )
}

export default Dprovince;