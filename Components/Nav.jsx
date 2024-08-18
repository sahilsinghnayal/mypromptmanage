"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

function Nav() {
  const isuserLoggedIn = true;
  const [provider , setProvider] = useState(null)
  useEffect(() => { 
    const setProviders = async () => {
      const response = await getProviders()
      setProviders(response)
    }
    // setProviders()
  }, [])
  return (
    <nav className="flex-between w-full mb-16 pt-3 ">
      <Link href="/" className="flex gap-2">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">My Prompt Manager</p>
      </Link>

      {/* { desktop navigation } */}
      <div className="sm:flex hidden">
        {isuserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>
            <Link  href="/profile" >
              <Image
                src="/assets/images/logo.svg"
                alt="Profile"
                width={37}
                height={37}
                className="round-full"
              />
              </Link>
          </div>
        ) : (
          <> 
          {provider && Object.values(provider).map((provider) => (
            <button type="button" onClick={() => signIn(provider.id)} className="black_btn" key={provider.name}>
              Sign In with {provider.name}
            </button>
          ))}
          
          
           </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
