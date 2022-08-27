export default (user) => {
  user
    ? localStorage.setItem('user', JSON.stringify(user))
    : localStorage.clear();
};
