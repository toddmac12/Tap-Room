import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';


class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList:[],
      selectedKeg: null
    };
  }

  handlePouringSelectedKeg = (kegToPour) => {
    const changedPintsRemaining = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegToPour);
    this.setState({
      masterKegList: changedPintsRemaining,
      selectedKeg: kegToPour,
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList,
    formVisibleOnPage: false});
  }

  handleClick = () => {
    if (this.state.selectedKeg != null){
      this.setState({
        formVisibleOnPage: true,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg}
      onClickingPour = {this.handlePouringSelectedKeg} />
      buttonText = "Return to Keg List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>;
      buttonText = "Add Keg";
      
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

  
}

export default KegControl;