
import React, {Component} from "react";
import {FaPenSquare, FaTint, FaTintSlash, FaTrashAlt} from "react-icons/fa";

export  default  class Table_Body extends Component {



    render() {
        const {itemName,deleteItem,updateItem,completedItem,isCompleted,inCompleteItem} = this.props;
        return (

                <tr >
                    <td className={isCompleted   ? 'completed' : ''}>{itemName}</td>
                    <td>
                        <button onClick={completedItem}> <FaTintSlash color="green" size="2rem"/> </button>
                        <button onClick={inCompleteItem}> <FaTint color="green" size="2rem"/> </button>
                        {
                            isCompleted ?
                                <button onClick={isCompleted   ? console.log('Cant Update This Item') : updateItem} disabled> <FaPenSquare color="blue" size="2rem"/> </button>
                                :<button onClick={isCompleted   ? console.log('Cant Update This Item') : updateItem} > <FaPenSquare color="blue" size="2rem"/> </button>
                        }

                        <button onClick={deleteItem}> <FaTrashAlt color="red" size="2rem" /></button>
                    </td>
                </tr>
        );
    }
}
