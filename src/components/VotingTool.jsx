import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/VotingTool.css';
import * as api from '../api.js';

class VotingTool extends Component {
  state = {
    voteModifier: 0
  };

  render() {
    const { votes } = this.props;
    const { voteModifier } = this.state;

    return (
      <div className="vote">
        <button
          className="voteButton"
          onClick={() => this.modifyVotes('up')}
          disabled={voteModifier === 1}
        >
          <span role="img" aria-label="up arrow">
            ⬆️
          </span>
        </button>
        <p>{votes + this.state.voteModifier}</p>
        <button
          className="voteButton"
          onClick={() => this.modifyVotes('down')}
          disabled={voteModifier === -1}
        >
          <span role="img" aria-label="down arrow">
            ⬇
          </span>
          ️
        </button>
      </div>
    );
  }

  modifyVotes = direction => {
    const { id, itemType } = this.props;
    this.setState({
      voteModifier: direction === 'up' ? 1 : -1
    });
    api.changeVotes(id, direction, itemType);
  };
}

VotingTool.propTypes = {
  votes: PropTypes.number.isRequired,
  id: PropTypes.string,
  itemType: PropTypes.string.isRequired
};

export default VotingTool;
