import React, { useEffect } from 'react';
// import download from 'downloadjs';
// import axios from 'axios';
// import { API_URL } from '../utils/constants';
import { useLocation } from 'react-router-dom';

var listOfImages = []
const importAll = (r) => {
  return r.keys().map(r);
}
listOfImages = importAll(require.context('/mnt/d/Git repo/computer-vision-IT4342E/ocr_manga/executables/tmp_images/inpainted', false, /\.(png|jpe?g)$/));

const Result = () => {
  
  const location = useLocation();
  // const [Result, setResult] = useState([]);
  // const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    console.log(listOfImages)
    console.log("location after passing from main component: ", location.state)
  }, [])

  return (
    <div>
      {
        listOfImages.map(
          (index, image) => <img key={index} src={image} alt="info"></img>
        )
      }
    </div>
  );
};

export default Result;
