import React from 'react'
import { useAppDispatch } from '../app/hooks';
import { setLogout } from '../features/auth/authSlice';

const Home = () => {
    const token  = localStorage.getItem("tokenDetails");
    const dispatch = useAppDispatch();

  return (
      <div className="dark:text-white">
          <p>Home</p>
          {token && <button onClick={() => { dispatch(setLogout());}}>logout</button> }
      </div>
  )
}

export default Home