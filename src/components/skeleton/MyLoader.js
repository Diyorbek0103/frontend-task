import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="48" y="8" rx="10" ry="10" width="88" height="20" /> 
    <rect x="48" y="26" rx="10" ry="10" width="52" height="20" /> 
    <rect x="0" y="56" rx="10" ry="10" width="410" height="20" /> 
    <rect x="0" y="72" rx="10" ry="10" width="380" height="20" /> 
    <rect x="0" y="88" rx="10" ry="10" width="178" height="20" /> 
    {/* <circle cx="20" cy="20" r="20" /> */}
  </ContentLoader>
)

export default MyLoader
