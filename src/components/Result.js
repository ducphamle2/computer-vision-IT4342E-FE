import React, { useEffect } from 'react';
// import download from 'downloadjs';
// import axios from 'axios';
// import { API_URL } from '../utils/constants';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  // const [Result, setResult] = useState([]);
  // const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    console.log("location after passing from main component: ", location.state)
  }, [])

  // useEffect(() => {
  //   const getResult = async () => {
  //     try {
  //       const { data } = await axios.get(`${API_URL}/getAllFiles`);
  //       setErrorMsg('');
  //       setResult(data);
  //     } catch (error) {
  //       error.response && setErrorMsg(error.response.data);
  //     }
  //   };

  //   getResult();
  // }, []);

  // const downloadFile = async (id, path, mimetype) => {
  //   try {
  //     const result = await axios.get(`${API_URL}/download/${id}`, {
  //       responseType: 'blob'
  //     });
  //     const split = path.split('/');
  //     const filename = split[split.length - 1];
  //     setErrorMsg('');
  //     return download(result.data, filename, mimetype);
  //   } catch (error) {
  //     if (error.response && error.response.status === 400) {
  //       setErrorMsg('Error while downloading file. Try again later');
  //     }
  //   }
  // };

  return (
    // <div className="files-container">
    //   {errorMsg && <p className="errorMsg">{errorMsg}</p>}
    //   <table className="files-table">
    //     <thead>
    //       <tr>
    //         <th>Title</th>
    //         <th>Description</th>
    //         <th>Download File</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {Result.length > 0 ? (
    //         Result.map(
    //           ({ _id, title, description, file_path, file_mimetype }) => (
    //             <tr key={_id}>
    //               <td className="file-title">{title}</td>
    //               <td className="file-description">{description}</td>
    //               <td>
    //                 <a
    //                   href="#/"
    //                   onClick={() =>
    //                     downloadFile(_id, file_path, file_mimetype)
    //                   }
    //                 >
    //                   Download
    //                 </a>
    //               </td>
    //             </tr>
    //           )
    //         )
    //       ) : (
    //         <tr>
    //           <td colSpan={3} style={{ fontWeight: '300' }}>
    //             No files found. Please add some.
    //           </td>
    //         </tr>
    //       )}
    //     </tbody>
    //   </table>
    // </div>
    <div>

    </div>
  );
};

export default Result;