import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axiosWithAuth from '../helpers/axiosWithAuth';

import Bubbles from './Bubbles';
import ColorList from './ColorList';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const history = useHistory();
  // UseEffect  will get colors onMount
  useEffect(() => {
    // axios with auth hopefully has token
    axiosWithAuth()
      .get('/colors')
      .then((res) => {
        // Success: put color array in setColorList
        setColorList(res.data);
      })
      .catch((err) => {
        // Error
        console.warn(err);
        // if user is unAutherized
        if (err.message.includes(403)) {
          setColorList([]);
          window.localStorage.removeItem('token');
          history.push('/');
        }
      });
  }, []);
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
