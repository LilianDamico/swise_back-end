const { object, string } = require("yup");

const register = object({
  user_name: string().required("Nome de usuário é obrigatório."),
  user_email: string().email("Email inválido."),
  user_password: string().min(6, "Senha precisa conter 6 ou mais caracteres."),
})
  .noUnknown("Campo inválido no formulário.")
  .strict(true);

const login = object()
  .shape({
    user_email: string().required("Email é obrigatório.").email("Email inválido."),
    user_password: string().required("Senha é obrigatória"),
  })
  .noUnknown("Campo inválido no formulário.")
  .strict(true);

module.exports = { register, login };
