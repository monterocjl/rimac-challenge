import { useState } from "react"
import Image from "next/image";
import style from "./Styles.module.scss";
import Title from "./Title/Title";
import VehicleCard from "./VehicleCard/VehicleCard";
import InsuredAmount from "./InsuredAmount/InsuredAmount";
import Total from "./Total/Total";
import Covers from "./Covers/Covers";
import Link from "next/link";

export default function Panel() {
  const [insuredAmountValue, setInsuredAmountValue] = useState(false)
  return (
    <>
      <div className={style.main}>
        <div className={style.main__back}>
          <Link href='/'>
            <a className={style.main__back__button}>
              <Image width='8px' height='5px' src='/icons/chevrot-red.svg' alt='icon back' />
            </a>
          </Link>
          <div className={style.main__back__text}>VOLVER</div>
        </div>

        <div className={style.main__container}>
          <div className={style.main__container__userInfo}>
            <div className={style.main__banner}>
              <Title />
              <VehicleCard />
            </div>
            <InsuredAmount setInsuredAmountValue={setInsuredAmountValue} />
          </div>
          <Total />
        </div>

        <Covers insuredAmountValue={insuredAmountValue} />
      </div>
    </>
  );
}
