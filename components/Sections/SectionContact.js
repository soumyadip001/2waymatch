import ContactCard from '../atoms/ContactCard'

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
            <div className="flex flex-col md:flex-row mt-8 gap-8 md:gap-0 w-full md:w-auto">
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
            <div className="bg-white lg:bg-white/10 w-full h-auto text-slate-400 rounded-3xl p-4 md:p-6 flex flex-col gap-4 text-sm">
              <div className="flex flex-col md:flex-row items-center w-full h-auto gap-4 shadow-lg">
                <input
                  type={'text'}
                  className="w-full h-11 outline-none ring ring-offset-1 focus:ring-offset-2 font-normal px-4 rounded"
                  placeholder="Your Name" />

                <input
                  type={'email'}
                  className="w-full h-11 outline-none ring focus:ring-offset-2 font-normal px-4 rounded"
                  placeholder="Your Email" />
              </div>
              <div className="flex w-full">
                <input
                  type={'email'}
                  className="w-full h-11 outline-none ring ring-offset-1 focus:ring-offset-2 font-normal px-4 rounded"
                  placeholder="Subject" />
              </div>
              <div className="flex w-full">
                <textarea className="w-full h-auto outline-none ring ring-offset-1 focus:ring-offset-2 font-normal px-4 rounded" rows={10}></textarea>
              </div>
              <button className="group inline-flex items-center justify-center rounded py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:bg-blue-400 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white">Send A Message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}