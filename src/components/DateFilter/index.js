import React from 'react'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'

const DateFilter = ({date, icon  }) => {

    return (
        <div className="field">
            <div className="control has-icons-left">
                <input className="input" type="date" value={date}/>
                <span className="icon is-small is-left">
                <i className={`fas fa-${icon}`}></i>
                </span>
            </div>
        </div>
    )
}


DateFilter.prototype = {
    date: PropTypes.instanceOf(dayjs), 
    icon: PropTypes.string, 
}

export default DateFilter