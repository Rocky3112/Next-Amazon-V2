"use client"
import useCartService from '@/lib/hooks/useStoreCart'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Menu = () => {
    const { items, init } = useCartService()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
      setMounted(true)
    }, [])

  return (
    <>
        <ul className='flex items-stretch'>
            <li>
                <Link  className='btn btn-ghost rounded-btn' href="/cart">Cart 
                {mounted && items.length != 0 && (
                <div className="badge badge-secondary">
                  {items.reduce((a, c) => a + c.qty, 0)}{' '}
                </div>
              )}
                    
                </Link>
            </li>
            <li>
                <button className='btn btn-ghost rounded-btn'>
                    Sign In
                </button>
            </li>
        </ul>
    </>
  )
}

export default Menu