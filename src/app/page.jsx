import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import i1 from '@/images/goldberg/i1.jpg'
import i2 from '@/images/goldberg/i2.jpg'
import i3 from '@/images/goldberg/i3.jpg'
import i4 from '@/images/goldberg/i4.jpg'
import i5 from '@/images/goldberg/i5.jpg'
import i6 from '@/images/goldberg/i6.jpg'
import i7 from '@/images/goldberg/i7.jpg'
import i8 from '@/images/goldberg/i8.jpg'
import { LottieAnimation } from "@/components/LottieAnimation";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

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

// function Article({ article }) {
//   return (
//     <Card as="article">
//       <Card.Title href={`/articles/${article.slug}`}>
//         {article.title}
//       </Card.Title>
//       <Card.Eyebrow as="time" dateTime={article.date} decorate>
//         {formatDate(article.date)}
//       </Card.Eyebrow>
//       <Card.Description>{article.description}</Card.Description>
//       <Card.Cta>Mehr lesen</Card.Cta>
//     </Card>
//   )
// }

const food = [
  {
    name: 'Party Service',
    role: 'Ihre Privatfeier, Ihre Firmenfeier, Ihre Geburtstagsfeier',
    imageUrl: image3,
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Traumhochzeit',
    role: 'Maßgeschneidert, einzigartig und vor allem: unvergesslich.',
    imageUrl: i4,
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Feinkost Catering',
    role: 'Ob Buffet oder Fingerfood, Brotzeit oder Barbecue',
    imageUrl: image2,
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Messe Catering',
    role: 'Gästebewirtung an Ihrem Messestand mit Speisen, Getränke sowie Equipment',
    imageUrl: image1,
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
]

function Example() {
  return (
    <div className="bg-white py-16 dark:bg-transparent">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 lg:px-8">
        {/* heading */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-zinc-400 sm:text-4xl">Unsere hausinternen Leistungen</h2>
          <p className="mt-6 text-lg leading-8 text-zinc-500 dark:text-zinc-400">
            Wir sind Ihr Ansprechpartner für Veranstaltungen bei Ihnen zu Hause oder zu einem geschäftlichen Anlass bei uns im Stammhaus. Selbstverständlich liefern wir Ihnen auch Ihre Wunschgerichte direkt zu Ihnen nach Hause für ein Abendessen mit der Familie oder mit Freunden.
          </p>
        </div>
        {/* cards */}
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8"
        >
          {food.map((person) => (
            <li className="shadow-xl rounded-2xl relative" key={person.name}>
              <Image priority className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <div className="max-w-xs max-lg:max-w-[14rem] absolute max-lg:bottom-0 max-lg:bg-white/90 max-sm:max-w-xs max-sm:bg-white max-lg:rounded-bl-xl bottom-10 bg-white border  w-full px-2 rounded-r-xl">
              <h3 className="mt-5 text-lg max-lg:text-base font-semibold leading-8 text-gray-900">{person.name}</h3>
              <p className="text-base max-lg:text-sm mb-1 font-extralight leading-7 text-gray-600">{person.role}</p>
              </div>
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
              priority
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export const metadata = {
  title: 'Goldberg Catering Events - Gemeinsam für ein unvergessliches Event',
  description: 'Erstklassiges Premium-Catering. Bester Catering-Service aus Frankfurt am Main für Events und Veranstaltungen mit herausragender Gastronomie. Mit Fokus auf Qualität, frischen, regionalen und saisonalen Zutaten bieten wir die gesamte Bandbreite an Catering-Services an.',
}

export default async function Home() {
  // let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      {/* heading */}
      <Container className="mt-40">
        <div className="max-w-2xl mb-7">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Goldberg Catering Events
          </h1>
          <p className="mt-6 text-base font-medium lg:text-[17px] text-zinc-500 dark:text-zinc-400">

 Wir setzen auf unvergleichliche Qualität, indem wir jedes Gericht und jede Feinkost in unseren eigenen Küchen von Hand zubereiten. Von der Auswahl der frischesten Zutaten bis zur kunstvollen Präsentation garantieren wir, dass jedes kulinarische Erlebnis bei uns ein Meisterwerk der Handwerkskunst ist. Vertrauen Sie auf unsere Liebe zum Detail, die in jedem Bissen spürbar ist – Willkommen bei Goldberg Catering Events.
          </p>
          <div className="mt-6 flex gap-6">  
            <SocialLink
              href="https://www.instagram.com/goldbergpersonal/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://www.facebook.com/goldberg.deutschland/"
              aria-label="Follow on LinkedIn"
              icon={FacebookIcon}
            />
          </div>
        </div>

        {/* <div className="relative">
        <Image
          src={i2}
            alt=""
            priority
          sizes="(max-width: 640px) 18rem, 50rem"
          className="rounded-xl h-full aspect-video object-top w-full object-cover"
          />
        </div> */}
      </Container>
      <Photos />
      {/* marquee */}
      <Container marquee={true} className="mt-20 relative">
        <div className="relative flex overflow-hidden text-[#C3A433] dark:text-zinc-400">
  <div className="py-12 animate-marquee whitespace-nowrap">
    <span className="text-4xl mx-4">Premium Catering</span>
    <span className="text-4xl mx-4">Feinkost</span>
    <span className="text-4xl mx-4">Aus dem Taunus</span>
    <span className="text-4xl mx-4">Events</span>
    <span className="text-4xl mx-4">Messe Catering</span>
    <span className="text-4xl mx-4">Stand Catering</span>

  </div>
  <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
  <span className="text-4xl mx-4">Premium Catering</span>
    <span className="text-4xl mx-4">Feinkost</span>
    <span className="text-4xl mx-4">Aus dem Taunus</span>
    <span className="text-4xl mx-4">Events</span>
    <span className="text-4xl mx-4">Messe Catering</span>
    <span className="text-4xl mx-4">Stand Catering</span>
  </div>
  <div className="py-12 absolute top-12 animate-marquee whitespace-nowrap">
  <span className="text-4xl mx-4">Messe Caterer</span>
    <span className="text-4xl mx-4">Gastronomie</span>
    <span className="text-4xl mx-4">Einzigartige Events</span>
    <span className="text-4xl mx-4">Hochzeiten</span>
    <span className="text-4xl mx-4">Party Service</span>
    <span className="text-4xl mx-4">Weine</span>
    <span className="text-4xl mx-4">Genuss</span>

  </div>
  <div className="absolute top-12 py-12 animate-marquee2 whitespace-nowrap">
  <span className="text-4xl mx-4">Messe Caterer</span>
    <span className="text-4xl mx-4">Gastronomie</span>
    <span className="text-4xl mx-4">Einzigartige Events</span>
    <span className="text-4xl mx-4">Hochzeiten</span>
    <span className="text-4xl mx-4">Party Service</span>
    <span className="text-4xl mx-4">Weine</span>
    <span className="text-4xl mx-4">Genuss</span>
  </div>
        </div>
        <div className="absolute right-5 top-5 z-50 w-56">
        <LottieAnimation/>
        </div>
        </Container>
      <Container className="mt-16">
        {/* banner */}
        <div className="mx-auto max-w-xl lg:max-w-none">
    <div className="bg-white dark:bg-transparent py-16">
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
            <div className="text-base leading-7 text-gray-700 dark:text-zinc-400 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-[#C3A433]">Unsere Werte</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-zinc-400 sm:text-4xl">
              Leidenschaft für Catering, Perfektion für Events
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                

Willkommen bei Goldberg Catering Events, wo aus meiner Überzeugung, dass mit Hingabe und harter Arbeit alles möglich ist, eine wegweisende Erfolgsgeschichte entstanden ist.

                </p>
                <p className="mt-8">
                Unser Ursprung in Kelsterbach führte uns zu einer führenden Position in den Bereichen Airline Catering, Airport Handling, Personalvermittlung und exklusivem Eventcatering. Unser Credo lautet dabei stets: »Setzen Sie Standards, folgen Sie ihnen nicht.«

Höhepunkte unserer Reise umfassen die Partnerschaft mit der renommierten Kronberg Academy Stiftung und die Ehre, die VIP-Bereiche im Stadion von Eintracht Frankfurt zu betreuen. Dies repräsentiert die einzigartige Verbindung von Geschichte und Exzellenz.

                </p>
                <p className="mt-8">
                Unser Erfolg gründet sich auf einem herausragenden Team, das gemeinsam mit mir nicht nur eine Vision, sondern die feste Überzeugung teilt, dass Großes erreicht werden kann. Willkommen bei [Ihrem Unternehmen], wo Leidenschaft und Professionalität in jedem Catering-Erlebnis verschmelzen.
                </p>
              </div>
            </div>
             
            <div className="mt-10 flex">
              <a href="/kontakt" className="text-base font-semibold leading-7 text-[#C3A433]">
                Jetzt Kontakt herstellen <span aria-hidden="true">&rarr;</span>
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
      </Container>
    </>
  )
}
