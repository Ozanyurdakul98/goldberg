import Link from 'next/link'
import goldberglogo from '@/images/logos/goldberglogo.png'

import { ContainerOuter } from '@/components/Container'
import Image from 'next/image'
import clsx from 'clsx'

const navigation = {
    main: [
        { name: 'Startseite', href: '/' },
        { name: 'Kontakt', href: '/kontakt' },
    ],
    social: [
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/goldberg.deutschland/',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/goldbergpersonal/',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
}

function NavLink({ href, children }) {
    return (
        <Link
            href={href}
            className="transition hover:text-teal-500 dark:hover:text-teal-400"
        >
            {children}
        </Link>
    )
}

export function Footer() {
    return (
        <footer className="">
            <ContainerOuter>
                <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
                    <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                        <div className="w-full flex justify-center">
                            <Image
                                src={goldberglogo}
                                width={1000}
                                height={1000}
                                alt=""
                                className={clsx('h-48 w-48')}
                                quality={70}
                            />
                        </div>
                        <nav
                            className="-mb-6 columns-2 flex justify-center space-x-12"
                            aria-label="Footer"
                        >
                            {navigation.main.map((item) => (
                                <div key={item.name} className="pb-6">
                                    <a
                                        href={item.href}
                                        className="text-sm leading-6 text-gray-400 hover:text-gray-700 hover:dark:text-gray-700"
                                    >
                                        {item.name}
                                    </a>
                                </div>
                            ))}
                        </nav>
                        <div className="mt-10 flex justify-center space-x-10">
                            {navigation.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-400 hover:text-gray-500"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </a>
                            ))}
                        </div>
                        <p className="mt-10 flex flex-col text-center text-xs leading-5 text-gray-400 dark:text-gray-400">
                            <span>
                                Goldberg Catering & Events in der Kronberg
                                Academy
                            </span>
                            <span>Beethovenplatz 1</span>
                            <span>61674 Kronberg im Taunus</span>
                        </p>
                        <p className="mt-4 flex gap-2 justify-center flex-row text-center text-xs leading-5 text-zinc-400 dark:text-gray-400">
                            <a href="tel:+49 (0) 6107 40 58 610">
                                +49 (0) 6107 40 58 610
                            </a>
                            <a href="mailto: anfrage@goldberg-catering.de">
                                anfrage@goldberg-catering.de
                            </a>
                        </p>

                        <p className="mt-10 text-center text-xs leading-5 text-zinc-400 dark:text-gray-400">
                            &copy; {new Date().getFullYear()} Goldberg Catering
                            & Events. Alle Rechte vorbehalten.
                        </p>
                    </div>
                </div>
            </ContainerOuter>
        </footer>
    )
}
