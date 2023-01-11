import { FC } from 'react'

type Prop = {
    value: string
}

/**
 * Componente que muestra los números y resultado de la calculadora.
 * @param {string}  value - Número que se mostrará en la calculadora.
 * @returns - Contenedor con el número con el que se esta operando en la calculadora.
 */
const Result: FC<Prop> = ({ value }) => (
    <div className="result">
        {value}
    </div>
)

Result.defaultProps = {
    value: "0"
}

export default Result