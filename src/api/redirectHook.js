export function redirectToLogin(history, res) {
  if (res.data.redirect) {
    history.push('/signin?needToLogin=true');
    return true;
  }
  return false;
}