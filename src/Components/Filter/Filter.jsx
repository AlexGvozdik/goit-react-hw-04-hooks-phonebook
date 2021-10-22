import React from 'react'
import PropTypes from 'prop-types'
const Filter = ({filtered, value}) => {
    return (
        <input type='text' name='filter' value={value} onChange={(e)=> filtered(e)}/>
    )
}

Filter.propTypes = {
    filtered:PropTypes.func.isRequired,
    value:PropTypes.string.isRequired,
}

export default Filter

