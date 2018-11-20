import React, { PureComponent } from 'react'
import styled from 'styled-components'

const DetailList = styled.ul`
  list-style: none;
`
const Detail = styled.span`
  font-style: italic;
`
export default class NaturalEntityDetails extends PureComponent {
  render() {
    const { Title, CollectiveNoun, Family } = this.props
    return (
      <div>
        <h2>{Title}</h2>
        <DetailList>
          <li>Collective Noun: <Detail>{CollectiveNoun}</Detail></li>
          <li>Family: <Detail>{Family}</Detail></li>
        </DetailList>
      </div>
    )
  }
}
