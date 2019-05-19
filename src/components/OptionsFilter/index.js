import React from 'react'
import PropTypes from 'prop-types'

const OptionsFilter = ({options, name, selected, icon, }) => {

    return (
        <div className="field">
            <div className="control has-icons-left">
                <div className="select" style={ {width: '100%'} }>
                <select style={ {width: '100%'} } name={name} value={selected}>
                    {options.map(option => <option value={option.value}> {option.name} </option>)}
                </select>
                </div>
                <div className="icon is-small is-left">
                <i className={`fas fa-${icon}`}></i>
                </div>
            </div>
        </div>
    )
}

OptionsFilter.prototype = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number, 
            name: PropTypes.string, 
        })
    ), 
    name: PropTypes.string, 
    selected: PropTypes.string, 
    icon: PropTypes.oneOf('sign-in-alt', 'sign-out-alt'), 
}

export default OptionsFilter