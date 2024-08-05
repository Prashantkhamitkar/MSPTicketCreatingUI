import React, { useState } from 'react'
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Form, FormGroup, Label, Modal, ModalBody,  ModalFooter,  Row } from 'reactstrap'

const UploadModal = ({modal,toggle}) => {
const [selectedFiles, setSelectedFiles] = useState([]);
const handleSubmit = () => {
  console.log("submit");
};


 
 const handleAcceptedFiles = (files) => {
      const formattedFiles = files.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          formattedSize: formatBytes(file.size),
        })
      );
      setSelectedFiles(formattedFiles);
      
    };

    const formatBytes = (bytes, decimals = 2) => {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };
const truncateString = (str, numWords) => {
  const words = str.split(" ");
  const truncated = words.slice(0, numWords).join(" ");
  if (words.length > numWords) {
    return truncated + "...";
  }
  return truncated;
};
 return (
   <>
     <Modal isOpen={modal} toggle={toggle} size="lg" centered>
       <div className="modal-header">
         <h5 className="modal-title mt-0" id="myLargeModalLabel">
           Manage KB Article Attachments
         </h5>
         <button type="button" className="btn-close" onClick={toggle}></button>
       </div>

       <ModalBody>
         <FormGroup>
           <Row>
             <Col md={12}>
               <Row className="mt-md-3 mt-0">
                 <Col lg="12">
                   <div className="mt-3 mt-lg-0">
                     <Label className="form-label">UPLOAD FILE</Label>
                     <Form className="dropzone">
                       <Dropzone
                         onDrop={(acceptedFiles) => {
                           handleAcceptedFiles(acceptedFiles);
                         }}
                       >
                         {({ getRootProps, getInputProps }) => (
                           <div
                             style={{ textAlign: "center" }}
                             className="mt-4"
                           >
                             <div
                               className="dz-message needsclick mt-4"
                               style={{minHeight:"200px"}}
                               {...getRootProps()}
                             >
                               <input {...getInputProps()} />
                               <div className="mt-4" >
                                 <i className="display-4 text-muted mdi mdi-cloud-upload-outline"></i>
                               </div>
                               <h4>Drop files here to upload</h4>
                             </div>
                           </div>
                         )}
                       </Dropzone>
                       <div
                         className="dropzone-previews mt-2"
                         id="file-previews"
                       >
                         {selectedFiles.map((file, index) => (
                           <Card
                             className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                             key={index + "-file"}
                           >
                             <div className="p-2">
                               <Row className="align-items-center">
                                 <Col className="col-auto">
                                   <img
                                     data-dz-thumbnail=""
                                     height="80"
                                     className="avatar-sm rounded bg-light"
                                     alt={file.name}
                                     src={file.preview}
                                   />
                                 </Col>
                                 <Col>
                                   <Link
                                     to="#"
                                     className="text-muted font-weight-bold"
                                   >
                                     {truncateString(file.name, 4)}
                                   </Link>
                                   <p className="mb-0">
                                     <strong>{file.formattedSize}</strong>
                                   </p>
                                 </Col>
                               </Row>
                             </div>
                           </Card>
                         ))}
                       </div>
                     </Form>
                   </div>
                 </Col>
               </Row>
             </Col>
           </Row>
         </FormGroup>
       </ModalBody>
       <ModalFooter className="d-flex justify-content-between">
         <Button color="danger" onClick={() => setSelectedFiles([])}>
           CANCEL
         </Button>
         <Button color="info">UPLOAD</Button>
       </ModalFooter>
     </Modal>
   </>
 );
}

export default UploadModal