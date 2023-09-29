import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ButtonStyled,
  ErrorMsgStyled,
  FieldStyled,
  FormStyled,
  LabelStyled,
} from './ContactFofm.styled';

const initialValues = {
  name: '',
  number: '',
};

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export function ContactFofm({ addContact }) {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    addContact(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
    >
      <FormStyled>
        <LabelStyled>
          Name
          <FieldStyled
            type="text"
            name="name"
            placeholder="Charles de Castelmore d'Artagnan"
          />
          <ErrorMsgStyled name="name" component="div" />
        </LabelStyled>
        <LabelStyled>
          Phone
          <FieldStyled type="tel" name="number" placeholder="Phone" />
          <ErrorMsgStyled name="number" component="div" />
        </LabelStyled>
        <ButtonStyled type="submit">Add contact</ButtonStyled>
      </FormStyled>
    </Formik>
  );
}
