import { useEffect, useState } from 'react';
import '../styles/globals.css';
import { MyContext } from '../utils/myContext';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    const usr=JSON.parse(localStorage.getItem("user"))
    if (usr) {
      setUser(usr);
    }
    if (!usr) {
      router.push('/login');
    }
  }, []);

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }
  return (
    <>
      <MyContext.Provider value={{ user, setUser }}>
          <Component {...pageProps} />;
        </MyContext.Provider>
    </>
  );
}
