import React, { Component } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

import Hero from '../Hero'

dayjs.locale('es')

class App extends Component {
  state = {
    filters: {
      dateFrom: dayjs(),
      dateTo: dayjs(),
      country: '',
      price: 0,
      rooms: 0, 
    }, 
  }

  componentDidMount(){
    // console.log('dayjs format', this.state.filters.dateFrom.format())
  }

  render() {
    const {filters} = this.state

    return (
      <div className="container">
        <Hero filters={filters} />
      </div>
    )
  }
}


Hero.propTypes = {
  filters: PropTypes.shape({
    dateFrom: PropTypes.instanceOf(dayjs), 
    dateTo: PropTypes.instanceOf(dayjs),
    country: PropTypes.string, 
    price: PropTypes.number, 
    rooms: PropTypes.number, 
  })
}

export default App
