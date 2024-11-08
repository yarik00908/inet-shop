import React from 'react'
import ContentLoader from "react-content-loader"

const UserSceleton = () => {
  return (
    <ContentLoader 
    speed={2}
    width={240}
    height={400}
    viewBox="0 0 240 400"
    // backgroundColor="#000"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="75" cy="75" r="45" /> 
    <rect x="30" y="141" rx="5" ry="5" width="161" height="21" /> 
    <rect x="30" y="168" rx="5" ry="5" width="106" height="19" /> 
    <rect x="30" y="234" rx="5" ry="5" width="117" height="22" /> 
    <rect x="30" y="292" rx="5" ry="5" width="117" height="22" /> 
    <rect x="30" y="349" rx="5" ry="5" width="117" height="22" /> 
  </ContentLoader>
  )
}

export default UserSceleton