import React from 'react';

const withToggle = (Component) => {
  class WithToggle extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        value: `Все года`,
        isFactData: false,
      };

      this._toggleHandler = this._toggleHandler.bind(this);
    }

    _toggleHandler(){
      this.setState({
        isFactData: !this.state.isFactData,
      })
    }

    render(){
      return (
        <Component {...this.props}
        toggleHandler = {this._toggleHandler}
        isFactData = {this.state.isFactData}
        />
      );
    }
  };

  return WithToggle;
};

export default withToggle;
