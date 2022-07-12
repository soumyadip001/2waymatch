import UserQuoteSvg from '../atoms/UserQuoteSvg';
import FigCaption from '../atoms/FigCaption';

export default function SectionClients() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">Loved by businesses worldwide.</h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our software is so simple that people cant help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          <li>
            <ul className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <UserQuoteSvg />
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-slate-900">
                      TaxPal is so easy to use I cant help but wonder if its really doing the things the government expects me to do.
                    </p>
                  </blockquote>
                  <FigCaption name='Sheryl Berge' role='CEO at Lynch LLC' src='avatar-1.png' />
                </figure>
              </li>
              <li>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <UserQuoteSvg />
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-slate-900">
                      Im trying to get a hold of someone in support, Im in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.
                    </p>
                  </blockquote>
                  <FigCaption name='Amy Hahn' role='Director at Velocity Industries' src='avatar-2.png' />
                </figure>
              </li>
            </ul>
          </li>
          <li>
            <ul className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <UserQuoteSvg />
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-slate-900">
                      The best part about TaxPal is every time I pay my employees, my bank balance doesnt go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.
                    </p>
                  </blockquote>
                  <FigCaption name='Leland Kiehn' role='Founder of Kiehn and Sons' src='avatar-3.png' />
                </figure>
              </li>
              <li>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <UserQuoteSvg />
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-slate-900">There are so many things I had to do with my old software that I just dont do at all with TaxPal. Suspicious but I cant say I dont love it.</p>
                  </blockquote>
                  <FigCaption name='Sheryl Berge' role='CEO at Lynch LLC' src='avatar-4.png' />
                </figure>
              </li>
            </ul>
          </li>
          <li>
            <ul className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <UserQuoteSvg />
                  <blockquote className="relative"><p className="text-lg tracking-tight text-slate-900">I used to have to remit tax to the EU and with TaxPal I somehow dont have to do that anymore. Nervous to travel there now though.</p>
                  </blockquote>
                  <FigCaption name='Sheryl Berge' role='CEO at Lynch LLC' src='avatar-5.png' />
                </figure>
              </li>
              <li>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <UserQuoteSvg />
                  <blockquote className="relative"><p className="text-lg tracking-tight text-slate-900">This is the fourth email Ive sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.</p></blockquote>
                  <FigCaption name='Sheryl Berge' role='CEO at Lynch LLC' />
                </figure>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}