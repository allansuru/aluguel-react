import React , { Component } from 'react';
import { RentalCard } from './RentalCard'

export class RentalList extends Component {

	constructor() {
		super();

		this.state = {
			rentals: [1,2,3,4,5,6]
		}
	}

	renderRentals() {
		return this.state.rentals.map(rental => {
			return(
				  <RentalCard />
			)
		})
	}

	addRental() {
		const rentals = this.state.rentals;
		rentals.push(1);

		this.setState({
			rentals
		})
	}

	render () {
		return (
			       <section id='rentalListing'>
            <h1 className='page-title'>Your Home All Around the World</h1>
            <div className='row'>
							{ this.renderRentals() }
            </div>
						{/* <button onClick={() => { this.addRental() }}>Add Rental!</button> */}
          </section>
		)
	}
}