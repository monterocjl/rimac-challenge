import style from "./Styles.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className={style.main}>
        <div className={style.main__logo}>
          <Link href='/'>
            <a>
              <Image
                width='99px'
                height='16px'
                src='/icons/logo-rimac.svg'
                alt='logo rimac'
              />
            </a>
          </Link>
        </div>

        <div className={style.main__contact}>
          <div className={style.main__contact__text}>¿Tienes alguna duda?</div>
          <div className={style.main__contact__number}>
            <Image
              width='13px'
              height='16px'
              src='/icons/ic_phone.svg'
              alt='icon phone'
            />
            <div className={style.main__contact__number__phone}>
              (01) 411 6001
            </div>
            <div className={style.main__contact__number__text}>Llámanos</div>
          </div>
        </div>
      </div>
    </>
  );
}
