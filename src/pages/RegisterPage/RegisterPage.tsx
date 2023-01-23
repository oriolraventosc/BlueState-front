import { useState } from "react";
import LoginRegisterFormBase from "../../components/LoginRegisterForm/LoginRegisterForm";
import useUser from "../../hooks/useUser/useUser";

const RegisterPage = (): JSX.Element => {
  const intialFormData = {
    username: "",
    password: "",
  };
  const [initialForm, setData] = useState(intialFormData);
  const { userRegister } = useUser();

  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setData({
      ...initialForm,
      [event.target.id]: event.target.value,
    });
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formDataToSubmit = {
      username: initialForm.username,
      password: initialForm.password,
    };
    await userRegister(formDataToSubmit);
  };
  return (
    <>
      <LoginRegisterFormBase
        title="Register"
        buttonText="Register"
        preLink="Already a user?"
        link="/login"
        linkText="Sign in here"
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default RegisterPage;
