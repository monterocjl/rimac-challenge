import style from "./Styles.module.scss";
import useUser from "../../../../hooks/useUser";

export default function Title() {
  const { user } = useUser()
  return (
    <>
      <div className={style.main}>
        <h2 className={style.main__title_desktop}>
          ¡Hola, <span>{user?.name}! </span>
        </h2>
        <h2 className={style.main__title_mobile}>Mira las coberturas</h2>

        <h3 className={style.main__subtext}>
          Conoce las coberturas para tu plan
        </h3>
      </div>
    </>
  );
}
