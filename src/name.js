import React from "react";
import Modal from "react-bootstrap/lib/Modal.js";
import Button from "react-bootstrap/lib/Button.js";
// import Form from "react-bootstrap/lib/Form.js";
// import FormGroup from "react-bootstrap/lib/FormGroup.js";
import FormControl from "react-bootstrap/lib/FormControl.js";

class ModalName extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:true,
            input:"",
            name:""
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.updateInput=this.updateInput.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({
            show:!this.state.show,
            name:this.state.input
        });
        this.props.update(this.state.input);
    }
    updateInput(e){
        this.setState({input: e.target.value});
    }
    render(){
        return (
            <Modal show={this.state.show}>
                <Modal.Header>
                    <Modal.Title>What is your name?</Modal.Title>
                </Modal.Header>
    
                <Modal.Body>
                    <FormControl type="text" placeholder="John Smith" onChange={this.updateInput}/>
                    
                </Modal.Body>
    
                <Modal.Footer>
                    
                    <Button onClick={this.handleSubmit} bsStyle="primary">Save changes</Button>
                </Modal.Footer>
             </Modal>
            );
    }
}

export default ModalName;