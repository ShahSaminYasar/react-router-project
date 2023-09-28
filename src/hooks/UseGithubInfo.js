export const GithubInfo = async () => {
  const response = await fetch("https://api.github.com/users/shahsaminyasar");
  return response.json();
};
