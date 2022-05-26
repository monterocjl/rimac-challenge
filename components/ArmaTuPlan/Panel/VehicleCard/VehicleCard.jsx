import Image from "next/image";
import style from "./Styles.module.scss";
import useUser from "../../../../hooks/useUser";

export default function VehicleCard() {
  const { user } = useUser();
  return (
    <>
      <div className={style.main}>
        <div className={style.main__info}>
          <div className={style.main__info__car_plate}>Placa: {user?.plate}</div>
          <div className={style.main__info__car_model}>
            {user?.carModel}
          </div>
        </div>

        <div className={style.main__image}>
          <Image width='85px' height='179px' src='/images/avatar-2.png' alt='icon back' />
        </div>

        <div className={style.main__image__mobile}>
          <Image width='72px' height='156px' src='/images/avatar-2.png' alt='icon back' />
        </div>
      </div>
    </>
  );
}
