import React from "react";

const BackupButton = ({ toggle,check }) => {
  return (
    <>
      <div className="d-flex flex-wrap gap-2  justify-content-end">
        <button
          className="btn btn-rounded btn-info waves-effect waves-light"
          disabled={!check}
          onClick={toggle}
        >
          <i className="ri-edit-2-line me-2"></i> EDIT
        </button>
        <button
          type="button"
          className="btn btn-rounded btn-primary waves-effect waves-light d-flex align-items-center justify-content-center"
          disabled={!check}
        >
          {!check ? (
            <i className="ri-eye-off-line me-2"></i>
          ) : (
            <i className="ri-eye-line me-2"></i>
          )}
          VIEW
        </button>
      </div>
    </>
  );
};

export default BackupButton;
