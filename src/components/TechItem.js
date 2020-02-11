import React from 'react';
import PropTypes from 'prop-types';

function TechItem({
    tech,
    onDelete
}) {
    return (
        <li>
        {tech}
        <button onClick={onDelete} type="button">Remover</button>
        </li>
    );
}

//valor padrão que o componente recebe se não for passado o parâmetro
TechItem.defaultProps = {
    tech: 'oculto',
};

// Validar as os tipos 
TechItem.prototypes = {
    tech: PropTypes.string,
    tech: PropTypes.func.isRequired,
};

export default TechItem;