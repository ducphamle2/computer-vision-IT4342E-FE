import React, { useEffect, useState } from 'react';

var listOfImages = []

const Result = () => {

  const importAll = (r) => {
    return r.keys().map(r);
  }

  const [counter, setCounter] = useState(0);
  // const [Result, setResult] = useState([]);
  // const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    listOfImages = importAll(require.context('./tmp_images/', false, /\.(png|jpe?g)$/));
    console.log("list of images: ", listOfImages)
    setCounter(1)
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