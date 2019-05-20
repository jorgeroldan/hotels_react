import React, { Component } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

import Hero from '../Hero'
import Filters from '../Filters';

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

  handleFilterChange = newFilters => this.setState({filters: newFilters})

  render() {
    const {filters} = this.state

    return (
      <div className="container">
        <Hero filters={filters} />
        <Filters filters={filters} onFilterChange={this.handleFilterChange} />
      </div>
    )
  } 
}


export default App
