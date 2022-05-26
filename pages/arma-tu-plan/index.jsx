import style from "../../styles/ArmaTuPlan.module.scss";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/ArmaTuPlan/Sidebar/Sidebar";
import Panel from "../../components/ArmaTuPlan/Panel/Panel";

export default function Index() {
  return (
    <>
      <Header />
      <div className={style.main}>
        <Sidebar />
        <Panel />
      </div>
    </>
  );
}
