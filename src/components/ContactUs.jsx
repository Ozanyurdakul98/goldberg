'use client'

import Image from 'next/image'
import goldberglogo from '@/images/logos/goldberglogo.png'
import face from '@/images/face.png'
import clsx from 'clsx'

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function ContactUs() {
    async function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        try {
            const response = await fetch('/api/contact', {
                method: 'post',
                body: formData,
            })

            if (!response.ok) {
                console.log('falling over')
                throw new Error(`response status: ${response.status}`)
            }
            const responseData = await response.json()
            console.log(responseData['message'])

            alert('Kontaktanfrage erfolgreich gesendet')
        } catch (err) {
            console.error(err)
            alert('Fehler beim senden der Kontaktanfrage')
        }
    }

    return (
        <div className="relative isolate bg-white dark:bg-transparent text-gray-900 dark:text-zinc-400 px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-xl lg:max-w-4xl">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-zinc-400">
                    Kontaktieren Sie uns für ein unvergessliches
                    Catering-Erlebnis
                </h2>
                <p className="mt-2 text-lg leading-8 text-zinc-500 dark:text-zinc-400">
                    Wir freuen uns darauf, Ihre Veranstaltung mit unserem
                    exquisiten Service zu bereichern und unvergessliche Momente
                    zu schaffen.
                </p>
                <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                    <form
                        onSubmit={handleSubmit}
                        action="#"
                        method="POST"
                        className="lg:flex-auto"
                    >
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-semibold leading-6 text-zinc-500 dark:text-zinc-400"
                                >
                                    Vorname
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        required
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-500 dark:text-zinc-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="last-name"
                                    className="block text-sm font-semibold leading-6 text-zinc-500 dark:text-zinc-400"
                                >
                                    Nachname
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        required
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-500 dark:text-zinc-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="budget"
                                    className="block text-sm font-semibold leading-6 text-zinc-500 dark:text-zinc-400"
                                >
                                    Budget
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="budget"
                                        name="budget"
                                        type="text"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-500 dark:text-zinc-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="website"
                                    className="block text-sm font-semibold leading-6 text-zinc-500 dark:text-zinc-400"
                                >
                                    Tel./E-Mail
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="website"
                                        id="website"
                                        required
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-500 dark:text-zinc-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold leading-6 text-zinc-500 dark:text-zinc-400"
                                >
                                    Nachricht
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-500 dark:text-zinc-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-[#C3A433] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#D3A433] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sprechen wir über Ihr Event
                            </button>
                        </div>
                        <p className="mt-4 text-[10px] leading-6 text-zinc-500 dark:text-zinc-400">
                            Durch das Absenden Ihrer Nachricht stimmen Sie zu,
                            dass wir Ihre Daten zum Zwecke der Bearbeitung
                            speichern dürfen. Wir behandeln Ihre Informationen
                            vertraulich und geben sie nicht weiter. Sie können
                            Ihre Einwilligung jederzeit widerrufen. Weitere
                            Details finden Sie in unserer Datenschutzerklärung.
                        </p>
                    </form>
                    <div className="lg:mt-6 lg:w-80 bg-white dark:bg-transparent lg:flex-none">
                        <div className="w-full bg-white dark:bg-transparent rounded-full flex justify-center">
                            <Image
                                src={goldberglogo}
                                width={1000}
                                height={1000}
                                quality={70}
                                alt=""
                                className={clsx('h-32 w-32')}
                            />
                        </div>
                        <figure className="mt-10 bg-white dark:bg-transparent rounded-3xl">
                            <blockquote className="text-lg font-semibold leading-8 text-zinc-500 dark:text-zinc-400">
                                <p>
                                    “Bei Goldberg Catering & Events vereinen wir
                                    Leidenschaft und Professionalität, um jedes
                                    Catering-Erlebnis einzigartig zu machen.”
                                </p>
                            </blockquote>
                            <figcaption className="mt-10 flex gap-x-6">
                                <Image
                                    src={face}
                                    alt=""
                                    quality={70}
                                    layout="cover"
                                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                />
                                <div>
                                    <div className="text-base font-semibold text-zinc-900 dark:text-zinc-400">
                                        Deniz Celik
                                    </div>
                                    <div className="text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                                        Geschäftsführer
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}
