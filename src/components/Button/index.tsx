import { FC } from 'react'
import './Button.css'

export type ButtonClickHandler = (text: string) => void

type Props = { 
    type?: string,
    text: string,
    clickHandler: ButtonClickHandler
}

/**
 * Componente genérico de los Botones de la calculadora.
 * @param {string}      type - Indicamos que Clase de estilo tendrá el botón.
 * @param {string}      text - Introducimos el nombre que tendrá el botón (Required).
 * @param {function}    clickHandler - Función que se lanzara al pulsar el botón, por parámetro devolvera el valor introducido en la propiedad text (Required).
 * @returns - Ccomponente del tipo button.
 */
const Button : FC<Props> = ({ type, text, clickHandler }) => (
    <button className={type} onClick={() => clickHandler(text)}>
        <span>{text}</span>
    </button>
)

export default Button