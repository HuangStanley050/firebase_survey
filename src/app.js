import React from "react";
import Name from "./name.js";
import "./app.css";
import Button from "react-bootstrap/lib/Button.js";
var firebase=require('firebase');
var uuid=require("uuid");

//==========Firebase init============//

var config = {
    apiKey: "AIzaSyAr0Ckw0-j9KMfydGNDGd_qHor7GEUO288",
    authDomain: "surveyfirebase-51d78.firebaseapp.com",
    databaseURL: "https://surveyfirebase-51d78.firebaseio.com",
    projectId: "surveyfirebase-51d78",
    storageBucket: "surveyfirebase-51d78.appspot.com",
    messagingSenderId: "871507352234"
  };
  firebase.initializeApp(config);
//==============End Firebase================//



class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            uid:uuid.v1(),
            answers:{
                answer1:"",
                answer2:"",
                answer3:""
            },
            isSubmitted:false
        }
        this.updateName=this.updateName.bind(this);
        this.answerSelected=this.answerSelected.bind(this);
        this.questionSubmit=this.questionSubmit.bind(this);
    }
    updateName(name){
        //alert("you updated the name into the parent-->"+name);
        this.setState({name:name})
    }
    answerSelected(event){
        //event.preventDefault();
        //alert(event.target.value);
        
        var answers=this.state.answers;
        if(event.target.name==="answer1"){
            //alert(event.target.value);
            answers.answer1=event.target.value;
            //this.setState({answers:answers});
           
            
        }
        if(event.target.name==="answer2"){
            //alert(event.target.value);
            answers.answer2=event.target.value;
           // this.setState({answers:answers});
            
        }
        if(event.target.name==="answer3"){
            //alert(event.target.value);
            answers.answer3=event.target.value;
            //this.setState({answers:answers});
            
        }
        this.setState({answers:answers});
        
    }
    questionSubmit(event){
        //event.preventDefault();
        
        firebase.database().ref("survey/"+this.state.uid).set({
            name:this.state.name,
            answers:this.state.answers
            
        });
        this.setState({isSubmitted:!this.state.isSubmitted});
        //alert(this.state.answers.answer1+" "+this.state.answers.answer2+" "+this.state.answers.answer3);
    }
    render(){
        var questions;
        questions=(
                <div>
                    <h2>Here are the Questions {this.state.name}:</h2>
                    <form onSubmit={this.questionSubmit}>
                        <div className="question">
                            <label>What kind of courses do you like?</label>
                            <br />
                            <input type="radio" name="answer1" value="Technology" onChange={this.answerSelected}/>Technology
                            <input type="radio" name="answer1" value="Design" onChange={this.answerSelected}/>Design
                            <input type="radio" name="answer1" value="Marketing" onChange={this.answerSelected}/>Marketing
                        </div>
                        
                        <div className="question">
                            <label>Your current situation?</label>
                            <br />
                            <input type="radio" name="answer2" value="Student" onChange={this.answerSelected}/>Student
                            <input type="radio" name="answer2" value="Employed" onChange={this.answerSelected}/>Employed
                            <input type="radio" name="answer2" value="Searching" onChange={this.answerSelected}/>Searching
                        </div>
                        
                        <div className="question">
                            <label>Is online learning helpful?</label>
                            <br />
                            <input type="radio" name="answer3" value="Yes" onChange={this.answerSelected}/>Yes
                            <input type="radio" name="answer3" value="No" onChange={this.answerSelected}/>No
                            <input type="radio" name="answer3" value="Maybe" onChange={this.answerSelected}/>Maybe
                        </div>
                        <Button className="boot" bsStyle="primary" bsSize="default" type="submit" name="submit" value="submit">Feedback</Button>
                    </form>
                </div>
            );
        
        
        return (
                <div className="wrapper">
                    <Name update={this.updateName}/>
                    <h1>Firebase Survey app</h1>
                    {this.state.name!=="" ? questions : null}
                </div>
            );
    }
}

export default App;