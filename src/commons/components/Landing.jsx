/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import HeaderSection from './HeaderSection';
import '../CSS/Landing.scss';
export default function Landing() {
  return (

    <div className="mainPage">

      <HeaderSection />
      <div className="brand">
        <p>The internet is increasingly becoming an integral part of lives.
        Ever since the invention of electronic mail by Ray Tomlinson,
        emails have grown to become the primary medium of exchanging
        information over the internet between two or more people,
        until the advent of Instant Messaging (IM) Apps.</p>

        <p>As EPIC Andelans who work towards advancing human potential 
        and giving back to the society, we wish to empower others by
        having a web app that helps people exchange 
        messages/information over the internet.</p>
        
      </div>
    </div>
  );
}
