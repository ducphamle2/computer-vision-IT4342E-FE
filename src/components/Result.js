import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

var listOfImages = []

const Result = () => {

  const location = useLocation();

  const URL = "http://164.90.180.95:5001/api/v0/cat"

  const importAll = (r) => {
    return r.keys().map(r);
  }

  const [counter, setCounter] = useState(0);
  // const [Result, setResult] = useState([]);
  // const [errorMsg, setErrorMsg] = useState('');
  useEffect(async () => {

    // query the images

    for (let i = 0; i < location.state.length; i++) {
      const img = await axios({
        method: "POST",
        url: URL + "?arg=" + location.state[i],
        responseType: 'blob'
      })
      // blog type
      console.log("type of image: ", img.data);
      console.log("image as url: ", window.URL.createObjectURL(img.data))
      listOfImages.push(window.URL.createObjectURL(img.data))
    }

    // listOfImages = importAll(require.context('./tmp_images/', false, /\.(png|jpe?g)$/));
    // console.log("list of images: ", listOfImages)
    setCounter(1)
  }, [])

  return (
    <div>
      {/* {
        listOfImages.map(
          (image, index) => <img key={index} src={image} alt="info"></img>
        )
      } */}
      {
        listOfImages.map(
          (image, index) => <img key={index} src={image} alt='some text' />
        )
      }
    </div>
  );
};

export default Result;



// import React from 'react';

// function importAll(r) {
//   return r.keys().map(r);
// }

// export default class Result extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       listOfImages: []
//     }
//   }
//   UNSAFE_componentWillMount() {
//     this.setState({ listOfImages: importAll(require.context("../../../computer-vision-IT4342E/ocr_manga/executables/tmp_images/translated/", false, /\.(png|jpe?g|svg)$/)) }, () => {
//       console.log("list images: ", this.state.listOfImages)
//     });
//   }

//   componentDidMount() {
//     this.setState({ listOfImages: importAll(require.context("../../../computer-vision-IT4342E/ocr_manga/executables/tmp_images/translated/", false, /\.(png|jpe?g|svg)$/)) }, () => {
//       console.log("list images after did mount: ", this.state.listOfImages)
//     });
//   }

//   componentWillUnmount() {
//     this.setState({ listOfImages: [] }, () => {
//       console.log("list images unmount: ", this.state.listOfImages)
//     });
//   }

//   render() {
//     console.log("before or after will mount")
//     return (
//       < div >
//         {
//           this.state.listOfImages.map(
//             (image, index) => <img key={index} src={image} alt="info"></img>
//           )
//         }
//       </div >
//     )
//   }
// }