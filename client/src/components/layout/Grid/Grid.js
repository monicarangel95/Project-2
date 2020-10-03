import React, { Component } from 'react'
import "./Grid.css";
import artist from './artist.jpg';
import events from './events.jpg';
import music from './music.jpg';

function Grid() {
    return (
        <div>
            <section id="photos" class="container section" style={{ marginTop: "30px" }}>
                  {/*  Search your favorite artist */}
                <div class="row">
                    <div class="col s12 l4 push-l2">
                        <img src={artist} alt="Picture of an Artist on Stage" class="responsive-img z-depth-2" />
                    </div>
                    <div class="col s12 m6 l6 offset-l1">
                        <h3 class="indigo-text text-darken 4">Search Your Favorite Artists</h3>
                        <p>Search for your favorite artists to find out their albums, top songs, and upcoming events around the world.</p>
                    </div>
                </div>
                {/* Look for upcoming events */}
                <div class="row">
                    <div class="col s12 l4 push-l7">
                        <img src={events} alt="Picture of an Artist on Stage" class="responsive-img z-depth-2" />
                    </div>
                    <div class="col s12 l6 pull-l4 offset-l1">
                        <h3 class="indigo-text text-darken 4">Look for Upcoming Events</h3>
                        <p>Look for upcoming events for artists you like. Find events all over the world or right in your city! Follow specific artists to see they have new events.</p>
                    </div>
                </div>
                {/* Find An Artist's Top Songs */}
                <div class="row">
                    <div class="col s12 l4 push-l2">
                        <img src={music} alt="Picture of an Artist on Stage" class="responsive-img z-depth-2" />
                    </div>
                    <div class="col s12 l6 offset-l1">
                        <h3 class="indigo-text text-darken 4">Find An Artist's Top Songs</h3>
                        <p>When searching for your artists, find out their albums and their top songs. Listen to their song and find new songs you haven't heard from them.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Grid