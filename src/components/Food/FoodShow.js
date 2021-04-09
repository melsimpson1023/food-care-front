import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Redirect, Link } from 'react-router-dom'

import { foodShow, foodDelete } from '../../api/food'

class FoodShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      food: [],
      deleted: false
    }
  }

  componentDidMount () {
    const { user, msgAlert, match } = this.props
    // console.log(match)

    foodShow(user, match.params.foodId)
      .then(res => {
        // console.log(res)
        this.setState({ food: res.data.food })
      })
      .then(() => {
        msgAlert({
          heading: 'Data Show Success!',
          message: 'Welcome!',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Data Show Failed',
          message: 'Failed with error: ' + err.message,
          variant: 'danger'
        })
      })
  }
  delete = () => {
    const { user, match } = this.props
    // console.log(match.params)
    foodDelete(user, match.params.foodId)
      .then(() => this.setState({
        deleted: true
      }))
      .catch(console.error)
  }

  render () {
    const { food, deleted } = this.state
    const { user } = this.props
    if (!food) {
      return (
        'Loading...'
      )
    } if (deleted) {
      return <Redirect to="/food-index" />
    }
    // console.log(this.state.blog, user)
    if (food.owner === user.id) {
      return (
        <div>
          <h1>Here is your data</h1>
          <Link to={`/food-update/${this.props.match.params.foodId}`}><Button>Edit</Button></Link>

          <Button onClick={this.delete}>Delete</Button>
        </div>
 
      )
    } else {
      return (
        <h1>you do not own this data</h1>
      )
    }
  }
}

export default FoodShow
