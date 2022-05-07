import React from 'react';
import DaumPostcode from 'react-daum-postcode';

export default class Postcode extends React.Component {

    constructor(props) {
        super(props)
    }

  handleAddress = (data) => {
    let fullAddress = data.address;
    let extraAddress = ''; 
    
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    this.props.callback(fullAddress); 
  }

  render() {
    return (
      <DaumPostcode 
        onComplete={this.handleAddress}
        {...this.props}
      />

    );
  }
}