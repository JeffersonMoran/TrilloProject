import React from 'react'

const Hotel = ({ hotelData }) => (
    <main className="hotel-view">
        <div className="gallery">
            {
                hotelData.map((item) => (
                    <figure className="gallery__item">
                        <img className="gallery__photo" src={require(`../img/${item.image}.jpg`)} alt={item.alt}/>
                    </figure>
                ))
            }
        </div>
    </main>
)

export default Hotel;