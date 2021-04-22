function List(props) {
    const { listItem } = props
    return (
        <div id='textslides'>
            <h4>Person: {listItem.name.first} {listItem.name.last}</h4>
            <h4>
                From: {`${listItem.city}, ${listItem.country}`}
                <br></br>
                Job Title: {`${listItem.title}`}
                <br></br>
                Employer: {`${listItem.employer}`}
            </h4>
            <h2 id='movies-title'> Favorite Movies: </h2>
            <ol id='list-style'>
                <li>{listItem.favoriteMovies[0]}</li>
                <li>{listItem.favoriteMovies[1]}</li>
                <li>{listItem.favoriteMovies[2]}</li>
            </ol>
        </div>
    )
}

export default List