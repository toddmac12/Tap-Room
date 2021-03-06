import React from 'react';
import PropTypes from "prop-types";


function Keg(props) {
  return (
    <React.Fragment>
      <div ><p><strong>Beer Name: </strong> {props.name}</p>
        <button className="btn btn-primary" onClick={() => props.whenKegClicked(props.id)}>Click to Edit Keg</button>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  type: PropTypes.string,
  abv: PropTypes.number,
  price: PropTypes.number,
  pintsRemaining: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  onClickingPour: PropTypes.func
}

export default Keg;