import React from "react";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";

function Home() {
  const handleRegister = () => {
    alert("Cliquei em Registrar Usuário");
  };

  const handleList = () => {
    alert("Cliquei em Listar Usuários");
  };

  return (
    <div style={{
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <PageTitle>Bem-vindo ao Sistema de Usuários</PageTitle>

        <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            marginTop: '20px'
         }}>
            <Button label="Registrar Usuário" onClick={handleRegister} />
            <Button label="Listar Usuários" onClick={handleList} />
        </div>
    </div>
  );
}

export default Home;
