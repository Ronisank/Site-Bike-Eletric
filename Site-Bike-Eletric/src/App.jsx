import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import "./components/Form.css";
import Header from "./components/Header";

function App() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handlerSubmit() {
    const form = {
      nome,
      email,
      mensagem
    };
    console.log("Formulário a ser enviado: ", form);
  }
  return (
    <>
      <Header></Header>
      <div className="form container">
        <fieldset>
          <legend>Nome</legend>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend>Email</legend>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend>Texto</legend>
          <textarea
            name="text"
            placeholder="Seu texto aqui"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          ></textarea>
        </fieldset>
        <button onClick={() => handlerSubmit()}>Enviar</button>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
