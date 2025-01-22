const PostsCard = (props) => {
    const { image, title, tags, content, id } = props.post
    return (
        <div className="col-12 col-md-4 mb-5">

            <div className="card">
                <img src={image} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        Scheda: <strong>{[tags.join(', ')]}</strong>
                    </p>
                    <div className="card-text mb-3">
                        <strong>Content</strong>: {content}
                    </div>
                    <div className="mt-1 btn btn-danger">
                        <i class="fa-solid fa-trash"></i> Elimina
                    </div>

                </div>
            </div>
        </div>


    )
}

export default PostsCard