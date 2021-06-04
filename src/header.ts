import { getUser } from './utils/getUser';
import logo from './assets/logo.png'

const createLogoContent = (): void => {
  const logoContainer = document.getElementById('logo-container');
  const img = document.createElement('img');
  img.src = logo;
  logoContainer.appendChild(img);
}

const createUserContent = (id: string): void => {
  const userContainer = document.getElementById('user-container');
  const user = getUser(id);
  userContainer.innerHTML = `${user.name.charAt(0).toUpperCase()} ${user.lastName.charAt(0).toUpperCase()}`
}

export const createHeader = (): void => {
  createLogoContent();
  createUserContent("id1");
}