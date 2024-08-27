import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

  const { usuario } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if(usuario.token !== '') {
    footerComponent = (
      <>
        <div className="flex justify-center bg-indigo-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Blog pessoal Weida Winy | Copyright: {data}</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer