import React from "react";

export default function Hero() {
    return (
        <section className="hero">
            <img src={require("../images/hero-photo.png")} className="hero--photo"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities leb by one-of-a-kind hosts-all 
                without leaving home.</p>
        </section>
    )
}