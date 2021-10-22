import React from 'react'
import { FcContacts } from 'react-icons/fc'
import PropTypes from 'prop-types'
const ContactsList = ({contacts, deleteContact}) => {
    return (
        <ul>
            {contacts.map(({ name, number, id }) => (
                <li key={id}>
                    <FcContacts className='icon' />
                     <p>
            {name}: {number}
          </p>
          <button
            className='btnDelete'
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
                </li>
            ))}
        </ul>
    );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number:PropTypes.string,
      id:PropTypes.string,
      })
    ),
    deleteContact:PropTypes.func.isRequired,
}

export default ContactsList;