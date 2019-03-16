import React , { Component } from 'react';
import { RentalCard } from './RentalCard'
import { connect } from 'react-redux';

import * as action from './../../../actions';

 class RentalList extends Component {

	renderRentals() {
		return this.props.rentals.map((rental, i) => {
			return (
				  <RentalCard 
							key={i} 
							rental={rental} 
							colNum='col-md-3 col-xs-6' />
			)
		})
	}

	addRental() {
		const rentals = this.props.rentals;
		rentals.push(1);

		this.setState({
			rentals
		})
	}

	componentWillMount() {

		this.props.dispatch(action.fetchRentals());
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

function mapStateToProps(state) {

	return {
		rentals: state.rentals.data
	}
}

export default connect(mapStateToProps)(RentalList)