import { React, useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Context from "../../context/index";
import { useNavigate } from "react-router-dom";
import Title from "../../component/tittle/Title";
import CustomButton from "../../component/buttom/Buttom";
import { ContainerInput, CustomForm, FormLogin } from "./Styled";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(Context);

  const validateForm = () => email.length > 0 && password.length > 0;
  // const registerPage = navigate("/register");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email: email, password: password };
    signIn(user);
  };

    return (
      <section>
        <ContainerInput>
          <Title fSize="30px" tAlign="center" mBottom="2rem" mTop="1rem">
            Faça seu login
          </Title>
          <FormLogin onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>

              <CustomForm
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="senha">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                autoFocus
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <CustomButton
              mTop="2rem"
              type="submit"
              disabled={!validateForm()}
              onUserPress={handleSubmit}
            >
              Login
            </CustomButton>
            <CustomButton mTop="1rem"  bColor="grey">
              Registrar
            </CustomButton>
          </FormLogin>
        </ContainerInput>
      </section>
    );
  }


export default Login;
