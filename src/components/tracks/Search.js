import React, { Component } from 'react'
import axios from 'axios';
import { Consumer } from '../../context';

 class Search extends Component {

    state = {
        trackTitle:''
    }

  render() {
    return (
      
      <Consumer>
            {value => {
                return (
                    
                );
            }}
      </Consumer>
    
    )
  }
}

export default Search;