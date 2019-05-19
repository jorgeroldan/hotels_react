import React from 'react'

const Hero = ({filters}) => {
  const {dateFrom, dateTo, country, price, rooms} = filters

  const countryText = country ? `en ${country}` : ''
  const priceText = price ? `por $${price}`: ''
  const roomsText = rooms ? `de hasta $${rooms} habitaciones`: ''

  const dateToFormatted = dateFrom.format('dddd[,] D [de] MMMM [de] YYYY')
  const dateFromFormatted = dateTo.format('dddd[,] D [de] MMMM [de] YYYY')


    return (
      <section className="hero is-primary">
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

export default Hero
