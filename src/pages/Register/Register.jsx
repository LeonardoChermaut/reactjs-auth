import React, { useState } from "react";
import { ContainerInput, CustomForm, FormRegister } from "./Styled";
import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Title from "../../component/Title/Title";
import CustomButton from "../../component/Buttom/Buttom";
import register from "../../service/BaseApi/post-request";

export default function Register() {
  let navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  function validateForm() {
    return (
      nome.length > 2 &&
      sobrenome.length > 4 &&
      email.length > 10 &&
      senha.length > 7
    );
  }

  function returnLogin() {
    navigate("/login");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const bodyRequest = {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      senha: senha,
    };
    register(bodyRequest);
  }

  return (
    <section>
      <ContainerInput>
        <Title fSize="30px" tAlign="center" mBottom="1rem">
          Registro
        </Title>
        <Title fSize="15px" tAlign="center" mBottom="1rem">
          Preencha com informações válidas para avançar no cadastro.
        </Title>
        <FormRegister onSubmit={handleSubmit}>
          <Row>
            <Col>
              <CustomForm
                placeholder="Nome"
                onChange={(e) => setNome(e.target.value)}
              />

              <CustomForm
                placeholder="Sobrenome"
                onChange={(e) => setSobrenome(e.target.value)}
              />

              <CustomForm
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <CustomForm
                placeholder="Senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </Col>
          </Row>
          <CustomButton
            mTop="1rem"
            type="submit"
            onUserPress={handleSubmit}
            disabled={!validateForm()}
          >
            Registrar
          </CustomButton>
          <CustomButton mTop="1rem" onUserPress={returnLogin} bColor="grey">
            Voltar
          </CustomButton>
        </FormRegister>
      </ContainerInput>
    </section>
  );
}
