import React from 'react'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'

const Hero = ({filters}) => {
  const {dateFrom, dateTo, country, price, rooms} = filters

  const countryText = country ? `en ${country}` : ''
  const priceText = price ? `por $${price}`: ''
  const roomsText = rooms ? `de hasta ${rooms} habitaciones`: ''

  const dateToFormatted = dateFrom.format('dddd[,] D [de] MMMM [de] YYYY')
  const dateFromFormatted = dateTo.format('dddd[,] D [de] MMMM [de] YYYY')


    return (
      <section className="hero is-info is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hoteles</h1>
            <h2 className="subtitle">
              desde el <strong>{dateToFormatted}</strong> hasta el <strong>{dateFromFormatted}</strong> {countryText} {priceText} {roomsText}.
            </h2>
          </div>
        </div>
      </section>
    )
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

export default Hero
