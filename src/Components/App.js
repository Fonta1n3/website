// import react and react dom libraries
import React from 'react';
import ReactDom from 'react-dom';
import AppDetail from './AppDetail';
import BioDetail from './BioDetail';
import ContactDetail from './ContactDetail';
import VideoDetail from './VideoDetail';
import Header from './Header';

class App extends React.Component {

  componentDidMount() {
    console.log('Component did mount');
  }
  renderContent() {

    const backgroundColor = { backgroundColor: 'grey' };

      return (
        <div className = "ui container">
          <Header />
          <br></br>
          <br></br>
          <br></br>
          <BioDetail />
          <AppDetail />
          <h2>My Tutorials:</h2>
          <VideoDetail />
        </div>
      );

  };

  render() {
    return (
      <div>{this.renderContent()}</div>
    );
  };
}

export default App;
