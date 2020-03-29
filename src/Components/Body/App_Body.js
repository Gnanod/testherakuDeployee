import React, {Component} from "react";
import {MDBJumbotron, MDBContainer, MDBCardTitle, MDBCol} from "mdbreact";
import Item_Add from "../AddItem/Item_Add";
import Item_List from "../ItemList/Item_List";
import uuid from 'react-uuid'
import NoItem from "../Table_Body/NoItem";

export default class App_Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemName: '',
            itemList: [],
            itemId: uuid(),
            isUpdate: false,
            isCompleted: false,
            noItem: true,
            itemNameValidation: false,

        }
        this.setItemName = this.setItemName.bind(this);
        this.submitItem = this.submitItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.completedItem = this.completedItem.bind(this);
        this.inCompletedItem = this.inCompletedItem.bind(this);
    }

    setItemName(e) {
        this.setState({
            itemName: e.target.value
        })
    }

    deleteItem(id) {

        const notDeletedItems = this.state.itemList.filter(item => item.itemId !== id);
        this.setState({
                itemList: notDeletedItems,
                itemId: id
            }
        )
        if (notDeletedItems.length === 0) {
            this.setState({
                noItem: true
            })
        }

    }

    updateItem(id) {
        const notDeletedItems = this.state.itemList.filter(item => item.itemId !== id);
        const selectedItem = this.state.itemList.find(item => item.itemId === id);
        this.setState({
                itemList: notDeletedItems,
                itemName: selectedItem.itemName,
                itemId: id,
                isUpdate: true
            }
        )
    }

    inCompletedItem(id) {


        const afterCompletedItems = this.state.itemList.filter(item => item.itemId !== id);
        const selectedItem = this.state.itemList.find(item => item.itemId === id);
        if( selectedItem.isCompleted === true){
            selectedItem.isCompleted = false;
            const itemArray = [selectedItem, ...afterCompletedItems];
            this.setState({
                    itemList: itemArray,
                }
            )
        }


    }

    completedItem(id) {

        const notCompletedItems = this.state.itemList.filter(item => item.itemId !== id);
        const selectedItem = this.state.itemList.find(item => item.itemId === id);
        selectedItem.isCompleted = true;

        const itemArray = [...notCompletedItems, selectedItem];

        this.setState({
                itemList: itemArray,
            }
        )
    }


    submitItem(e) {
        e.preventDefault();

        if (this.state.itemName === '') {
            this.setState({
                itemNameValidation: true
            })
        } else {
            const newItem = {
                itemId: this.state.itemId,
                itemName: this.state.itemName,
                isCompleted: false
            }

            const itemArray = [newItem, ...this.state.itemList];
            this.setState({
                itemName: '',
                itemList: itemArray,
                itemId: uuid(),
                isUpdate: false,
                noItem: false,
                itemNameValidation: false
            })
        }


    }

    render() {
        return (
            <MDBContainer>
                <Item_Add
                    itemName={this.state.itemName}
                    setItemName={this.setItemName}
                    submitItem={this.submitItem}
                    itemNameValidation={this.state.itemNameValidation}
                    isUpdate={this.state.isUpdate}
                />
                <MDBCol className="py-4">
                    <MDBCardTitle className="h1-responsive pt-3 m-7 font-bold">Item List</MDBCardTitle>

                </MDBCol>

                <Item_List
                    itemList={this.state.itemList}
                    deleteItem={this.deleteItem}
                    updateItem={this.updateItem}
                    completedItem={this.completedItem}
                    inCompleteItem={this.inCompletedItem}
                    noItem={this.state.noItem}

                />
                {
                    this.state.noItem ? < NoItem/> : ''
                }


            </MDBContainer>
        );
    }
}



