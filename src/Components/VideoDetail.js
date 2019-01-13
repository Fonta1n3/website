import React from 'react';
import './VideoItem.css';

const VideoDetail = props => {

  return (
    <div>
      <div>
        <div className="ui embed">
          <iframe title="video player" src="https://www.youtube.com/embed/1rvyqxOlDbk" />
        </div>
        <br></br>
        <div className="ui embed">
          <iframe title="video player" src="https://www.youtube.com/embed/KNUeWViaRwk" />
        </div>
        <br></br>
        <div className="ui embed">
          <iframe title="video player" src="https://www.youtube.com/embed/jiIOk3eneso" />
        </div>
        <br></br>
      </div>
    </div>


  );
};

export default VideoDetail;
