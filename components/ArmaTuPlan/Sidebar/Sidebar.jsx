import style from "./Styles.module.scss";
import Steps from "../../Steps/Steps";

export default function Sidebar() {
  return (
    <>
      <div className={style.main}>
        <Steps />
      </div>
    </>
  );
}
