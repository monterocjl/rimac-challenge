import style from "../styles/Home.module.scss";
import Banner from "../components/Home/Banner/Banner";
import Form from "../components/Home/Form/Form";
import Header from "../components/Header/Header";

export default function Home() {
  
  return (
    <>
      <div className={style.main}>
        <header className={style.main__header}>
          <Header />
        </header>
        <div className={style.main__container}>
          <Banner />
          <Form />
        </div>
      </div>
    </>
  );
}
