import NotifyIcon from '../../assets/images/notify.svg';
import './style.css';

export default function NotifyButton() {
  return (
    <div className="btn-red">
      <img src={NotifyIcon} alt="Notificar" />
    </div>
  );
}
