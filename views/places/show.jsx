const React = require("react");
const Def = require("../default");

function show(data) {
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} />
                    </div>
                    <div className="col-sm-6">
                        <h1>{data.place.name}</h1>
                        <h2>Rated</h2>
                        <p>Not Rated</p>
                        <h2>Description</h2>
                        <p>
                            Located {data.place.city}, {data.place.state}, and
                            serving {data.place.cuisines}
                        </p>
                    </div>
                    
                </div>
                <div className="row">
                    <h2>Comments</h2>
                    <p>no comments yet!</p>
                </div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">Delete</button>
                </form>
            </main>
        </Def>
    );
}

module.exports = show;


