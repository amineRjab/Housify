import React from 'react'

function Profile(props) {
    console.log("ooo",props.users);
  return (
    <div>
        Welcome {props.users[0].FirstName} to your profile
    </div>
  )
}

export default Profile