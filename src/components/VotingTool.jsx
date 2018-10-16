import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api.js'

class VotingTool extends Component {
  state = {
    voteModifier: 0
  }

  render() {
    const { votes } = this.props.article
    const { voteModifier } = this.state

    return (
      <div className="vote">
        <button onClick={() => this.modifyVotes("up")} disabled={voteModifier === 1}>Up</button>
        <p>{votes + this.state.voteModifier}</p>
        <button onClick={() => this.modifyVotes("down")} disabled={voteModifier === -1}>Down</button>
      </div>
    )
  }

  modifyVotes = (direction) => {
    const { _id } = this.props.article
    this.setState({
      voteModifier: direction === "up" ? 1 : -1
    })
    api.changeVotes(_id, direction)
  }

}

VotingTool.propTypes = {
  article: PropTypes.object.isRequired,
}

export default VotingTool