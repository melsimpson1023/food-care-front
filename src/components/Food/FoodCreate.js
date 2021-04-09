import React, { Component } from 'react'
// import messages from '../AutoDismissAlert/messages'
import { createFood } from '../../api/food'
import { withRouter } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class FoodCreate extends Component {
  constructor () {
    super()
    this.state = {
      food: {
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        income: '',
        dependents: ''
      }
    }
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedFood = Object.assign(this.state.food, updatedField)

    this.setState({ food: editedFood })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { user, msgAlert } = this.props

    createFood(user, this.state.food)
      .then(() => {
        msgAlert({
          heading: 'Food Create Success',
          message: 'Food Create Success',
          variant: 'success'
        })
      })
      .then(() => this.props.history.push('/food'))
      .catch(err => {
        msgAlert({
          heading: 'Food Create Failed',
          message: `Failed with error: ${err.message}`,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Create Food</h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={this.state.food.name}
                placeholder="Enter Name"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                required
                name="address"
                value={this.state.food.address}
                type="text"
                placeholder="Address"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                required
                name="city"
                value={this.state.food.city}
                type="text"
                placeholder="City"
                onChange={this.handleChange}
              />
              <Form.Group>
                <Form.Label>State</Form.Label>
                <Form.Control
                  required
                  name="text"
                  value={this.state.food.state}
                  type="text"
                  placeholder="State"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  required
                  name="zip"
                  value={this.state.food.zip}
                  type="number"
                  placeholder="Zip"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Income</Form.Label>
                <Form.Control
                  required
                  name="income"
                  value={this.state.food.income}
                  type="number"
                  placeholder="Income"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Dependents</Form.Label>
                <Form.Control
                  required
                  name="dependents"
                  value={this.state.food.dependents}
                  type="number"
                  placeholder="Dependents"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button type="submit"> Submit</Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(FoodCreate)
