import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from "./ContactPage.module.scss";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Name can not be less than 3 characters")
      .max(25, "Name can not be more than 25 characters")
      .typeError("Please type a character")
      .required("Please enter your name"),

    subject: yup
      .string()
      .min(3, "Subject can not be less than 3 characters")
      .typeError("Please enter a character")
      .required(),
      body: yup
      .string()
      .min(3, "Message can not be less than 3 characters")
      .typeError("Please enter a character")
      .required(),
    email: yup
      .string()
      // .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "skriv inn en gyldig epost")
      .email("Please enter a valid email")
      .typeError("Please enter a valid email")
      .required("Please enter a valid email"),
      

}).required()

function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [fullName, setFullName] = useState("")

  function onSubmit(data){
    setFullName(data.fullName)

  }

  return (
    <>
      <div className={styles.form_container}>
        <h1>Contact us</h1>
        <h2>Please submit your inquiry below</h2>
        <h3>{fullName ? `Hi ${fullName}! Your form has been submitted!` : ""}</h3>
        <form className={styles.submit_form} onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Full name" type="text" {...register('fullName')} />
          <p className="error-message">{errors.fullName?.message}</p>
          <input placeholder='Subject' {...register('subject')} />
          <p className="error-message">{errors.subject?.message}</p>
          <input placeholder='E-mail'{...register("email")} />
          <p className='error-message'>{errors.email?.message}</p>
          <textarea rows="6" placeholder='Message'{...register("body")} />
          <p className='error-message'>{errors.body?.message}</p>
          <input className={styles.btn_submit} type ="submit"/>
        </form>
      </div>
    </>

  )
}

export default ContactPage