import './Footer.css';

function Footer() {
  return (
    <>
    <footer className='footer-bg'>
      <div className="footer container">
        <img
          className="img-footer"
          src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg"
          alt="bikcraft"
        />
        <div className="div-contato">
          <h3>CONTATO</h3>
          <ul className="ul-contato">
            <li>+55 21 9999-9999</li>
            <li>contato@bikcraft.com</li>
            <li>Rua Ali Perto, 42 - Botafogo</li>
            <li>Rio de Janeiro - RJ</li>
          </ul>
        </div>
        <div className="div-info">
          <h3>INFORMAÇÔES</h3>
          <ul className="ul-info">
            <li>Bicicletas</li>
            <li>Seguros</li>
            <li>Contato</li>
            <li>Termos e condições</li>
          </ul>
        </div>
        <div className="div-direitos">
          <p className='p-direitos'>Bikcraft © Alguns direitos reservados.</p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;
