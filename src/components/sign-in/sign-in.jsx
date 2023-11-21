import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase";
import FormInput from "../form-input/form-input";
import "./sign-in-styles.scss";
import Button from "../button/button_types";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [fromFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = fromFields;

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };
  //   console.log(fromFields);
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      resetForm();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;
        case "auth/user-not-found":
          alert("User Not Found");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...fromFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already Have an Account??</h2>
      <span>Sign in with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
