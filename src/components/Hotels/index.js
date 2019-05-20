import React from 'react'
import PropTypes from 'prop-types'

import Hotel from '../Hotel'

const Hotels = ({ data }) => {

    return (
        <div>
          {data.map(hotel => 
            (<Hotel {...hotel} />
            ))}
        </div>
    )
}

Hotels.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            slug: PropTypes.string, 
            name: PropTypes.string, 
            photo: PropTypes.string, 
            description: PropTypes.string, 
            availabilityFrom: PropTypes.number, 
            availabilityTo: PropTypes.number, 
            rooms: PropTypes.number, 
            city: PropTypes.string, 
            country: PropTypes.string, 
            price: PropTypes.number, 
    }))
}

export default Hotels