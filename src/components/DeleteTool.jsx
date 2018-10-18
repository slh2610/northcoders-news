import React from 'react';
import PropTypes from 'prop-types';

const DeleteTool = ({ id, deleteComment }) => {
  return (
    < button class="deleteButton" onClick={() => deleteComment(id)} >
      <span class="deleteComment" role="img" aria-label="wastebasket emoji">🗑️</span>
    </button >
  )
}

DeleteTool.propTypes = {
  id: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired
}

export default DeleteTool
