import React, { Component } from 'react';
import { css } from 'react-emotion';
import { ClipLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class LoadingSpinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <div className="moon-loader">
        <ClipLoader
          className={override}
          sizeUnit={'px'}
          size={100}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default LoadingSpinner;
