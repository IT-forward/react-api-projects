import React from 'react';

const ListHeader = ({ title }) => {
    return (
        <div className='text-center mt-4'>
            <h2>{title}</h2>
        </div>
    )
}

ListHeader.defaultProps = {
    title: 'Statistics by country',
}

export default ListHeader
