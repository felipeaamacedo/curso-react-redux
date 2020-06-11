import './App.css'
import React from 'react'

import Card from './components/layout/Card'

import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import DiretaPai from './components/comunicacao/DiretaPai'

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo='#09 - Comunicação direta' color='#8a9b68'>
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo='#08 - Renderização condicional' color='#FF5733'>
                <ParOuImpar numero={21}></ParOuImpar>

                <UsuarioInfo usuario={{ nome: 'Fernando' }}></UsuarioInfo>

                <UsuarioInfo usuario={{ email: 'lucassurfingweb@mail.com' }}></UsuarioInfo>

                <UsuarioInfo />
            </Card>

            <Card titulo='#07 - Desafio Repetição' color='#428715'>
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo='#06 - Repetição' color='#32a852'>
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo='#05 - Componente com filhos' color='#85144b'>
                <Familia sobrenome='Ferreira'>
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>


            <Card titulo='#04 - Desafio Aleatório' color='#EB7260'>
                <Aleatorio maxNumber={12} minNumber={2} />
            </Card>

            <Card titulo='#03 - Fragmento' color='#29ABA4'>
                <Fragmento />
            </Card>

            <Card titulo='#02 - Com Parâmetro' color='#3A9AD9'>
                <ComParametro
                    titulo='Situação Aluno' aluno='Pedro'
                    nota={9.3} />
            </Card>

            <Card titulo='#01 - Primeiro Componente' color='#354458'>
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>