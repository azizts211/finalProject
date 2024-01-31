import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {Button,Modal,ModalBody,ModalFooter,ModalHeader,InputGroup,Input,InputGroupText} from "reactstrap"
import {editUser} from "./redux/actions"

function EditUser({el}) {
    const[modal,setModal]=useState(false)
    const [name,setName]=useState(el.name)
    const [email,setEmail]=useState(el.email)
    const [phone,setPhone]=useState(el.phone)
    const toggle=()=>{
        setModal(!modal)
    }
    const dispatch=useDispatch()
    const edit=()=>{
        const editedUser={name,email,phone}
        dispatch(editUser(editedUser,el._id))
        toggle()
    }
  return (
    <div>
       <button color="danger" className="user-card-button" onClick={toggle}>
       edit
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <InputGroup>
    <Input onChange={(event)=>setName(event.target.value)} value={name}/>
  </InputGroup>
        <InputGroup>
    <Input onChange={(event)=>setEmail(event.target.value)} value={email}/>
    <InputGroupText>
      @example.com
    </InputGroupText>
  </InputGroup>
  <br />
  <InputGroup>
    <Input onChange={(event)=>setPhone(event.target.value)} value={phone}/>
  </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={edit}>
           Edit User
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default EditUser
