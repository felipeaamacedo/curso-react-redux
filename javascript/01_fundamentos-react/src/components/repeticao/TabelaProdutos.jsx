import './TabelaProdutos.css'
import React from 'react'
import produtos from '../../data/produtos'


export default props => {

    const tabelaDeProdutos = produtos.map((produto,i) => {
        return (
            <tr className={i % 2 === 0 ? 'Par' : ''} key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.item}</td>
                <td>R$ {produto.preco.toFixed(2)}</td>
            </tr>
        )
    })

    return (
        <div className='TabelaProdutos'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Item</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {tabelaDeProdutos}
                </tbody>
            </table>
        </div>
    )
}