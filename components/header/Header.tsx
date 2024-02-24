import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import { RiMenu3Fill } from "react-icons/ri"

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <div>
            <Link href="/" className="btn btn-ghost text-lg">
              Next Amazona V2
            </Link>
          </div>
          <div className='lg:hidden block'>
         
<RiMenu3Fill />
          </div>

          <Menu />
        </div>
        </nav>
    </header>
  )
}

export default Header