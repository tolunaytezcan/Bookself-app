import React, { useState } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    ButtonDropdown,
    CardLink,
    NavLink,
    Collapse,
    Progress,
} from "reactstrap";
import { StyledBookCard } from "./BookStyles";
import { Link } from "react-router-dom";

const Book = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const {
        imageUrl,
        rating,
        title,
        id,
        description,
        goodreadsLink,
        author,
        review,
    } = props;

    return (
        <StyledBookCard
            body
            inverse
            style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
            <CardImg top width="100%" src={imageUrl} alt={title} />
            <CardBody>
                <CardText>
                    <div>
                        <Progress
                            multi
                            style={{
                                height: "30px",
                                fontSize: "16px",
                            }}
                        >
                            <Progress
                                animated
                                striped
                                bar
                                color="warning"
                                value={rating}
                                max="5"
                                className="text-center"
                            >
                                <b>Rating: {`${rating}\u{2605}`}</b>
                            </Progress>
                            <Progress
                                animated
                                striped
                                bar
                                value={5 - rating}
                                max="5"
                                className="text-center"
                            />
                        </Progress>
                    </div>
                </CardText>
                <CardText>
                    <b>{title}</b>
                </CardText>
                <CardText>
                    <b>Author:</b>
                    {`${author}`}
                </CardText>

                <CardText>
                        <NavLink href={goodreadsLink} target="_blank" rel="noopener noreferrer">
                        <b>Goodreads Link{"\u{27A4}"}</b>
                         </NavLink>
                         
                </CardText>

                <CardText>
                    <Button onClick={toggle}>
                        Review
            <Collapse isOpen={isOpen}>
                            <Card>
                                <CardBody style={{ backgroundColor: "#333", color: "white" }}>
                                    {review}
                                </CardBody>
                            </Card>
                        </Collapse>
                    </Button>
                </CardText>

                <CardLink>
                    <Link to={`/edit-book/${id}`} style={{ textDecoration: "underline" }}>
                        Edit Book
          </Link>
                    {"\u{270e}"}
                </CardLink>
            </CardBody>
        </StyledBookCard>
    );
};

export default Book;
