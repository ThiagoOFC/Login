import { login } from "./utils"
import "./index.css"
import { useState } from "react"
import "/home/thiago/workspace/fernandev-react-challenge-02/src/asstes/sea.png"
import { unstable_renderSubtreeIntoContainer } from "react-dom"

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassowrd] = useState("")
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const handleEmail = (evente) => {
    const value = evente.target.value
    console.log(value)
    setEmail(value)
  }
  const handlePassord = (evente) => {
    const value = evente.target.value
    console.log(value)
    setPassowrd(value)
  }
  //condisional sobre o valor de setEmail e setPassowrd
  const handleButton = () => {
    console.log()
    setError(null)
    setDisabled(true)
    // promisse espera a ação da função login ser realizada .then( para quando estiver correta ou seja o if resolve) .catch( para quando der error ou seja no else reject) .finally sempre sera rodado
    let values = { email: email, password: password }
    login(values)
      .then(() => {
        alert("deu tudo certo")
        console.log("sucesso")
      })

      //.catch( para quando der error ou seja no else reject)
      .catch((error) => {
        console.log(error)
        setError(error)
      })
      .finally(() => setDisabled(false))
  }

  return (
    <div className="wrapper">
      <div className="login-form">
        <h1>🚀 SEA TELECOM 🚀 </h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {error && <div className="errorMessage">{error.message}</div>}
        <div className="row">
          <label htmlFor={"email"}>Email</label>
          <input
            id={"email"}
            type={"email"}
            autoComplete="off"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="row">
          <label htmlFor={"password"}>Password</label>
          <input
            id={"password"}
            type={"password"}
            value={password}
            onChange={handlePassord}
          />
        </div>

        <div className="button">
          <button
            disabled={email === "" || password.length < 6 || disabled}
            onClick={handleButton}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
