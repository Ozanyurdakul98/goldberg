import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import i1 from '@/images/goldberg/i1.jpg'
import i2 from '@/images/goldberg/i2.jpg'
import i3 from '@/images/goldberg/i3.jpg'
import i4 from '@/images/goldberg/i4.jpg'
import i5 from '@/images/goldberg/i5.jpg'
import i6 from '@/images/goldberg/i6.jpg'
import i7 from '@/images/goldberg/i7.jpg'
import i8 from '@/images/goldberg/i8.jpg'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { LottieAnimation } from "@/components/LottieAnimation";

// function MailIcon(props) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//       {...props}
//     >
//       <path
//         d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
//         className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
//       />
//       <path
//         d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
//         className="stroke-zinc-400 dark:stroke-zinc-500"
//       />
//     </svg>
//   )
// }

// function BriefcaseIcon(props) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//       {...props}
//     >
//       <path
//         d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
//         className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
//       />
//       <path
//         d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
//         className="stroke-zinc-400 dark:stroke-zinc-500"
//       />
//     </svg>
//   )
// }

// function ArrowDownIcon(props) {
//   return (
//     <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
//       <path
//         d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   )
// }

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Mehr lesen</Card.Cta>
    </Card>
  )
}

const people = [
  {
    name: 'Emma Dorsey',
    role: 'Senior Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Emma Dorsey',
    role: 'Senior Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Emma Dorsey',
    role: 'Senior Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Emma Dorsey',
    role: 'Senior Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]

function Example() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}


function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[i4, i6, i3, i7, i5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  

  return (
    <>
      {/* heading */}
      <Container className="mt-40">
        <div className="max-w-2xl mb-7">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Goldberg Catering GmbH
          </h1>
          <p className="mt-6 text-base font-medium lg:text-[17px] text-zinc-500 dark:text-zinc-400">
          Erstklassiges Premium-Catering. Bester Catering-Service aus Frankfurt am Main für Events und Veranstaltungen mit herausragender Gastronomie. Mit Fokus auf Qualität, frischen, regionalen und saisonalen Zutaten bieten wir die gesamte Bandbreite an Catering-Services an.
          </p>
        </div>
        <div className="relative">
        <Image
          src={i2}
          alt=""
          sizes="(max-width: 640px) 18rem, 50rem"
          className="rounded-xl h-full aspect-video object-top w-full object-cover"
          />
        </div>
      </Container>
      <Photos />
      {/* marquee */}
      <Container marquee={true} className="mt-20">
      
        <div class="relative flex overflow-hidden text-[#b3a797] dark:text-zinc-400">
  <div class="py-12 animate-marquee whitespace-nowrap">
    <span class="text-4xl mx-4">Premium Catering</span>
    <span class="text-4xl mx-4">Feinkost</span>
    <span class="text-4xl mx-4">Aus dem Taunus</span>
    <span class="text-4xl mx-4">Events</span>
    <span class="text-4xl mx-4">Messecatering</span>
    <span class="text-4xl mx-4">Standcatering</span>

  </div>
  <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
  <span class="text-4xl mx-4">Premium Catering</span>
    <span class="text-4xl mx-4">Feinkost</span>
    <span class="text-4xl mx-4">Aus dem Taunus</span>
    <span class="text-4xl mx-4">Events</span>
    <span class="text-4xl mx-4">Messecatering</span>
    <span class="text-4xl mx-4">Standcatering</span>
  </div>
  <div class="py-12 absolute top-12 animate-marquee whitespace-nowrap">
  <span class="text-4xl mx-4">Messe-Caterer</span>
    <span class="text-4xl mx-4">Gastronomie</span>
    <span class="text-4xl mx-4">Einzigartige Events</span>
    <span class="text-4xl mx-4">Hochzeiten</span>
    <span class="text-4xl mx-4">Party Service</span>
              <span class="text-4xl mx-4">Weine</span>
              <span class="text-4xl mx-4">Genuss</span>

  </div>
  <div class="absolute top-12 py-12 animate-marquee2 whitespace-nowrap">
  <span class="text-4xl mx-4">Messe-Caterer</span>
    <span class="text-4xl mx-4">Gastronomie</span>
    <span class="text-4xl mx-4">Einzigartige Events</span>
    <span class="text-4xl mx-4">Hochzeiten</span>
    <span class="text-4xl mx-4">Party Service</span>
    <span class="text-4xl mx-4">Weine</span>
    <span class="text-4xl mx-4">Genuss</span>
  </div>
        </div>
         
        </Container>
      <Container className="mt-16">
        {/* banner */}
        <div className="mx-auto max-w-xl lg:max-w-none">
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      {/* left */}
          <div className="lg:pr-4">
            <div className="relative h-[700px] overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                className="absolute  inset-0 h-full w-full object-cover"
                src={i8}
                alt=""
                    />
                </div>
          </div>
          {/* right */}
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-[#b3a797]">Company values</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                On a mission to empower remote teams
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                  vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                  erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                  semper sed amet vitae sed turpis id.
                </p>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                  auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
                  hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                  auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
                  hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
              </div>
            </div>
             
            <div className="mt-10 flex">
              <a href="#" className="text-base font-semibold leading-7 text-[#b3a797]">
                Learn more about our company <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
        {/* cards */}
        <div className="mx-auto max-w-xl lg:max-w-none">
          <Example/>
        </div>
        {/* grid col2 */}
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
           {/* Unser Catering */}
            <section className='bg-[#b3a797]/30 dark:bg-slate-700/40 rounded-md shadow-xl text-gray-700 dark:text-white px-5 py-10'>
              <h3 className='text-2xl text-[#b3a797] font-bold mb-2'>Das Catering</h3>
              <p className='leading-relaxed'>
              Das Catering wird in unterschiedlichsten Bereichen eingesetzt und zeigt sich als besonders facettenreiches Einsatzgebiet. Umso höher sind die Anforderungen an das Personal. Professionalität, Teamfähigkeit und ein geschulter Umgang mit den Gästen sind Voraussetzung, um einen reibungslosen Ablauf gewährleisten zu können. Doch keine Sorge: Wir finden dank unserer Erfahrung auch in diesem anspruchsvollen Bereich für Sie immer die perfekte Unterstützung Ihres Teams.
              Durch unsere Vielseitigkeit innerhalb der Berufsfelder sind wir in verschiedensten Gastronomiebereichen präsent und unterstützen Catering aller Art. Dabei engagieren wir uns insbesondere auch im Airline- und Eventcatering. Egal ob Koch, Servicekraft oder Logistiker, von Kleinstveranstaltung bis zum Großevent.
              </p>
            </section>
            {/* articles */}
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          {/* right side */}
          <div className="space-y-10 max-lg:-order-1 px-20">
          {/* <div className="space-y-10 lg:pl-16 xl:pl-24"> */}
            {/* <Newsletter />
            */}
            <LottieAnimation/>
             {/* 
           */}
          </div>
        </div>
      </Container>
    </>
  )
}
