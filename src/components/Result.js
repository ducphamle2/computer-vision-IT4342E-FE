import React, { useEffect, useState } from 'react';
// import download from 'downloadjs';
// import axios from 'axios';
// import { API_URL } from '../utils/constants';
import { useLocation } from 'react-router-dom';

const Result = () => {

  const location = useLocation();

  const importAll = (r) => {
    return r.keys().map(r);
  }
  const [listOfImages, setList] = useState([]);
  // const [Result, setResult] = useState([]);
  // const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    setList(importAll(require.context('../../../computer-vision-IT4342E/ocr_manga/executables/tmp_images/translated/', false, /\.(png|jpe?g)$/)));
    console.log(listOfImages)
  }, [])

  return (
    <div>
      {
        listOfImages.map(
          (image, index) => <img key={index} src={image} alt="info"></img>
        )
      }
    </div>
  );
};

export default Result;
