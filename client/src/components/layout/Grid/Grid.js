import React from 'react';
import "./Grid.css";
import artist from './artist.jpg';
import events from './events.jpg';
import music from './music.jpg';

function Grid() {
    return (
        <div>
            <section id="photos" className="container section" style={{ marginTop: "30px" }}>
                  {/*  Search your favorite artist */}
                <div className="row">
                    <div className="col s12 m6 l4 push-l1 xl4 push-xl1">
                        <img src={artist} alt="Artist on Stage" className="responsive-img z-depth-2" />
                    </div>
                    <div className="col s12 m6 l6 offset-l1">
                        <h3 className="indigo-text text-darken 4">Search Your Favorite Artists</h3>
                        <p>Search for your favorite artists to find out their albums, top songs, and upcoming events around the world.</p>
                    </div>
                </div>
                {/* Look for upcoming events */}
                <div className="row">
                    <div className="col s12 m6 l4 push-l7 xl4 push-xl7">
                        <img src={events} alt="Concert Event" className="responsive-img z-depth-2" />
                    </div>
                    <div className="col s12 m6 l6 pull-l4 offset-l1">
                        <h3 className="indigo-text text-darken 4">Look for Upcoming Events</h3>
                        <p>Look for upcoming events for artists you like. Find events all over the world or right in your city! Follow specific artists to see they have new events.</p>
                    </div>
                </div>
                {/* Find An Artist's Top Songs */}
                <div className="row">
                    <div className="col s12 m6 l4 push-l1 xl4 push-xl1">
                        <img src={music} alt="Artist Playing Songs" className="responsive-img z-depth-2" />
                    </div>
                    <div className="col s12 m6 l6 offset-l1">
                        <h3 className="indigo-text text-darken 4">Find An Artist's Top Songs</h3>
                        <p>When searching for your artists, find out their albums and their top songs. Listen to their song and find new songs you haven't heard from them.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Grid
