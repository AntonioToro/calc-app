import { FC } from 'react'
import Button, { ButtonClickHandler } from './Button'

type Props = {
    onClickOperation: ButtonClickHandler,
    onClickEqual: ButtonClickHandler
}

/**
 * Componente que contiene todas las operaicones matemáticas de la calculadora.
 * @param {function}    onClickOperation - Función que se lanzará al pulsar una de las operaciones matemáticas (+,-,*,/) en la calculadora.
 * @param {function}    onClickEqual - Función que se lanzará al pulsar el boton = en la calculadora.
 * @returns - Contenedor con todos los botones que contienen operaciones matemáticas en la calculadora.
 */
const MathOperations: FC<Props> = ({onClickOperation, onClickEqual}) => (
    <section className="math-operations">
        <Button text="+" clickHandler={onClickOperation} />
        <Button text="-" clickHandler={onClickOperation} />
        <Button text="*" clickHandler={onClickOperation} />
        <Button text="/" clickHandler={onClickOperation} />
        <Button text="=" clickHandler={onClickEqual} />
    </section>
)

export default MathOperations