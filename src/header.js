import { getUser } from './utils/getUser';

export const createHeader = () => {
  const logoContainer = document.querySelector('.logo');
  const userContainer = document.querySelector('.user');
  const user = getUser("id1");
  userContainer.innerHTML = `${user.name.charAt(0).toUpperCase()} ${user.lastName.charAt(0).toUpperCase()}`
}