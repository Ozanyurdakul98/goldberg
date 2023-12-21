'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import goldberglogo from '@/images/logos/goldberglogo.jpeg'
import { FacebookIcon, InstagramIcon } from './SocialIcons'

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SunIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavItem({ href, children }) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  )
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <MobileNavItem href="/">Startseite</MobileNavItem>
                <MobileNavItem href="/kontakt">Kontakt</MobileNavItem>
                <MobileNavItem href="https://www.instagram.com/goldbergpersonal/" target="_blank"><InstagramIcon className="relative z-0 h-4 w-4"/></MobileNavItem>
                <MobileNavItem href="https://www.facebook.com/goldberg.deutschland/" target="_blank"><FacebookIcon className="relative z-0 h-4 w-4"/></MobileNavItem>
               </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavItem({ href, children, target }) {
  let isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative z-20 block px-3 py-2 transition',
          isActive
            ? 'text-[#b3a797] dark:text-[#b3a797]'
            : 'hover:text-[#b3a797] dark:hover:text-[#b3a797]',
            // ? 'text-teal-500 dark:text-teal-400'
            // : 'hover:text-teal-500 dark:hover:text-teal-400',
        )}
        target={target}
      >
        {children}
        {isActive && (
          <span className="absolute z-10 inset-x-1 -bottom-px h-px bg-gradient-to-r from-[#b3a797]/0 via-[#b3a797]/40 to-[#b3a797]/0 dark:from-[#b3a797]/0 dark:via-[#b3a797]/40 dark:to-[#b3a797]/0" />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className="flex items-center rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="/">Startseite</NavItem>
        <NavItem href="/kontakt">Kontakt</NavItem>
        <NavItem href="https://www.instagram.com/goldbergpersonal/" target="_blank"><InstagramIcon className="relative z-0 h-4 w-4"/></NavItem>
        <NavItem href="https://www.facebook.com/goldberg.deutschland/" target="_blank"><FacebookIcon className="relative z-0 h-4 w-4"/></NavItem>
       </ul>
    </nav>
  )
}

function ThemeToggle() {
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(otherTheme)}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-[#b3a797] [@media(prefers-color-scheme:dark)]:stroke-[#b3a797] [@media(prefers-color-scheme:dark)]:group-hover:fill-[#b3a797] [@media(prefers-color-scheme:dark)]:group-hover:stroke-[#b3a797]" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-[#b3a797]/10 [@media_not_(prefers-color-scheme:dark)]:stroke-[#b3a797]" />
    </button>
  )
}


function AvatarContainer({ className,large, ...props }) {
  return (
    <div
      className={clsx(
        className, large?" " : 'h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10',
      )}
      {...props}
    />
  )
}

function Avatar({ large = false, className, ...props }) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <Image
        src={goldberglogo}
        alt=""
        className={clsx(
          'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
          large ? 'h-16 w-16' : 'h-9 w-9',
        )}
        priority
      />
    </Link>
  )
}

export function Header() {
  let isHomePage = usePathname() === '/'
  let headerRef = useRef(null)

  // useEffect(() => {
  //   let downDelay = avatarRef.current?.offsetTop ?? 0
  //   let upDelay = 64

  //   function setProperty(property, value) {
  //     document.documentElement.style.setProperty(property, value)
  //   }

  //   function removeProperty(property) {
  //     document.documentElement.style.removeProperty(property)
  //   }

  //   function updateHeaderStyles() {
  //     if (!headerRef.current) {
  //       return
  //     }

  //     let { top, height } = headerRef.current.getBoundingClientRect()
  //     let scrollY = clamp(
  //       window.scrollY,
  //       0,
  //       document.body.scrollHeight - window.innerHeight,
  //     )

  //     if (isInitial.current) {
  //       setProperty('--header-position', 'sticky')
  //     }

  //     setProperty('--content-offset', `${downDelay}px`)

  //     if (isInitial.current || scrollY < downDelay) {
  //       setProperty('--header-height', `${downDelay + height}px`)
  //       setProperty('--header-mb', `${-downDelay}px`)
  //     } else if (top + height < -upDelay) {
  //       let offset = Math.max(height, scrollY - upDelay)
  //       setProperty('--header-height', `${offset}px`)
  //       setProperty('--header-mb', `${height - offset}px`)
  //     } else if (top === 0) {
  //       setProperty('--header-height', `${scrollY + height}px`)
  //       setProperty('--header-mb', `${-scrollY}px`)
  //     }

  //     if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
  //       setProperty('--header-inner-position', 'fixed')
  //       removeProperty('--header-top')
  //       removeProperty('--avatar-top')
  //     } else {
  //       removeProperty('--header-inner-position')
  //       setProperty('--header-top', '0px')
  //       setProperty('--avatar-top', '0px')
  //     }
  //   }

  //   function updateAvatarStyles() {
  //     if (!isHomePage) {
  //       return
  //     }

  //     let fromScale = 1
  //     let toScale = 36 / 64
  //     let fromX = 0
  //     let toX = 2 / 16

  //     let scrollY = downDelay - window.scrollY

  //     let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
  //     scale = clamp(scale, fromScale, toScale)

  //     let x = (scrollY * (fromX - toX)) / downDelay + toX
  //     x = clamp(x, fromX, toX)

  //     setProperty(
  //       '--avatar-image-transform',
  //       `translate3d(${x}rem, 0, 0) scale(${scale})`,
  //     )

  //     let borderScale = 1 / (toScale / scale)
  //     let borderX = (-toX + x) * borderScale
  //     let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

  //     setProperty('--avatar-border-transform', borderTransform)
  //     setProperty('--avatar-border-opacity', scale === toScale ? '1' : '0')
  //   }

  //   function updateStyles() {
  //     updateHeaderStyles()
  //     updateAvatarStyles()
  //     isInitial.current = false
  //   }

  //   updateStyles()
  //   window.addEventListener('scroll', updateStyles, { passive: true })
  //   window.addEventListener('resize', updateStyles)

  //   return () => {
  //     window.removeEventListener('scroll', updateStyles)
  //     window.removeEventListener('resize', updateStyles)
  //   }
  // }, [isHomePage])

  return (
    <>
      <header
        className="pointer-events-none inset-x-0 mx-auto fixed z-50 flex flex-none justify-center"
        style={{
          height: 'var(--header-height)',
          marginBottom: 'var(--header-mb)',
        }}>
        <div
          ref={headerRef}
          className="relative flex z-10 h-16 pt-6">
          {/* avatar */}
          <div className="w-full absolute max-lg:-left-20 top-5">
                  <AvatarContainer
                    large
                    className=" top-3 origin-left transition-opacity"
                    style={{
                      opacity: 'var(--avatar-border-opacity, 0)',
                      transform: 'var(--avatar-border-transform)',
                    }}/>
                  <Avatar
                    large
                    className="block h-16 w-28 origin-left"
                    style={{ transform: 'var(--avatar-image-transform)' }}/>
          </div>
          <Container
            className="top-[var(--header-top,theme(spacing.6))] w-full"
            style={{
              position: 'var(--header-inner-position)',
            }}>
            <div className="relative flex gap-4">
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div>
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  )
}
