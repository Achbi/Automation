import React from 'react'
type Props = { children: React.ReactNode }
import Sidebar from '../components/Sidebar'
import InfoBar from '../components/infobar'

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        <InfoBar></InfoBar>
        {props.children}
      </div>
    </div>
  )
}

export default Layout