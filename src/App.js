import React from 'react';
import Airbnb from './components/Airbnb';

import Redroom from './images/redroom.jpg';
import Stars from './images/stars.jpg';
import Cooper from './images/cooper.png';

import Overlook from './images/overlook.jpg';
import Wendy from './images/wendy.png';

import Bathhouse from './images/bathhouse.png';
import Noface from './images/noface.gif';


import './App.css';

function App() {
  return (
    <div className = "wrapper">
      <div className = "columnOne">
        <Airbnb
          image = {Redroom}
          star = {Stars}
          review = "A reasonably swell place. The coffee was lacking but those Douglas Firs sure made up for it. I particularly enjoyed the red room; pretty comfy if not a little unearthly."
          profile = {Cooper}
          name = "Special Agent Dale Cooper"
          location = "Twin Peaks"
        />
      </div>
      <div className = "columnTwo">
      <Airbnb
          image = {Overlook}
          star = {Stars}
          review = "The Overlook Hotel is absolutely beautiful and apart from two young twin girls, we seem to have the place to ourselves! Really cosy in the winter time."
          profile = {Wendy}
          name = "Wendy Torrance"
          location = "Colorado Rockies"
      />
      </div>
      <div className = "columnThree">
      <Airbnb
          image = {Bathhouse}
          star = {Stars}
          review = "The owners are so generous here, wow! They keep bringing me food, I'm having an absolute blast! I'm gonna get fat at this rate."
          profile = {Noface}
          name = "No-Face"
          location = "Another realm"
      />
      </div>
    </div>
   
  );
}

export default App;
