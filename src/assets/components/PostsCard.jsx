const PostsCard = (props) => {
    const { image, title, tags, content, id } = props.post
    const onDelete = props.onDelete
    return (
        <div className="col-12 col-md-4 mb-5">

            <div className="card">
                <img src={`http://localhost:3000${image}`} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        <strong>Tags:</strong> {[tags.join(', ')]}
                    </p>
                    <div className="card-text mb-3">
                        <strong>Content</strong>: {content}
                    </div>
                    <div className="mt-1 mx-1 btn btn-danger"
                        onClick={onDelete}>
                        <i class="fa-solid fa-trash"></i> Elimina
                    </div>
                    <div className="mt-1 btn btn-primary">
                        <i class="fa-solid fa-pen-nib"></i> Modifica
                    </div>

                </div>
            </div>
        </div>


    )
}

export default PostsCard