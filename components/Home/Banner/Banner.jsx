import style from "./Styles.module.scss";
import Image from "next/image";

export default function Banner() {
  return (
    <>
      <div className={style.main}>
        <div className={style.main__image_desktop}>
          <Image
            width='320px'
            height='250px'
            src='/images/car-banner-desktop.png'
            alt='icon phone'
          />
        </div>
        <div className={style.main__image_mobile}>
          <Image
            width='112px'
            height='243px'
            src='/images/car-banner-mobile.png'
            alt='icon phone'
          />
        </div>
        <div className={style.main__text}>
          <p>¡NUEVO!</p>
          <h1>
            Seguro <span>Vehicular Tracking</span>
          </h1>
          <h2>Cuéntanos dónde le harás seguimiento a tu seguro</h2>
        </div>
        <footer>© 2021 RIMAC Seguros y Reaseguros.</footer>
      </div>
    </>
  );
}
