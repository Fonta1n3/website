import '../Styling/AppStyle.css';
import React from 'react';
import bitsense from '../images/bitsense.png';
import fullynoded from '../images/fullynoded.png';
import tripkey from '../images/tripkey.png';

import FullyNoded_1 from '../images/FullyNoded_1.png';
import FullyNoded_2 from '../images/FullyNoded_2.png';
import FullyNoded_3 from '../images/FullyNoded_3.png';
import FullyNoded_4 from '../images/FullyNoded_4.png';

import BitSense_1 from '../images/BitSense_1.png';
import BitSense_2 from '../images/BitSense_2.png';
import BitSense_3 from '../images/BitSense_3.png';
import BitSense_4 from '../images/BitSense_4.png';

import TripKey_1 from '../images/TripKey_1.png';
import TripKey_2 from '../images/TripKey_2.png';
import TripKey_3 from '../images/TripKey_3.png';
import TripKey_4 from '../images/TripKey_4.png';

const AppDetail = () => {
  return (

    <div className="ui blue inverted segment">

    <h3>My Apps:</h3>
    <br></br>

      <h2 className="ui left floated header">
        TripKey
        <a href="https://itunes.apple.com/tm/app/tripkey-lite/id1197157982?mt=8" target="_blank">
          <img src={tripkey} className="ui small left floated circular image" />
        </a>
      </h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="ui segment">

      <img src={TripKey_2} className="ui left floated image" style={{width: 250, height: 500}}/>
      <img src={TripKey_4} className="ui left floated image" style={{width: 250, height: 500}}/>
      <img src={TripKey_1} className="ui left floated image" style={{width: 250, height: 500}}/>
      <img src={TripKey_3} className="ui left floated image" style={{width: 250, height: 500}}/>

      <h3>
        TripKey
      </h3>
      <p>
        TripKey was my very first coding project. For my previous job I had to fly
        internationally frequently and was agin frustrated at the lack of quality
        on most of the flight tracking apps on the app store so made my own. The app
        allows users to input their flight number and departure date and then notifies users of
        all flight info including gate, terminal, countdown timers, delays, cancellation, diversions, in flight amenities
        such as wifi, leg room, power source, in flight entertainment etc. Its a great way
        to organize your flights, especially if you travel frequently.
      </p>

      </div>

      <br></br>
      <br></br>

      <h2>
        BitSense
        <a href="https://github.com/FontaineDenton/BitKey" target="_blank">
          <img src={bitsense} className="ui small left floated circular image" />
        </a>
      </h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

        <div class="ui segment">

        <img src={BitSense_1} className="ui left floated image" style={{width: 250, height: 500}}/>
        <img src={BitSense_2} className="ui left floated image" style={{width: 250, height: 500}}/>
        <img src={BitSense_4} className="ui left floated image" style={{width: 250, height: 500}}/>
        <img src={BitSense_3} className="ui left floated image" style={{width: 250, height: 500}}/>

        <h3>
          BitSense
        </h3>
        <p>
          BitSense (formerly BitKey) was my first attempt at creating a Bitcoin wallet.
          Frustrated with the quality of the wallets on the app store I began BitSense
          as purely a way to produce private keys and addresses on your device locally,
          inspired by BitAddress,org.
          It now allows a lot of powerful features and is more of a Bitcoin toolkit then just
          a wallet. It allows users to create as many hot or cold wallets as they like.
          The app lets users import or sweep exisiting private keys, addresses, xpubs, xprivs
          and recovery phrases. Unfortunately Apple does not seem to be very Bitcoin friendly
          and has stopped me from updating the app. However it is on GitHub (click the icon)
          and if you have XCode you can download the project and run it yourself. Making this app
          taught me an invaluable amount about writing Bitcoin software and was a real
          challenge at times. I am really proud of this app and think it holds its own as far
          as iOS Bitcoin wallets are concerned.
        </p>
        </div>

        <br></br>
        <br></br>
        <h2>
          Fully Noded
          <a href="https://github.com/FontaineDenton/BitKey" target="_blank">
            <img src={fullynoded} className="ui small left floated circular image" />
          </a>
        </h2>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


        <div class="ui segment" style={{height: 650}}>

        <img src={FullyNoded_1} className="ui left floated image" style={{width: 250, height: 500}}/>
        <img src={FullyNoded_2} className="ui left floated image" style={{width: 250, height: 500}}/>
        <img src={FullyNoded_3} className="ui left floated image" style={{width: 250, height: 500}}/>
        <img src={FullyNoded_4} className="ui left floated image" style={{width: 250, height: 500}}/>

        <h3>
          Fully Noded
        </h3>
        <p>
          Fully Noded was my first attempt at developing a full stack app in the form of a Bitcoin wallet which allows users to connect to
          their own personal Bitcoin Full Node. Users may log into their node in the app
          via SSH or via RPC. It is set up in a modular secure way whereby non technical users
          may make an in app purchase to spin up a full node of their own which powers the back end of the app.
          As far as I can tell this is the quickest and easiest way to run your own full node
          and get all the power Bitcoin Core offers. Running your own node remotely on an iPhone is pretty awesome!
        </p>
        </div>


      </div>

  );
};
export default AppDetail;
