import Image from "next/image";
import { useRouter } from "next/router";
import style from "./Styles.module.scss";
import useUser from "../../../../hooks/useUser";

export default function Total() {
  const { total } = useUser()

  const router = useRouter();

  function buyment () {
    router.replace('/gracias')
  }

  return (
    <>
      <div className={style.main}>
        <div className={style.main__total}>
          <div className={style.main__total__text}>MONTO</div>
          <div className={style.main__total__number}>${total}.00</div>
          <div className={style.main__total__subtext}>mensuales</div>
        </div>
        <div className={style.main__additional}>
          <div className={style.main__additional_text}>El precio incluye:</div>
          <div className={style.main__additional_list}>
            <div className={style.main__additional_list__item}>
              <Image
                width='16px'
                height='16px'
                src='/icons/check.svg'
                alt='icon back'
              />
              <div>Llanta de repuesto</div>
            </div>
            <div className={style.main__additional_list__item}>
              <Image
                width='16px'
                height='16px'
                src='/icons/check.svg'
                alt='icon back'
              />
              <div>Análisis de motor</div>
            </div>
            <div className={style.main__additional_list__item}>
              <Image
                width='16px'
                height='16px'
                src='/icons/check.svg'
                alt='icon back'
              />
              <div>Aros gratis</div>
            </div>
          </div>
        </div>
        <button onClick={buyment}>LO QUIERO</button>
      </div>
    </>
  );
}
