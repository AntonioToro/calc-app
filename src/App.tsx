/* eslint no-eval:0 */

import { useState, FC } from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

/**
 * Componente principal de la aplicación.
 * @returns - Todos los componentes para mostrar la calculadora.
 */
const App: FC = () => {
    const [ stack, setStack ] = useState("")

    const items = words(stack, /[^-^+^*^/^]+/g) // Formateamos el contenido del stack para mostrar en la calculadora solo el numero y no los simbolos de las operaciones matemáticas.
    const value = items.length > 0 ? items[items.length-1] : '0' // Formateamos el contenido de value para mostrar solo el último número marcado en la calculadora.

    return (
    <main className='react-calculator'>
        <Result value={value}/>
        <Numbers onClickNumber={ number => setStack(`${stack}${number}`) } />
        <Functions 
            onContentClear={ () => setStack('') }
            onDelete={() =>{
                if (stack.length > 0) {
                    const newStack = stack.substring(0,stack.length - 1)
                    setStack(newStack)
                }
            }}
        />
        <MathOperations 
            onClickOperation={ operation => setStack(`${stack}${operation}`) }
            onClickEqual={ equal => setStack(eval(stack).toString()) }/>
    </main>)
}

export default App