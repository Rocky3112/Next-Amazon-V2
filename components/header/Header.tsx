import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <nav>
            <div className=' navbar justify-between bg-base-300 px-8'>
                <Link href="/" className='btn btn-ghost bg-base-300 uppercase text-xl'>
                Next Amazon V2
                </Link>
                <ul>
                    <li>
                        <Link href="/cart" className='btn btn-ghost '>Cart</Link>
                    </li>
                    <li>
                        <Link href="/login" className='btn btn-ghost '>Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header