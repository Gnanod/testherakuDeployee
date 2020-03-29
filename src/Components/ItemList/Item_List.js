import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';

import Table_Body from "../Table_Body/Table_Body";


export default class Item_List extends React.Component {


    render() {
        const {itemList,deleteItem,updateItem,completedItem,inCompleteItem}=this.props;
        return (
            <MDBTable>
                <MDBTableHead color="primary-color" textWhite>
                    <tr>

                        <th>Item Name</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        itemList.map(item=>{
                            return <Table_Body
                                key={item.itemId}
                                itemName={item.itemName}
                                deleteItem={()=>deleteItem(item.itemId)}
                                updateItem ={()=>updateItem(item.itemId)}
                                completedItem={()=>completedItem(item.itemId)}
                                inCompleteItem={()=>inCompleteItem(item.itemId)}
                                isCompleted={item.isCompleted}

                            />
                        })
                    }
                </MDBTableBody>
            </MDBTable>
        );
    }
}

