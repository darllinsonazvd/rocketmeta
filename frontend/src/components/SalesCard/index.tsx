import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import NotifyButton from '../NotifyButton';
import './style.css';

export default function SalesCard() {
  const min = new Date(new Date().setDate(new Date().getDate() - 365)); // Set min date to pick (1 year ago)
  const max = new Date(); // Set max date to pick

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Vendas</h2>
        <div>
          <div className="form-control-container">
            <DatePicker
              selected={minDate}
              onChange={(date: Date) => setMinDate(date)}
              className="form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="form-control-container">
            <DatePicker
              selected={maxDate}
              onChange={(date: Date) => setMaxDate(date)}
              className="form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>
        <div>
          <table className="sales-table">
            <thead>
              <tr>
                <th className="show-992">ID</th>
                <th className="show-576">Data</th>
                <th>Vendedor</th>
                <th className="show-992">Visitas</th>
                <th className="show-992">Vendas</th>
                <th>Total</th>
                <th>Notificar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="show-992">#1337</td>
                <td className="show-576">11/07/2022</td>
                <td>Darllinson</td>
                <td className="show-992">15</td>
                <td className="show-992">13</td>
                <td>R$ 13371.3</td>
                <td>
                  <div className="notify-button-container">
                    <NotifyButton />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
