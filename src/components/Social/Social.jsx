import React from 'react';
import { faFacebook,faGithub,faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Social.module.css'
import cx from 'classnames'

const Social = () => {
  return(
    <div className = {styles.socialContainer}>
      <h3 className = {styles.socialHeader}>@halchester</h3>
      <a href = 'https://github.com/halchester/Covid-19-tracker/' className = {cx(styles.github,styles.social)}>
        <FontAwesomeIcon icon ={faGithub} size = "2x"></FontAwesomeIcon>
      </a>
      <a href = 'https://github.com/halchester/Covid-19-tracker/' className = {cx(styles.facebook,styles.social)}>
        <FontAwesomeIcon icon ={faFacebook} size = "2x"></FontAwesomeIcon>
      </a>
      <a href = 'https://github.com/halchester/Covid-19-tracker/' className = {cx(styles.twitter,styles.social)}>
        <FontAwesomeIcon icon ={faTwitter} size = "2x"></FontAwesomeIcon>
      </a>
    </div>
  )
}
export default Social