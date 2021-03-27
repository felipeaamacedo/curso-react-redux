import React, {useContext, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'


import DataContext from "../../data/DataContext";
import { AppContext } from "../../data/Store"; 

const UseContext = (props) => {
  const context = useContext(DataContext);

  /*A função é uma maneira de trabalhar
    com o atributo que quero alterar sem mudar com
    a cara do objeto.
    
    É importante desestruturar o contex com DESTRUCTURE
    e somente alterar o number.
  */
  function addNumber(delta) {
    context.setState({
      ...context.state,
      number: context.state.number + delta
    });
  }

  //Exercício 2

  const { number, text, setNumber, setText } = useContext(AppContext);
  useEffect(
    function () {
      if (number > 1250) {
        setText("Eitaa....");
      }
    },
    [number]
  );

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

    <div>
        <h1>Exercício #01 data context</h1>
        <div>{context.state.text}</div>
        <div>{context.state.number}</div>
        <div>
          <button onClick={() => addNumber(-1)}>-1</button>
          <button onClick={() => addNumber(+1)}>+1</button>
        </div>
      </div>
      <div>
        <h1>Exercício #02 Store component</h1>
        <div>{text}</div>
        <span>{number}</span>
        <div>
          <button onClick={() => setNumber(number - 1)}>-1</button>
          <button onClick={() => setNumber(number + 1)}>+1</button>
        </div>
      </div>



        </div>
    )
}

export default UseContext
