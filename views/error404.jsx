const React = require('react')
const Def = require('./default')

function error404 () {
return (
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <div>
                <img src="/images/puppy-cute-404.jpg" alt="cute puppy" style={{width: "50%"}}/>
                <div>
                    Photo by <a href="AUTHOR_LINK">Michael G</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
            </div>
            <p>Oops, sorry, we can't find this page!</p>
        </main>
    </Def>
    )
}


module.exports = error404



