import React from 'react'

const Notemodals = ({title , value , handleTitleChange, handleCreateNote}) => {

    return (
        <>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating">
                                <textarea onChange={handleTitleChange} value={value} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"100px"}}></textarea>
                                <label for="floatingTextarea2">Enter notes here</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleCreateNote} type="button" className="btn btn-dark">{title}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notemodals
