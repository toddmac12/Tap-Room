import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  function handlePouringPint(event) {
    event.preventDefault();
    if(keg.pintsRemaining === 1 || keg.pintsRemaining === "sold out") {
      props.onClickingPour({name: keg.name, brewer: keg.brewer, type: keg.type, abv: keg.abv, price: keg.price, pintsRemaining: "sold out", id: keg.id });
    } else {
      props.onClickingPour({name: keg.name, brewer: keg.brewer, type: keg.type, abv: keg.abv, price: keg.price, pintsRemaining: keg.pintsRemaining - 1, id: keg.id });
    }
  }

  return (
    <React.Fragment>
      <h2>Keg Detail</h2>
      <p><strong>Name: </strong> {keg.name}</p>
      <p><strong>Brewery: </strong> {keg.brewer}</p>
      <p><strong>Type: </strong> {keg.type}</p>
      <p><strong>ABV%: </strong> {keg.abv}</p>
      <p><strong>Price (pint): </strong> {keg.price}</p>
      <p><strong>Pints Remaining: </strong> {keg.pintsRemaining}</p>
      <hr/>
      <button onClick={ handlePouringPint }>Pour Pint</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingPour: PropTypes.func
};

export default KegDetail;
