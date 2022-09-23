import React from 'react'
import {Modal,ModalBody,ModalFooter,ModalHeader,Button} from "reactstrap"
 const Model = ({modalvisible,toggle}) => {


  return (
    <div>
       
              <Modal isOpen={modalvisible} toggle={toggle}>
        <ModalHeader toggle={toggle}>Kelime Oyunu</ModalHeader>
        <ModalBody>
         <h1> Kazandınız Tebrikler!!</h1>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle} >
            devam
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}
export default Model;