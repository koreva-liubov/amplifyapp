import React from 'react';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);
  

function App() {
  return (
    <div className="App">
	<AmplifySignOut />
      <header className="App-header">

<video
    id="my-player"
    class="video-js"
    controls
    preload="auto"
    poster="https://koreva-liubov-input-bucket.s3-us-west-2.amazonaws.com/black.png"
    data-setup='{}'>
  <source src="https://koreva-liubov-output-bucket.s3-us-west-2.amazonaws.com/10-sec-bunny_output.mp4" type="video/mp4"></source>
<p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a
    web browser that
      supports HTML5 video
  </p>
</video>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
