import '../Styling/AppStyle.css';
import React from 'react';
import bitsense from '../images/bitsense.png';
import fullynoded from '../images/fullynoded.png';
import tripkey from '../images/tripkey.png'

const AppDetail = () => {
  return (
    <div className="ui segment">

      <h4>
        My Apps:
      </h4>

      <div>

        <div class="ui center aligned segment">
        <a href="https://github.com/FontaineDenton/BitKey">
          <img src={bitsense} className="ui tiny left floated circular image"/>
        </a>
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

        <div class="ui center aligned segment">
        <a href="https://github.com/FontaineDenton/FullyNoded/tree/master/BitSense">
          <img src={fullynoded} className="ui tiny left floated circular image" />
        </a>
        <p>
          Fully Noded is a proper Bitcoin wallet which allows users to connect to
          their own personal Bitcoin Full Node. Users may log into their node in the app
          via SSH or via RPC. It is set up in a modular secure way whereby non technical users
          may make an in app purchase to spin up a full node of their own which powers the back end of the app.
          As far as I can tell this is the quickest and easiest way to run your own full node
          and get all the power Bitcoin Core offers. Running your own node remotely on an iPhone is pretty awesome!
        </p>
        </div>

        <div class="ui center aligned segment">
        <a href="https://github.com/FontaineDenton/TripKey">
          <img src={tripkey} className="ui tiny left floated circular image"/>
        </a>
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
      </div>

    </div>
  );
};
export default AppDetail;
