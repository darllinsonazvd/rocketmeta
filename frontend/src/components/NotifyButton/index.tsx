import axios from 'axios';
import { toast } from 'react-toastify';
import NotifyIcon from '../../assets/images/notify.svg';
import { BASE_URL } from '../../utils/request';

import './style.css';

type NotifyButtonProps = {
  saleId: number;
};

function handleClick(id: number) {
  axios.get(`${BASE_URL}/sales/${id}/notification`).then(response => {
    toast.info('SMS enviado com sucesso!');
  });
}

export default function NotifyButton({ saleId }: NotifyButtonProps) {
  return (
    <div className="btn-red" onClick={() => handleClick(saleId)}>
      <img src={NotifyIcon} alt="Notificar" />
    </div>
  );
}
