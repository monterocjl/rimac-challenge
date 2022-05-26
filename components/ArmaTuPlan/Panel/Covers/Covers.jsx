import { useEffect } from 'react'
import style from "./Styles.module.scss";
import Image from "next/image";
import useUser from '../../../../hooks/useUser';

export default function Covers({ insuredAmountValue }) {
  const { setLlanta ,setAtropello, setChoque } = useUser();

  useEffect(() => {
    if (insuredAmountValue) {
      COBERTURAS[1].added = true
    } else if (!insuredAmountValue) {
      COBERTURAS[1].added = false
    }
  }, [insuredAmountValue])
  

  function setCovers (cobertura) {
    if (!cobertura.added) {
      if(cobertura.id == 0){
        setLlanta(15)
      } else if (cobertura.id == 1) {      
        setChoque(20)
      } else {
        setAtropello(50)
      }
    } else {
      if(cobertura.id == 0){
        setLlanta(0)
      } else if (cobertura.id == 1) {      
        setChoque(0)
      } else {
        setAtropello(0)
      }
    }

    cobertura.added = !cobertura.added 
  }

  return (
    <>
      <div className={style.main}>
        <div className={style.main__title}>Agrega o quita coberturas</div>

        <div className={style.main__tabs}>
          <div className={`${style.main__tabs__tab} ${style.active}`}>
            Protege a <br /> tu auto
          </div>
          <div className={style.main__tabs__tab}>
            Protege a los <br /> que te rodean
          </div>
          <div className={style.main__tabs__tab}>
            Mejora tu <br /> plan
          </div>
        </div>

        <div className={style.main_content}>

          {COBERTURAS.map((cobertura) => (
            <div className={style.main_content__item} key={cobertura.id}>
              <div className={style.main_content__item__image}>
                <Image width='48px' height='48px' src={cobertura.image} alt='icon back' />
              </div>
              <div className={style.main_content__item__text}>
                <h3>{cobertura.title}</h3>
                <div className={style.main_content__item__text__switch} >
                  <label className={style.switch}>
                    <input type="checkbox" onClick={() => setCovers(cobertura)} />
                    <span className={`${style.slider} ${style.round}`}></span>  
                  </label>
                </div>

                <div className={style.main_content__item__text__btn}>
                  <button onClick={() => setCovers(cobertura)}>
                    {
                      cobertura.added ? 
                      <Image width='16px' height='16px' src='/icons/less.svg' alt='icon less' />
                      :
                      <Image width='16px' height='16px' src='/icons/more.svg' alt='icon less' />
                    }
                  </button>
                  <div>{cobertura.added ? 'QUITAR' : 'AGREGAR' }</div>
                </div>
                
                <p>{cobertura.description}</p>
                <div className={style.main_content__item__arrow}>
                  <Image width='16px' height='16px' src='/icons/chevrot-red.svg' alt='icon back' />
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}

const COBERTURAS = [
  {
    id: 0,
    image: "/images/rim.png",
    title: "Llanta robada",
    added: false,
    description:
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más",
  },
  {
    id: 1,
    image: "/images/crash.png",
    title: "Choque y/o pasarte la luz roja",
    added: false,
    description: "",
  },
  {
    id: 2,
    image: "/images/accident.png",
    title: "Atropello en la vía Evitamiento",
    added: false,
    description: "",
  },
];
