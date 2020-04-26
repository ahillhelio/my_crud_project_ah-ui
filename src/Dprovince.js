import React from 'react';

const Dprovince = ({province, deleteProvince}) => {
    return(
        <>
        <button onClick={() => deleteProvince(province._id)}>Delete</button>
        </>
    )
}

export default Dprovince;