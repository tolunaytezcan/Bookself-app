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
    let deger;

    isList? deger = 4 : deger = 12;

    return (
        <div>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>Liste</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem
                        onClick={() => {
                            setList(true);
                        }}
                    >
                        Tekli liste
          </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                        onClick={() => {
                            setList(false);
                        }}
                    >
                        Üçlü liste
          </DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
            
            <Row>
                {props.items.map((item) => {
                    return (
                        <Col xs={{ size: 4, offset: deger }}>
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
