import { SimpleLayout } from '@/components/SimpleLayout'


export const metadata = {
  title: 'Kontakt',
  description: 'Kontaktiere uns - Kontaktdaten',
}

export default function Kontakt() {
  return (
    <SimpleLayout
      title="Wir freuen uns auf Ihre Kontaktaufnahme."
      intro="Erstklassiges Catering. Bester Catering-Service für Events und Veranstaltungen mit herausragender Gastronomie. Jetzt nur ein Telefonat entfernt."
    >
        <div class="container flex flex-col mx-auto bg-white">
            <div class="w-full draggable">
                <div class="container flex flex-col items-center gap-16 mx-auto mt-10 mb-32">
                    <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        <div class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                        <span>
                        <svg className="w-10 h-10 text-[#BD9C2C]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                        </svg>
                        </span>
                        <p class="text-2xl font-extrabold text-dark-grey-900">E-Mail</p>
                        <p class="text-base leading-7 text-dark-grey-600">Kontaktiere uns</p>
                        <a class="text-lg font-bold text-purple-blue-500" href = "mailto: info@goldberg-personal.de">info@goldberg-personal.de</a>
                        </div>
                        <div class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                        <span>
                        <svg className="w-10 h-10 text-[#BD9C2C]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                        </svg>
                        </span>
                        <p class="text-2xl font-extrabold text-dark-grey-900">Telefon</p>
                        <p class="text-base leading-7 text-dark-grey-600">Erreiche uns unter</p>
                        <a class="text-lg font-bold text-purple-blue-500" href="tel:+4961074058610">+49 (06107) 4058610</a>
                        </div>
                        <div class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                        <span>
                        <svg className="w-10 h-10 text-[#BD9C2C]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>

                        </span>
                        <p class="text-2xl font-extrabold text-dark-grey-900">Standort</p>
                        <p class="text-base leading-7 text-dark-grey-600">Finde unser Büro</p>
                        <a class="text-lg text-center font-bold text-purple-blue-500" target="_blank" href="https://goo.gl/maps/QcWzYETAh4FS3KTD7"> Taubengrund 35, 65451 Kelsterbach</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SimpleLayout>
  )
}