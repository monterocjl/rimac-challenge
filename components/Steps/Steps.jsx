import style from "./Styles.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Steps() {
  return (
    <>
      <div className={style.main}>
        <div className={style.main__step}>
          <div className={style.main__step__number}>1</div>
          <div className={style.main__step__text}>Datos</div>
        </div>

        <div className={style.main__line}></div>

        <div className={style.main__step}>
          <div className={`${style.main__step__number} ${style.active}`}>2</div>
          <div className={`${style.main__step__text} ${style.active}`}>
            Arma tu plan
          </div>
        </div>
      </div>

      <div className={style.main_mobile}>
        <Link href='/'>
          <a className={style.main_mobile_button}>
            <Image width='5px' height='8px' src='/icons/chevrot.svg' alt='icon phone' />
          </a>
        </Link>
        <p>PASO 2 DE 2</p>
        <div className={style.main_mobile__progress_bar}></div>
      </div>
    </>
  );
}
