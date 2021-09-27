import React from 'react';
import YouTube from 'react-youtube';

class ExampleYoutube extends React.Component {
    VideoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

  render() {
    const opts = {
      height: '330',
      width: '580',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
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

export default ExampleYoutube;


// https://www.youtube.com/watch?v=B6IS9dbHtoE&t=24s
// https://youtu.be/B6IS9dbHtoE
