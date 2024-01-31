import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {Button,Modal,ModalBody,ModalFooter,ModalHeader,InputGroup,Input,InputGroupText} from "reactstrap"
import {addUser} from "./redux/actions"
function AddUser() {
    const[modal,setModal]=useState(false)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const toggle=()=>{
        setModal(!modal)
    }
    const dispatch=useDispatch()
    const add=()=>{
        const newUser={name,email,phone}
        dispatch(addUser(newUser))
        toggle()
    }
  return (
    <div>
       <Button color="danger" onClick={toggle}>
     Add New User
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <InputGroup>
    <Input onChange={(event)=>setName(event.target.value)}/>
  </InputGroup>
        <InputGroup>
    <Input onChange={(event)=>setEmail(event.target.value)} />
    <InputGroupText>
      @example.com
    </InputGroupText>
  </InputGroup>
  <br />
  <InputGroup>
    <Input onChange={(event)=>setPhone(event.target.value)}/>
  </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={add}>
            Add User
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default AddUser
