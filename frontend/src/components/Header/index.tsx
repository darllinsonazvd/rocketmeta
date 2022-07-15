import Logo from '../../assets/images/logo.png';
import './style.css';

export default function Header() {
  return (
    <header>
      <div className="brand">
        <img src={Logo} alt="RocketMeta logo" />
        <h1>RocketMeta</h1>
        <p>
          Feito com ❤️ por
          <a href="https://github.com/darllinsonazvd" target="_blank">
            &nbsp;Darllinson Azevedo
          </a>
        </p>
      </div>
    </header>
  );
}
