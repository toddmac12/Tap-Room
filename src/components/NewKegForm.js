import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({ name: event.target.name.value, brewer: event.target.brewer.value, type: event.target.type.value, abv: event.target.abv.valueAsNumber, price: event.target.price.valueAsNumber, pintsRemaining: 124, id: v4() });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name of Beer' />
        <input
          type='text'
          name='brewer'
          placeholder='Name of Brewery' />
        <input
          type='text'
          name='type'
          placeholder='Type of Beer' />
        <input
          type='number'
          name='abv'
          step="0.1"
          placeholder='ABV%' />
        <input
          type='number'
          name='price'
          step="0.1"
          placeholder='Price per Pint' />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;