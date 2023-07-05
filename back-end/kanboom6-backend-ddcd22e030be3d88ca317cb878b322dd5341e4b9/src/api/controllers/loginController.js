const { loginService } = require("../services/loginService");

const login_check = async (req, res) => {
  const login = await loginService(req.body);

  if (!login) {
    return res.status(401).json({ message: "Email ou senha incorretos.", type: "error" });
  }

  return res.status(200).json({ message: "Login efetuado.", type: "success", token: login });
};

module.exports = { login_check };
