import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Selecter } from './adder';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Selecter desc="Barberton Daisy" price="$119.00" par="SKU:1995751877966"></Selecter>
  <Selecter desc="Barberton Daisy" price="$119.00" par="SKU:1995751877966"></Selecter>
  <Selecter desc="Barberton Daisy" price="$119.00" par="SKU:1995751877966"></Selecter>
  </React.StrictMode>
);

