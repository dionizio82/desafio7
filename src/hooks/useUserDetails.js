import { useState, useEffect } from 'react';

const useUserDetails = () => {
  const [username, setUsername] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [genero, setGenero] = useState('');

  useEffect(() => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
    const userToken = JSON.parse(localStorage.getItem("user_token"));

    if (usersStorage && userToken) {
      const currentUser = usersStorage.find(user => user.email === userToken.email);
      if (currentUser) {
        setUsername(currentUser.username || '');
        setCpf(currentUser.cpf || '');
        setEndereco(currentUser.endereco || '');
        setGenero(currentUser.genero || '');
      }
    }
  }, []);

  const updateUserDetails = (newUsername, newCPF, newEndereco, newGenero) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
    const userToken = JSON.parse(localStorage.getItem("user_token"));

    if (usersStorage && userToken) {
      const userIndex = usersStorage.findIndex(user => user.email === userToken.email);
      if (userIndex !== -1) {
        usersStorage[userIndex] = {
          ...usersStorage[userIndex],
          username: newUsername,
          cpf: newCPF,
          endereco: newEndereco,
          genero: newGenero
        };

        localStorage.setItem("users_bd", JSON.stringify(usersStorage));

        // Atualiza o estado local após a atualização do localStorage
        setUsername(newUsername);
        setCpf(newCPF);
        setEndereco(newEndereco);
        setGenero(newGenero);
      }
    }
  };

  return { username, cpf, endereco, genero, updateUserDetails };
};

export default useUserDetails;
