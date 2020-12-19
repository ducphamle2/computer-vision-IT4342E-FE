import React, { useState, useRef } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { API_URL } from '../utils/constants';
import Select from 'react-select';

const options = [
  { value: 'vietnamese', label: 'Vietnamese'},
  { value: 'english', label: 'English'},
  { value: 'russian', label: 'Russian'},
]

function App(props) {
  const [file, setFile] = useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage
  const [state, setState] = useState({
    url: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedLang, setSelectedLang] = useState('');

  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
  const dropRef = useRef(); // React ref for managing the hover state of droppable area

  const handleChange = (value) => {
    setSelectedLang(value)
    console.log(selectedLang)
};


  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
    dropRef.current.style.border = '2px dashed #e9ebeb';
  };

  const updateBorder = (dragState) => {
    if (dragState === 'over') {
      dropRef.current.style.border = '2px solid #000';
    } else if (dragState === 'leave') {
      dropRef.current.style.border = '2px dashed #e9ebeb';
    }
  };

  const handleOnSubmit = async (event) => {
    alert('PLEASE WAIT...')
    event.preventDefault();
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAa")
    try {
      const { url } = state;
      var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
      var regex = new RegExp(expression);
      let payload = 'url=' + url + '&lang=' + selectedLang.value
      console.log(payload)
      if (url.match(regex)) {
        setErrorMsg('');
        const res = await axios({
          method: "POST",
          url: API_URL + "/v1/translate",
          data: payload,
        })
        console.log("response: ", res.data.data.response_data)
        props.history.push({ pathname: '/result', state: res.data.data.response_data });
        // if (file) {
        //   const formData = new FormData();
        //   formData.append('file', file);
        //   formData.append('url', url);
        //   setErrorMsg('');
        //   await axios.post(`${API_URL}/translate`, formData, {
        //     headers: {
        //       'Content-Type': 'multipart/form-data'
        //     }
        //   });
        //   props.history.push('/list');
        // } else {
        //   setErrorMsg('Please select a file to add.');
        // }
      } else {
        setErrorMsg('Please enter all the field values.');
      }
    } catch (error) {
      console.log("ABGFGGGGG: ", error)
      error.response && setErrorMsg(error.response.data);
    }
  };
  
  return (
    <React.Fragment>
      <Form className="search-form" onSubmit={handleOnSubmit}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Row>
          <Col>
            <Form.Group controlId="url">
              <Form.Control
                type="text"
                name="url"
                value={state.url || ''}
                placeholder="Enter url"
                onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>
        <Select 
          placeholder="Select Language"
          defaultValue={options[0]}
          label="Choose Language"
          value={selectedLang}
          onChange={handleChange}
          options={options}
        />
        {/* <div className="upload-section">
          <Dropzone
            onDrop={onDrop}
            onDragEnter={() => updateBorder('over')}
            onDragLeave={() => updateBorder('leave')}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                <input {...getInputProps()} />
                <p>Drag and drop a file OR click here to select a file</p>
                {file && (
                  <div>
                    <strong>Selected file:</strong> {file.name}
                  </div>
                )}
              </div>
            )}
          </Dropzone>
          {previewSrc ? (
            isPreviewAvailable ? (
              <div className="image-preview">
                <img className="preview-image" src={previewSrc} alt="Preview" />
              </div>
            ) : (
                <div className="preview-message">
                  <p>No preview available for this file</p>
                </div>
              )
          ) : (
              <div className="preview-message">
                <p>Image preview will be shown here after selection</p>
              </div>
            )}
        </div> */}
        <Button variant="primary" type="submit" onClick={handleOnSubmit}>
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
}

export default App;
