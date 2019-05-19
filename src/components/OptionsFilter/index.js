import React from 'react'
import PropTypes from 'prop-types'
import nanoid from 'nanoid'

const OptionsFilter = ({options, name, selected, icon, }) => {

    return (
        <div className="field">
            <div className="control has-icons-left">
                <div className="select" style={ {width: '100%'} }>
                <select 
                    style={ {width: '100%'} } 
                    name={name} 
                    value={selected} 
                    onChange={event => console.log({ name: event.target.name, value: event.target.value })} 
                    >
                    
                    {options.map(option => 
                        <option key={nanoid()} value={option.value}> 
                            {option.name}    
                        </option>)}
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
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), 
            name: PropTypes.string, 
        })
    ), 
    name: PropTypes.string, 
    selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),  
    icon: PropTypes.oneOf(['globe', 'dollar-sign', 'bed']), 
}

export default OptionsFilter