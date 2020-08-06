import React, { useState } from "react";
import Book from "./Book";
import {
    Col,
    Row,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";

const Books = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
    const [isList, setList] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);
    let value,single="",multi="";
    isList? value = 4  : value = 12;
    isList? single = "\u2713" : multi = "\u2713";
    return (
        <div>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>List</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem
                        onClick={() => {
                            setList(true);
                        }}
                    >
                        {`Single Book ${single}`}
          </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                        onClick={() => {
                            setList(false);
                        }}
                    >
                        {`Mutliple Books ${multi}`}
          </DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
            
            <Row>
                {props.items.map((item) => {
                    return (
                        <Col xs={{ size: 4, offset: value }}>
                            <Book {...item} />
                            <br />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default Books;
