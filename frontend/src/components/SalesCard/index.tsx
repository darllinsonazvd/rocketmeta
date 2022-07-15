import axios from 'axios';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Sale } from '../../models/sale';
import { BASE_URL } from '../../utils/request';
import NotifyButton from '../NotifyButton';

import './style.css';

export default function SalesCard() {
  const MINIMUM_DATE_TO_PICK = new Date(new Date().setDate(new Date().getDate() - 365)); // Set min date to pick (1 year ago)
  const MAXIMUM_DATE_TO_PICK = new Date(); // Set max date to pick

  const [minDate, setMinDate] = useState(MINIMUM_DATE_TO_PICK);
  const [maxDate, setMaxDate] = useState(MAXIMUM_DATE_TO_PICK);

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    const dMin = minDate.toISOString().slice(0, 10);
    const dMax = maxDate.toISOString().slice(0, 10);

    axios.get(`${BASE_URL}/sales?minDate=${dMin}&maxDate=${dMax}`).then(response => {
      setSales(response.data.content);
    });
  }, [minDate, maxDate]);

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Vendas</h2>
        <div>
          <div className="form-control-container">
            De:
            <DatePicker
              selected={minDate}
              onChange={(date: Date) => setMinDate(date)}
              className="form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="form-control-container">
            Até:
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
              {sales.map(sale => {
                return (
                  <tr key={sale.id}>
                    <td className="show-992">{sale.id}</td>
                    <td className="show-576">{new Date(sale.date).toLocaleDateString()}</td>
                    <td>{sale.sellerName}</td>
                    <td className="show-992">{sale.visited}</td>
                    <td className="show-992">{sale.deals}</td>
                    <td>R$ {sale.amount.toFixed(2)}</td>
                    <td>
                      <div className="notify-button-container">
                        <NotifyButton saleId={sale.id} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
