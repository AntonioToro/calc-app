import { FC } from 'react'
import Button, { ButtonClickHandler } from './Button'

type Props = {
    onContentClear: ButtonClickHandler,
    onDelete: ButtonClickHandler
}

/**
 * Componente que contiene las funciones de borrar y limpiar las operaciones y números de la calculadora.
 * @param {function}    onContentClear - Función que se lanzará al pulsar el boton clear en la calculadora.
 * @param {function}    onDelete - Función que se lanzará al pulsar el boton <- en la calculadora.
 * @returns - Contenedor con los botones clear y <-.
 */
const Functions: FC<Props> = ({onContentClear, onDelete}) => (
    <section className="functions">
        <Button type="button-long-text" text="clear" clickHandler={onContentClear}/>
        <Button text="&larr;" clickHandler={onDelete}/>
    </section>
)


export default Functions