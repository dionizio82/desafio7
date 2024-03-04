import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import useUserDetails from "../../hooks/useUserDetails";
import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const { username, cpf, endereco, genero, updateUserDetails } = useUserDetails();
  const navigate = useNavigate();


  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingCPF, setIsEditingCPF] = useState(false);
  const [isEditingEndereco, setIsEditingEndereco] = useState(false);
  const [isEditingGenero, setIsEditingGenero] = useState(false);


  const [newUsername, setNewUsername] = useState(username);
  const [newCPF, setNewCPF] = useState(cpf);
  const [newEndereco, setNewEndereco] = useState(endereco);
  const [newGenero, setNewGenero] = useState(genero);

  const handleEditSubmit = (field) => {
    switch (field) {
      case 'username':
        updateUserDetails(newUsername, cpf, endereco, genero);
        setIsEditingUsername(false);
        break;
      case 'cpf':
        updateUserDetails(username, newCPF, endereco, genero);
        setIsEditingCPF(false);
        break;
      case 'endereco':
        updateUserDetails(username, cpf, newEndereco, genero);
        setIsEditingEndereco(false);
        break;
      case 'genero':
        updateUserDetails(username, cpf, endereco, newGenero);
        setIsEditingGenero(false);
        break;
      default:
        break;
    }
  };

  return (
    <C.Container>
      <C.Title>Seja bem vindo {username}</C.Title>
      
      {isEditingUsername ? (
  <>
    <label htmlFor="username">Nome:</label>
    <input id="username" type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
    <C.EditButton onClick={() => handleEditSubmit('username')}>Salvar</C.EditButton>
  </>
) : (
  <p>Nome: {username} <C.EditButton onClick={() => setIsEditingUsername(true)}>Editar</C.EditButton></p>
)}

{isEditingCPF ? (
  <>
    <label htmlFor="cpf">CPF:</label>
    <input id="cpf" type="text" value={newCPF} onChange={(e) => setNewCPF(e.target.value)} />
    <C.EditButton onClick={() => handleEditSubmit('cpf')}>Salvar</C.EditButton>
  </>
) : (
  <p>CPF: {cpf} <C.EditButton onClick={() => setIsEditingCPF(true)}>Editar</C.EditButton></p>
)}

{isEditingEndereco ? (
  <>
    <label htmlFor="endereco">Endereço:</label>
    <input id="endereco" type="text" value={newEndereco} onChange={(e) => setNewEndereco(e.target.value)} />
    <C.EditButton onClick={() => handleEditSubmit('endereco')}>Salvar</C.EditButton>
  </>
) : (
  <p>Endereço: {endereco} <C.EditButton onClick={() => setIsEditingEndereco(true)}>Editar</C.EditButton></p>
)}

{isEditingGenero ? (
  <>
    <label htmlFor="genero">Gênero:</label>
    <input id="genero" type="text" value={newGenero} onChange={(e) => setNewGenero(e.target.value)} />
    <C.EditButton onClick={() => handleEditSubmit('genero')}>Salvar</C.EditButton>
  </>
) : (
  <p>Gênero: {genero} <C.EditButton onClick={() => setIsEditingGenero(true)}>Editar</C.EditButton></p>
)}


      <Button Text="Sair" onClick={() => [signout(), navigate("/")]} >Sair</Button>
    </C.Container>
  );
};

export default Home;

