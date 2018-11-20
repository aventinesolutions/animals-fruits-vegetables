import React, { Component } from 'react'
import styled from 'styled-components'
import Thumbnail from './Thumbnail'
import Description from './Description'
import Modal from 'react-modal'
import FullsizeImage from './FullsizeImage'
import AnimalDetails from './AnimalDetails'

Modal.setAppElement(document.getElementById('root'))

const EntityContainer = styled.li`
  list-style: none;
  flex: 2 20em;
  padding: 1em;
  margin: 2em;
  border: 0.2em solid burlywood;
`

export default class NaturalEntity extends Component {
  constructor() {
    super()

    this.state = { modalIsOpen: false }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen })
  }

  render() {
    const modalStyles = {
      overlay: {
        backgroundColor: 'papayawhip'
      },
      content: {
        height: `${this.props.Height + 400}px`,
        width: `${this.props.Width}px`,
      }
    }

    return (
      <EntityContainer onClick={this.toggleModal}>
        <Thumbnail title={this.props.Title} src={this.props.ImageURLs.Thumb}/>
        <h2>{this.props.Title}</h2>
        <Description content={this.props.Description}/>
        <Modal
          style={modalStyles}
          isOpen={this.state.modalIsOpen}
          contentLabel={this.props.Title}>
          <button onClick={this.toggleModal}>X</button>
          <FullsizeImage title={this.props.Title} src={this.props.ImageURLs.FullSize}/>
          <AnimalDetails {...this.props}/>
        </Modal>
      </EntityContainer>
    )
  }
}
