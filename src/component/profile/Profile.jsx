import React from "react"

import profilepic from "./profilepic.jpg"
import Button from "react-bootstrap/Button"
import "./Profile.css"
import { ArrowRight } from "react-bootstrap-icons"
import { StarFill } from "react-bootstrap-icons"

function Profile() {
  return (
    <div class='profilepicparentdiv'>
      <hr></hr>

      <div className='profileDiv'>
        <img src={profilepic} alt='profile' />
        <span id='name'>Design shop interior</span>
        <Button variant='primary' className='followbtn'>
          Follow
        </Button>
        <div className='Rating'>
          <StarFill color='yellow' size={20} />
          <StarFill color='yellow' size={20} />{" "}
          <StarFill color='yellow' size={20} />{" "}
          <StarFill color='yellow' size={20} />{" "}
          <StarFill color='yellow' size={20} />
          <bold>
            <sub>111 Reviews</sub>
          </bold>
        </div>
      </div>

      <hr></hr>
    </div>
  )
}

export default Profile
