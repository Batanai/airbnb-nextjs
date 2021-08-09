import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb plus</p>
        <p>Airbnb Lux</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Its a clone</p>
        <p>Awesome</p>
        <p>Thanks</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Papa react</p>
        <p>Presents</p>
        <p>Zero to full stack hero</p>
        <p>the react GOAT</p>
        <p>Join now</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help centre</p>
        <p>Trust and safety</p>
        <p>Say hi youTube</p>
        <p>Easter eggs</p>
        <p>For the win</p>
      </div>
    </div>
  );
};

export default Footer;
