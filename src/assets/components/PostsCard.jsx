const PostsCard = () => {
    return (
        <div className="col-12 col-md-4 mb-5">
            <div className="card">
                <img src="https://placehold.co/250" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">Titolo post</h5>
                    <p className="card-text">
                        Scheda: <strong>Elemento1, elemento2, elemento3</strong>
                    </p>
                    <div className="card-text mb-3">
                        Autore
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