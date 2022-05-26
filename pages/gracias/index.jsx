import style from "../../styles/Gracias.module.scss";
import Header from "../../components/Header/Header"
import Image from "next/image";
import useUser from "../../hooks/useUser"

export default function Index() {
  const { user, total } = useUser()
  console.log(total)

  return (
    <>
    <Header />
    <div className={style.main} >
      <div className={style.main__illustration}>
        <div className={style.main__illustration__desktop}>
          <Image
              width='416px'
              height='448px'
              src='/images/thanks-illustration.png'
              alt='icon phone'
          />
        </div>
        <div className={style.main__illustration__mobile}>
          <Image
              width='360px'
              height='208px'
              src='/images/thanks-illustration-mobile.png'
              alt='icon phone'
          />
        </div>
      </div>
      <div className={style.main__text}>
        <div className={style.main__text__title}>¡Te damos la bienvenida!</div>
        <div className={style.main__text__subtitle}>
          Cuenta con nostros para proteger tu vehículo
        </div>
        <div className={style.main__text__description}>
        Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:
        </div>
        <div className={style.main__text__email}>
          {user.email}
        </div>
        <button>
          CÓMO USAR MI SEGURO
        </button>

      </div>
    </div>
    <footer className={style.footer}>
      <div>
        © 2021 RIMAC Seguros y Reaseguros.
      </div>
    </footer>
  </>
  )
}
