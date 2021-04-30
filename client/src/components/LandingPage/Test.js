import React from "react";
import MediaQuery from "react-responsive";

function Test() {
  const Example = () => (
    <h2>
      <h2>Device Test!</h2>
      {/* <MediaQuery minDeviceWidth={360}>
        <h2>You are a desktop or laptop</h2>
        <MediaQuery minDeviceWidth={1824}>
          <h2>You also have a huge screen</h2>
        </MediaQuery>
        <MediaQuery maxWidth={1224}>
          <h2>You are sized like a tablet or mobile phone though</h2>
        </MediaQuery>
      </MediaQuery> */}

      <MediaQuery minDeviceWidth={360}>
        <h2>mini device width 360</h2>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={600}>
        <h2>max device width 360</h2>
      </MediaQuery>
      {/* <MediaQuery orientation="portrait">
        <h2>You are portrait</h2>
      </MediaQuery>
      <MediaQuery orientation="landscape">
        <h2>You are landscape</h2>
      </MediaQuery>
      <MediaQuery minResolution="2dppx">
        <h2>You are retina</h2>
      </MediaQuery> */}
    </h2>
  );
  return (
    <h2>
      <Example />
    </h2>
  );
}

export default Test;
