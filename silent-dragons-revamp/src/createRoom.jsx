import './createRoom.css'
import React, {Component} from 'react'
import DynamicForm from './dynamicForm'

class CreateRoom extends Component() {
  state = {
    data: [
      {id: 1, name: "goober", desc: "dingus", cat: "dog"},
    ]
  }
  render() {
    return (
    <div>
      <h1>test</h1>
      <DynamicForm className='form'
    model = {[
      {key: "name", label: "Room Name", props: {required: true}},
      {key: "desc", label: "Description", props: {required: true}},
      {key: "cat", label: "Categories"},
    ]}
    onSubmit = {(model) => {this.onSubmit(model)}} />

    <pre>{JSON.stringify(this.state.data)}</pre>
    </div>
  )}
}


export default CreateRoom
