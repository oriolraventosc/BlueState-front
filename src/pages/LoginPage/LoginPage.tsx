import { useState } from "react";
import LoginRegisterFormBase from "../../components/LoginRegisterForm/LoginRegisterForm";
import useUser from "../../hooks/useUser/useUser";

const LoginPage = (): JSX.Element => {
  const intialFormData = {
    username: "",
    password: "",
  };
  const [initialForm, setData] = useState(intialFormData);
  const { userLogin } = useUser();

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
    await userLogin(formDataToSubmit);
  };
  return (
    <>
      <LoginRegisterFormBase
        title="Sign in"
        buttonText="Sign in"
        preLink="Need an account?"
        link="/register"
        linkText="Register here"
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default LoginPage;
