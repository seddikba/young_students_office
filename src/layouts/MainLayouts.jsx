import React from 'react'
import {Header} from '../components'

function MainLayouts({children, ...props}) {
  return (
    <main {...props}>
        <Header />
        <div>
            {children}
        </div>
    </main>
  )
}

export default MainLayouts