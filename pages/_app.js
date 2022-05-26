import { useState, useEffect } from "react";
import "../styles/globals.scss";
import UserContext from '../context/UserContext'

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(undefined)
  const [total, setTotal] =useState(0);
  const [llanta, setLlanta] = useState(0)
  const [choque, setChoque] = useState(0)
  const [atropello, setAtropello] = useState(0)

  useEffect(() => {
    const covers = llanta + choque + atropello
    const subtotal = covers + 20
    setTotal(subtotal)
  }, [llanta, choque, atropello])
  

  const login = (datos) => {
    const nameAndLastname = datos.name.split(' ')
    setUser({
      typeDocument: datos.typeDocument,
      dni: datos.dni,
      name: nameAndLastname[0],
      email: datos.email,
      lastName: nameAndLastname[1],
      phone: datos.phone,
      plate: datos.plate,
      carModel: datos.carModel,
      tyc: datos.tyc,
    })
  };

  const userData = {
    user,
    login,
    total,
    setLlanta,
    setChoque,
    setAtropello
  }

  return (
    <UserContext.Provider value={userData}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp;
