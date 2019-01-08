// import react and react dom libraries
import React from 'react';
import ReactDom from 'react-dom';
import AppDetail from './AppDetail';
import BioDetail from './BioDetail';
import ContactDetail from './ContactDetail';

class App extends React.Component {

  state = { activeTab: "bio" };

  componentDidMount() {
    console.log('Component did mount');
  }
  renderContent() {

    const backgroundColor = { backgroundColor: 'grey' };

      return (
        <div className = "ui container" style={{ marginTop: '10px'}}>
          <BioDetail />
          <AppDetail />
          <ContactDetail />
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
