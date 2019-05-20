import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

const DateFilter = ({date, name, icon, onDateChange  }) => {

    const dateFormatted = date.format('YYYY[-]MM[-]DD')

    return (
        <div className="field">
            <div className="control has-icons-left">
                <input className="input" type="date" name={name} value={dateFormatted} onChange={onDateChange}  />
                <span className="icon is-small is-left">
                <i className={`fas fa-${icon}`}></i>
                </span>
            </div>
        </div>
    )
}


DateFilter.prototype = {
    date: PropTypes.instanceOf(dayjs), 
    name: PropTypes.string, 
    icon: PropTypes.oneOf(['sign-in-alt', 'sign-out-alt']), 
    onDateChange: PropTypes.func,   
}

export default DateFilter