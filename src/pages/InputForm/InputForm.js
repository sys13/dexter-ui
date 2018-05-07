import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import inputSchema from '../../schemas/inputSchema'
import inputFormUISchema from './InputFormUISchema'

export default class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleInputChange = event => {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target

    this.setState({ [name]: value })
  }
  handleSubmit = event => {
    console.log('here')
    console.log(event)
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1>Input</h1>
          <Form
            schema={inputSchema}
            uiSchema={inputFormUISchema}
            onChange={console.log('changed')}
            onSubmit={this.handleSubmit}
            onError={console.log('errors')}
          />
        </div>
      </div>
    )
  }
}
