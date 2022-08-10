import ContactCard from '../atoms/ContactCard'
import ContactForm from '../forms/ContactForm'

export default function SectionContact() {
  return (
    <section id="Contact" aria-label="Contact Us" className="bg-slate-900 w-full text-white py-20 sm:py-32">
      <div className="flex flex-col mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg text-slate-400 px-0 md:px-8 w-full sm:w-full md:w-1/2 text-center">
            Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus pellentesque a aliquam.
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-4 px-6 md:px-8 py-10">
          <div className="flex basis-full md:basis-1/2 flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-display text-2xl tracking-tight text-white sm:text-3xl">
              Contact with our support
            </h3>
            <p className="md:my-4 text-slate-400">
              Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut.
            </p>
            <div className="flex flex-col md:flex-row mt-8 gap-8 md:gap-0 w-full">
              <ContactCard 
                src="/img/avatar-1.png"
                alt={'Avatar CEO'}
                name={'Rajendra Sahoo'}
                role={'CEO & Owner'}
                tel={'+61 (0) 3 8376 6284'}
                email={'noreply@gmail.com'}
              />
              <ContactCard 
                src="/img/avatar-1.png"
                alt={'Avatar Support'}
                name={'Soumyadip Hazra'}
                role={'Support'}
                tel={'+61 (0) 3 8376 6284'}
                email={'noreply@gmail.com'}
              />
            </div>
          </div>
          <div className="flex basis-full md:basis-1/2 flex-col mt-8 md:mt-0">
            <h3 className="font-display text-2xl tracking-tight text-white sm:text-3xl">
              Send message to us
            </h3>
            <p className="my-4 text-slate-400">
              Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibh, tincidunt ut eros.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}