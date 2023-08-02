import styles from "../styles/contact-form.module.css";
import { useState } from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { CustomInput, CustomArea, Button, Modal } from "../components";

const ContactForm = () => {
  const [submittedName, setSubmittedName] = useState("");
  const [modal, setModal] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    topic: "",
    issue: "",
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      // alert(JSON.stringify(values, null, 2));
      setSubmittedName(values.name);
      toggleModal();
      setSubmitting(false);
      resetForm();
    }, 400);
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Username must be at least 3 characters long")
      .required("Required"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Required"),
    topic: yup
      .string()
      .min(3, "Topic must be at least 3 characters long")
      .max(30, "Topic cannot be more than 30 characters long")
      .required("Required"),
    issue: yup
      .string()
      .min(10, "Too short, describe the issue in more detail please")
      .max(50, "Description of an issue cannot be more than 50 characters long")
      .required("Required"),
  });

  return (
    <section className={styles["form-container"]}>
      <h2 className="visually-hidden">Contact form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput name="name" type="text" placeholder="Name" />
            <CustomInput
              name="email"
              type="email"
              placeholder="Email address"
            />
            <CustomInput
              name="topic"
              type="text"
              placeholder="Choose a topic"
            />

            <CustomArea
              name="issue"
              type="text"
              placeholder="Describe the issue"
            />

            <Button disabled={isSubmitting} type="submit" text="Submit" />
          </Form>
        )}
      </Formik>
      <Modal name={submittedName} modal={modal} toggleModal={toggleModal} />
    </section>
  );
};

export default ContactForm;
