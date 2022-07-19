export default function SectionContact() {
  return (
    <section id="Contact" aria-label="Contact Us" className="bg-slate-900 text-white py-20 sm:py-32">
      <div className="flex flex-col mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg text-slate-400 px-8 w-1/2 text-center">
            Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus pellentesque a aliquam.
          </p>
        </div>
        <div className="flex flex-row mt-4 px-6 md:px-8 py-10">
          <div className="flex basis-1/2 flex-col">
            <h3 className="font-display text-2xl tracking-tight text-white sm:text-3xl">
              Contact with our support
            </h3>
            <p className="my-4 text-slate-400">
              Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut.
            </p>
            <div className="flex flex-col md:flex-row mt-8">
              <div className="flex sm:w-full md:basis-1/2 flex-col">
                <img src="/img/avatar-1.png" className="h-20 w-20 overflow-hidden rounded" />
                <h5 className="mt-4">Soumyadip Hazra</h5>
                <p className="text-slate-400">CEO & Owner</p>
                <div className="border-t-2 border-blue-600 pt-8 md:pt-6 mt-8 md:mt-6 flex flex-col w-9/12">
                  <p>+61 (0) 3 8376 6284</p>
                  <a href="mailto:noreply@gmail.com" className="text-blue-400 underline">noreply@gmail.com</a>
                </div>
              </div>
              <div className="flex sm:w-full md:basis-1/2 flex-col">
                <img src="/img/avatar-1.png" className="h-20 w-20 overflow-hidden rounded" />
                <h5 className="mt-4">Montana Hilary</h5>
                <p className="text-slate-400">Support</p>
                <div className="border-t-2 border-blue-600 pt-8 md:pt-6 mt-8 md:mt-6 flex flex-col w-9/12">
                  <p>+61 (0) 3 8376 6284</p>
                  <a href="mailto:noreply@gmail.com" className="text-blue-400 underline">noreply@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex basis-1/2 flex-col">
            <h3 className="font-display text-2xl tracking-tight text-white sm:text-3xl">
              Send message to us
            </h3>
            <p className="my-4 text-slate-400">
              Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibh, tincidunt ut eros.
            </p>
            <div className="bg-white lg:bg-white/10 w-full h-auto text-slate-400 rounded-3xl p-4 md:p-6 flex flex-col gap-4 text-sm">
              <div className="flex items-center w-full h-auto gap-4 shadow-lg">
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