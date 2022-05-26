import { useState } from "react";
import style from "./Styles.module.scss";
import { getUser } from "../../../api/users";
import useUser from "../../../hooks/useUser"
import { useRouter } from "next/router";

export default function Form() {
  const { login } = useUser();
  const router = useRouter();
  const [datos, setDatos] = useState({
    typeDocument: 'DNI',
    dni: '',
    phone: '',
    plate: '',
    tyc: 'off',
  })

  const [errorDNI, setErrorDNI] = useState(false)
  const [errorDNIInvalid, setErrorDNIInvalid] = useState(false)
  const [errorPHONE, setErrorPHONE] = useState(false)
  const [errorPLATE, setErrorPLATE] = useState(false)
  const [errorTYC, setErrorTYC] = useState(false)

  function handleInputChange (e) {
    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    })
    
  }

  async function getUserData () {
    if (datos.dni === '') {
      setErrorDNI(true)
      return
    } else if (datos.phone === '') {
      setErrorDNI(false)
      setErrorPHONE(true)
      return
    } else if (datos.plate === '') {
      setErrorPHONE(false)
      setErrorPLATE(true)
      return
    } else if (datos.tyc === 'off') {
      setErrorPLATE(false)
      setErrorTYC(true)
      return
    } else {
      const response = await getUser(datos.dni)
      if (response?.id) {
        setErrorTYC(false)
        setErrorDNIInvalid(false)
        const userCompleteData = {
          ...datos,
          name: response.name,
          email: response.email,
          carModel: 'Wolkswagen 2019 Golf'
        }

        login(userCompleteData);
        router.replace("/arma-tu-plan");

      } else {
        setErrorTYC(false)
        setErrorDNIInvalid(true)
      }
    } 
       
  } 

  return (
    <>
      <div className={style.main}>
        <div className={style.main__form}>
          <div className={style.main__form__title}>Déjanos tus datos</div>

          <div className={style.main__form__dni}>
            <div className={style.main__form__dni__select}>
              <select required name="typeDocument" onChange={handleInputChange}>
                <option value='DNI'>DNI</option>
                <option value='C.E.'>C.E.</option>
              </select>
            </div>
            <div className={style.main__form__dni__input}>
              <input required type='text' placeholder='Nro. de doc' name="dni" onChange={handleInputChange} />              
            </div>
          </div>
          { errorDNI ? 
            <div className={style.error}>Debes ingresar tu documento de identidad</div>
            : ''
          }
          { errorDNIInvalid ? 
            <div className={style.error}>El documento ingresado no es válido</div>
            : ''
          }
          <div>
            <input required type='text' placeholder='Celular' name="phone"onChange={handleInputChange} />
          </div>
          { errorPHONE ? 
            <div className={style.error}>Debes ingresar tu número de celular</div>
            : ''
          }
          <div>
            <input required type='text' placeholder='Placa' name="plate" onChange={handleInputChange} />
          </div>
          { errorPLATE ? 
            <div className={style.error}>Debes ingresar la placa de tu vehículo</div>
            : ''
          }
          <div className={style.main__form__checkbox}>
            <div className={style.main__form__checkbox_box}>
              <label className={style.container}>
                <input required type='checkbox' name='tyc' onChange={handleInputChange} />
                <span className={style.checkmark}></span>
              </label>
            </div>
            <div className={style.main__form__checkbox__text}>
              Acepto la{" "}
              <a href=''>Política de Protección de Datos Personales</a> y los
              <a href=''>Términos y Condiciones</a>
            </div>
          </div>
          { errorTYC ? 
            <div className={style.error_tyc}>Debes aceptar los Términos y Condiciones</div>
            : ''
          }

          <div className={style.main__form__button}>
            <button onClick={getUserData}>COTÍZALO</button>
          </div>
        </div>
      </div>
    </>
  );
}
