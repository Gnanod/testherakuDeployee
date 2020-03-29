import React, {Component} from "react";
import {MDBAlert} from "mdbreact";

export  default  class NoItem extends Component {


    render() {
        return (
                <MDBAlert color="danger">
                    No Items In List
                </MDBAlert>
        );
    }
}
