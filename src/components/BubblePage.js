import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import Bubbles from './Bubbles';
import ColorList from './ColorList';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  // UseEffect  will get colors onMount
  useEffect(() => {
    // axios with auth hopefully has token
    axiosWithAuth()
      .get('/colors')
      .then((res) => {
        setColorList(res.data);
      })
      .catch((err) => {
        console.warn(err);
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
