
import React, {Component} from "react";
import {MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon, MDBCardBody, MDBCardText} from "mdbreact";
import {FaPenSquare, FaTint, FaTintSlash, FaTrashAlt} from "react-icons/fa";


export default class ItemListToDo extends Component {


    render(){
        return(
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <MDBJumbotron style={{ padding: 0 }}>
                            <MDBCol className="text-white text-center  my-2" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
                                <MDBCol className="py-4">
                                    <MDBCardTitle className="h1-responsive pt-3 m-7 font-bold">TODO APP</MDBCardTitle>
                                    <MDBCardBody>
                                        <MDBCardText>
                                            <span>  To Complete Item Please Click This Button ----> <FaTintSlash color="green" size="1.5rem"/></span> <br/>
                                            <span>  To InComplete Item Please Click This Button ----> <FaTint color="green" size="1.5rem"/></span><br/>
                                            <span>  To Edit Item Please Click This Button ----> <FaPenSquare color="blue" size="1.5rem"/> </span><br/>
                                            <span>  To Delete Item Please Click This Button ----> <FaTrashAlt color="red" size="1.5rem" /> </span><br/>
                                        </MDBCardText>
                                    </MDBCardBody>

                                </MDBCol>
                            </MDBCol>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );

    }
}
