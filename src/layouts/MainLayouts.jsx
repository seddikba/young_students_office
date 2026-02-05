import React from 'react'
import {Header} from '../components'

function MainLayouts({children}) {
  return (
    <main>
        <Header />
        <div>
            {children}
        </div>
    </main>
  )
}

export default MainLayouts