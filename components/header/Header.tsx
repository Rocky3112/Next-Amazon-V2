"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { RiMenu3Fill } from "react-icons/ri";
import useCartService from "@/lib/hooks/useStoreCart";

const Header = () => {
  const { items, init } = useCartService();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <header>
      <nav>
        <div className="lg:navbar justify-between bg-base-300 hidden ">
          <div>
            <Link href="/" className="btn btn-ghost text-lg">
              Next Amazona V2
            </Link>
          </div>

          <Menu />
        </div>
        <div className="flex justify-between items-center lg:hidden">
          <div>
            <Link href="/" className="btn btn-ghost text-lg">
              Next Amazona V2
            </Link>
          </div>
          <div className="dropdown dropdown-end lg:hidden ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <RiMenu3Fill />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3  p-2 shadow  rounded-box lg:w-52 w-44 bg-white"
            >
              <li>
                <Link
                  href="/allProducts"
                  className="btn btn-ghost rounded-btn text-lg"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link href="/men" className="btn btn-ghost rounded-btn text-lg">
                  Men
                </Link>
              </li>
              <li>
                <Link
                  href="/women"
                  className="btn btn-ghost rounded-btn text-lg"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  href="/kids"
                  className="btn btn-ghost rounded-btn text-lg"
                >
                  Kids
                </Link>
              </li>
              <li>
                <Link
                  className="btn btn-ghost rounded-btn text-lg"
                  href="/cart"
                >
                  Cart
                  {mounted && items.length != 0 && (
                    <div className="badge badge-secondary">
                      {items.reduce((a, c) => a + c.qty, 0)}{" "}
                    </div>
                  )}
                </Link>
              </li>

              <li>
                <button className="btn btn-ghost rounded-btn text-lg">
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
