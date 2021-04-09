import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

import { foodIndex } from '../../api/food'

class FoodIndex extends Component {
  constructor (props) {
    super(props)
    this.state = {
      foods: []
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    foodIndex(user)
      .then(res => {
        console.log(res.data.foods)
        // console.log(res)
        this.setState({ foods: res.data.foods })
      })
      .then(() => {
        msgAlert({
          heading: 'Food Index Success!',
          message: 'Welcome!',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Food Index Failed',
          message: 'Failed with error: ' + err.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const foods = this.state.foods.map(food => (
      <div key={food.id} className='col-sm-5 col-md-5 mx-auto mt-5'>
        <Card>
          <Card.Header as="h5">{food.name}</Card.Header>
          <Card.Body>
            <Card.Title as="h5">{food.name}</Card.Title>
            <Card.Text>{food.address}</Card.Text>
            <Card.Text>{food.city}</Card.Text>
            <Card.Text>{food.state}</Card.Text>
            <Card.Text>{food.zip}</Card.Text>
            <Card.Text>{food.income}</Card.Text>
            <Card.Text>{food.dependents}</Card.Text>
            <Card.Link href={`#/food-show/${food.id}`}>Show Data</Card.Link>
          </Card.Body>
        </Card>
      </div>
    ))
    return (
      <div className="row">
        {foods}
      </div>
    )
  }
}

export default FoodIndex
