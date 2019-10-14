import React from "react"

const Footer = (props) => {
  return (<footer>
<div className='row sub-footer'>
<div className='columns'>
<ul>
<li><a href="https://launchacademy.com/blog">Blog</a></li>
<li><a href="https://launchacademy.com/codecabulary">Codecabulary</a></li>
<li><a href="https://launchacademy.com/team">Team</a></li>
<li><a href="https://launchacademy.com/#contact-us-section">Contact Us</a></li>
<li><a href="https://launchacademy.com/privacy_policy">Privacy</a></li>
<li className='social-media'>
<a href="https://www.facebook.com/TheLaunchAcademy"><i className='fa fa-facebook-square'></i>
</a></li>
<li className='social-media'>
<a href="https://twitter.com/LaunchAcademy"><i className='fa fa-twitter-square'></i>
</a></li>
</ul>
<div className='copyright'>
© Copyright {new Date().getFullYear()} Launch Academy Holdings, Inc.
<a href="https://launchacademy.com/terms_and_conditions">Terms &amp; Conditions</a>
</div>
</div>
</div>
</footer>)
}

export default Footer