import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  FormFeedback,
} from "reactstrap";
import { Formik } from "formik";
import { siralama, ratings, statuses } from "../../constants";
import { addBook } from "../../state/ducks/books/action";
import * as Yup from "yup";
import { withRouter } from "react-router";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is a required field"),
  author: Yup.string().required("Author is a required field"),
  review: Yup.string().min(30,"Too short! Please enter at least 30 characters"
  ),
});

const AddBookForm = (props) => {
  console.log(props);
  let initialValues = {
    title: "",
    author: "",
    category: "Bootstrap",
    description: "",
    rating: "1",
    imageUrl: "",
    status: "Not read",
    review: "",
    goodreadsLink:""
  };
  if (props.isEdit && props.book) {
    initialValues = { ...props.book };
  }
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          props.addBook(values, props.history);
        }}
        enableReinitialize={true}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Name of the book"
                  value={values.title}
                  onChange={handleChange}
                  invalid={errors.title}
                />
                {errors.title && <FormFeedback>{errors.title}</FormFeedback>}
              </FormGroup>
              <FormGroup>
                <Label for="author">Author</Label>
                <Input
                  type="text"
                  name="author"
                  id="author"
                  placeholder="Author of the book"
                  value={values.author}
                  onChange={handleChange}
                  invalid={errors.author}
                />
                {errors.author && <FormFeedback>{errors.author}</FormFeedback>}
              </FormGroup>
              <FormGroup>
                <Label for="imageUrl">Image URL</Label>
                <Input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  placeholder="Image of the book"
                  value={values.imageUrl}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Category</Label>
                <Input
                  type="select"
                  name="category"
                  id="category"
                  value={values.category}
                  onChange={handleChange}
                  
                >
                  {siralama.map((category) => {
                    return <option>{category}</option>;
                  })}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input
                  type="textarea"
                  name="description"
                  id="description"
                  value={values.description}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Rating</Label>
                <Input
                  type="select"
                  name="rating"
                  id="rating"
                  value={values.rating}
                  onChange={handleChange}
                >
                  {ratings.map((score) => {
                    return <option>{score}</option>;
                  })}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Status</Label>
                <Input
                  type="select"
                  name="status"
                  id="status"
                  value={values.status}
                  onChange={handleChange}
                >
                  {statuses.map((status) => {
                    return <option>{status}</option>;
                  })}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Review</Label>
                <Input
                  type="textarea"
                  name="review"
                  id="review"
                  value={values.review}
                  placeholder="Not required. But if it is to be written, at least 30 characters must be entered."
                  onChange={handleChange}
                  invalid={errors.review}
                />
                {errors.review && <FormFeedback>{errors.review}</FormFeedback>}
              </FormGroup>

              <FormGroup>
                <Label for="goodreadsLink">Goodreads Link</Label>
                <Input
                  type="url"
                  name="goodreadsLink"
                  id="goodreadsLink"
                  placeholder="Goodreads Link"
                  value={values.goodreadsLink}
                  onChange={handleChange}
                />

              </FormGroup>
              {props.isEdit ? (
                <Button color="primary">Save</Button>
              ) : (
                  <Button color="primary">Add</Button>
                )}
            </Form>
          )}
      </Formik>
    </Container>
  );
};

const mapDispatchToProps = {
  addBook: addBook,
};

export default withRouter(connect(null, mapDispatchToProps)(AddBookForm));
