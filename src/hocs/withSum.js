import React from 'react';

const withSum = (Component) => {
  class WithSum extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        timeWork: 0,
        timeFlight: 0,
        timeBlock: 0,
        timeNight: 0,
        timeBiologicalNight: 0,
      };      
    }

    

    render(){
      return (
        <Component {...this.props}
          sum={this.state}
        />
      );
    }
  };

  return WithSum;
};

export default withSum;
