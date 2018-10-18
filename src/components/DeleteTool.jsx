import React from 'react';
import PropTypes from 'prop-types';

const DeleteTool = ({ id, deleteComment }) => {
  return (
    < button className="deleteButton" onClick={() => deleteComment(id)} >
      <span className="deleteComment" role="img" aria-label="wastebasket emoji">🗑️</span>
    </button >
  )
}

DeleteTool.propTypes = {
  id: PropTypes.string,
  deleteComment: PropTypes.func.isRequired
}

export default DeleteTool
