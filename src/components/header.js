import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../sass/application.scss"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Header = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "launch-logo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 60, height: 60) {
            src,
            width,
            height
          }
        }
      }
    }
  `)
  return (
  <div className="contain-to-grid full-top-bar">
  <nav className="top-bar" data-topbar role="navigation">
    <ul className="title-area">
      <li className="name">
        <a href="https://launchacademy.com">
          <img className="logo" src={data.file.childImageSharp.fixed.src} />
        </a>
        <h1>
          <a href="https://launchacademy.com">
            Launch
            <strong>Academy</strong>
          </a>
        </h1>
      </li>
      <li className="toggle-topbar menu-icon">
        <a href="#">
          <span></span>
        </a>
      </li>
    </ul>
    <section className="top-bar-section">
      <ul className="left">
        <li>
          <a href="/">Codecabulary</a>
        </li>
      </ul>
      <ul className="right">
        <li>
          <a href="https://github.com/launchacademy/codecabulary">Github</a>
        </li>
      </ul>
    </section>
  </nav>
</div>)

}



export default Header
