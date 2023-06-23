import PropTypes from 'prop-types';

function Input ({legenda,tipo}){
    return(
        <input type = {tipo} placeholder={legenda}/>
    );
    };
    Input.propTypes ={
        legenda: PropTypes.string,
        tipo: PropTypes.string,
    }
export default Input