import { FC } from 'react'
import Button, { ButtonClickHandler } from './Button'

const numbers = [7,8,9,4,5,6,1,2,3,0] // Números que se van a mostrar en la calculadora.

const renderButtons = (onClickNumber: ButtonClickHandler) => {
    const renderButton = (number: number) => (
        <Button 
            key={number}
            text={number.toString()}
            clickHandler={onClickNumber}
        />
    )
    return numbers.map(renderButton)
}

type Props = {
    onClickNumber: ButtonClickHandler
}

/**
 * Componente con el que se renderizan los números que se mostrara en la calculadora.
 * @param {function}    onClickNumber - Función que se lanzará al pulsar uno de los números(7,8,9,4,5,6,1,2,3,0) en la calculadora.
 * @returns - Contenedor con todos los números que se pueden usar en la calculadora.
 */
const Numbers: FC<Props> = ({ onClickNumber }) => (
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>
)

export default Numbers