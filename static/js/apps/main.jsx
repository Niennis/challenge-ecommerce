import React from 'react';
import ReactDOM from 'react-dom';
import Catalog from './catalog';
import Cart from './cart'

const App = ({ message }) => <div>{ message }
                                  <Catalog/>
                                   </div>;


ReactDOM.render(<App message="hello world" />, document.getElementById('app'));
