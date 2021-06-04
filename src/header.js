import { getUser } from './utils/getUser';
import logo from './assets/logo.png'

const createLogoContent = () => {
  const logoContainer = document.getElementById('logo-container');
  const img = document.createElement('img');
  img.src = logo;
  logoContainer.appendChild(img);
}

const createUserContent = (id) => {
  const userContainer = document.getElementById('user-container');
  const user = getUser(id);
  userContainer.innerHTML = `${user.name.charAt(0).toUpperCase()} ${user.lastName.charAt(0).toUpperCase()}`
}

export const createHeader = () => {
  createLogoContent();
  createUserContent("id1");
}