import React from 'react';
import './Styles/Styles.css';
import image from '../../../assets/github.jpg';

const Ticket = React.forwardRef((props, ref) => {
    return(
        <div ref={ref} className='mt-5 m-4'>
            <div>
                <script src="script.js"></script>
            </div>
            <div>
                <div className="ticket">
                <img
                src={image}
                alt="Logotipo" />
                <p className="centrado">
                    TICKET DE VENTA <br/>
                    New New York<br/>
                    17/10/2017
                    02:22 a.m.
                </p>
                    <table>
                        <thead>
                            <tr>
                                <th className="cantidad">CANT</th>
                                <th className="producto">PRODUCTO</th>
                                <th className="precio">$$</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="cantidad">1.00</td>
                                <td className="producto">CHEETOS VERDES 80 G</td>
                                <td className="precio">$8.50</td>
                            </tr>
                            <tr>
                                <td className="cantidad">2.00</td>
                                <td className="producto">KINDER DELICE</td>
                                <td className="precio">$10.00</td>
                            </tr>
                            <tr>
                                <td className="cantidad">1.00</td>
                                <td className="producto">COCA COLA 600 ML</td>
                                <td className="precio">$10.00</td>
                            </tr>

                            <tr>
                                <td className="cantidad"></td>
                                <td className="producto">TOTAL</td>
                                <td className="precio">$28.50</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="centrado">¡GRACIAS POR SU COMPRA!<br/></p>
                </div>
            </div>
        </div>
    )
});

export default Ticket