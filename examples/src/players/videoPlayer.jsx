/* eslint react/prop-types: 0 */
import React from 'react';

import { JPlayer, Gui, Progress, SeekBar, Buffer, BrowserUnsupported,
  Poster, Video, Title, FullScreen, Mute, Play, PlayBar, Repeat, PlaybackRateBar,
  VolumeBar, Duration, CurrentTime } from '../../../src/index';
import webmv from '../../assets/Big Buck Bunny Trailer.webm';
import videoPoster from '../../assets/Big Buck Bunny Trailer.jpg';
import jPlayerConnect from '../../../src/connect';

const VideoPlayer = props => (
  <JPlayer data-type="jp-default">
    <div className="jp-media">
      <Poster />
      <Video events={props.events} />
    </div>
    <Gui>
      <div className="jp-title-container">
        <Title />
      </div>
      <div className="jp-controls">
        <Play><i className="fa">{/* Icon set in css*/}</i></Play>
        <FullScreen><i className="fa fa-expand" /></FullScreen>
        <Repeat><i className="fa fa-repeat" /></Repeat>
        <PlaybackRateBar />
        <div className="jp-volume-controls">
          <Mute><i className="fa">{/* Icon set in css*/}</i></Mute>
          <VolumeBar />
        </div>
        <Progress>
          <SeekBar>
            <PlayBar />
            <Buffer />
            <CurrentTime />
            <Duration />
          </SeekBar>
        </Progress>
      </div>
    </Gui>
    <BrowserUnsupported />
  </JPlayer>
);

export const videoOptions = {
  id: 'video-player',
  muted: true,
  keyEnabled: true,
  media: {
    title: 'Big Buck Bunny Trailer',
    sources: {
      webmv,
    },
    poster: videoPoster,
  },
};

export default jPlayerConnect(VideoPlayer, videoOptions.id);
