import React from 'react'
type Props = { children: React.ReactNode }
import Sidebar from '../components/Sidebar'

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        {props.children}
      </div>
    </div>
  )
}

export default Layout