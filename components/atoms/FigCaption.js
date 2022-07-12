import styles from '../../styles/FigCaption.module.css';

export default function FigCaption({ name, role, src = 'avatar-1.png' }) {
  return (
    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
      <div>
        <div className="font-display text-base text-slate-900">{ name }</div>
        <div className="mt-1 text-sm text-slate-500">{ role }</div>
      </div>
      <div className="h-14 w-14 overflow-hidden rounded-full bg-slate-50">
        <span className={styles.topSpan}>
          <span className={styles.bottomSpan}>
            <img
              className={styles.topImage}
              alt="User"
              aria-hidden="true"
              src={`/img/${src}`}
            />
          </span>
          <img
            alt=""
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.c78616b7.png&amp;w=256&amp;q=75"
            decoding="async"
            data-nimg="intrinsic"
            className={styles.bottomImage}
            srcSet={`/img/${src}`}
          />
          {/* <noscript>
            <img
              alt="User"
              srcSet={`/img/${src}`}
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.c78616b7.png&amp;w=256&amp;q=75"
              decoding="async"
              data-nimg="intrinsic"
              className={styles.bottomImage}
              loading="lazy"
            />
          </noscript> */}
        </span>
      </div>
    </figcaption>
  )
}