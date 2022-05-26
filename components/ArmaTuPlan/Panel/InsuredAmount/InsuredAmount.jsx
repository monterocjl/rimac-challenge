import { useState, useEffect } from 'react'
import style from "./Styles.module.scss";
import Image from "next/image";
import useUser from '../../../../hooks/useUser';

export default function InsuredAmount({setInsuredAmountValue}) {
  const [insuredAmount, setInsuredAmount] = useState(15800)
  const { setChoque } = useUser()


  useEffect(() => {
      if (insuredAmount > 16000) {
        setChoque(0)
        setInsuredAmountValue(false)
          
      } else if ( insuredAmount <= 16000) {
        setChoque(20)
        setInsuredAmountValue(true)
      } 
    
  }, [insuredAmount, setChoque, setInsuredAmountValue])
  

  function incressInsuredAmount() {
    setInsuredAmount(prev => prev + 100)
  }

  function decreaseInsuredAmount() {
    setInsuredAmount(prev => prev - 100)
  }

  return (
    <>
      <div className={style.main}>
        <div className={style.main__info}>
          <div className={style.main__info__text}>Indica la suma asegurada</div>
          <div className={style.main__info__number}>
            MIN $12,500 <span>|</span> MAX $16,500
          </div>
        </div>
        <div className={style.main__actions}>
          <button onClick={decreaseInsuredAmount}>
            <Image
              width='16px'
              height='16px'
              src='/icons/less.svg'
              alt='icon back'
            />
          </button>
          <div>${insuredAmount}</div>
          <button onClick={incressInsuredAmount}>
            <Image
              width='16px'
              height='16px'
              src='/icons/more.svg'
              alt='icon back'
            />
          </button>
        </div>
      </div>
    </>
  );
}
