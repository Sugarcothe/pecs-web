import React from 'react';
import YouTube from 'react-youtube';

class ClassesYoutube extends React.Component {
    VideoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

  render() {
    const opts = {
      height: '250',
      width: '500',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    const {videoId} = this.props
    return <YouTube 
            videoId={videoId}
            opts={opts} 
            onReady={this.VideoOnReady} 
        />;
  }
}

export default ClassesYoutube;


// https://www.youtube.com/watch?v=B6IS9dbHtoE&t=24s
// https://youtu.be/B6IS9dbHtoE
