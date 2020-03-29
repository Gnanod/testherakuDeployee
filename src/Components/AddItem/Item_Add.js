import React from "react";
import {MDBContainer, MDBInputGroup, MDBBtn, MDBCol, MDBRow, MDBAlert} from "mdbreact";

export default class Item_Add extends React.Component {

    constructor(props) {
        super(props);

    }



    render() {
        const {itemName, setItemName, submitItem, isUpdate,itemNameValidation} = this.props;
        return (
            <MDBContainer>
                <form  className="needs-validation" onSubmit={submitItem} noValidate>
                    <MDBInputGroup


                        hint="Item Name"
                        containerClassName="mb-3"
                        value={itemName}
                        className="form-control"
                        onChange={setItemName}


                        append={
                            <MDBBtn type="submit" outline color={isUpdate ? "secondary" : "info"}
                                    className="' m-0 px-3 py-2 z-depth-0'">
                                {isUpdate ? 'Update Item' : 'Add Item'}
                            </MDBBtn>
                        }
                    autoFocus
                    />
                    {
                        itemNameValidation ?
                            <MDBAlert color="danger">
                                Item Name Field Is Empty
                            </MDBAlert> :''
                    }
                </form>

            </MDBContainer>
        );
    }
}

