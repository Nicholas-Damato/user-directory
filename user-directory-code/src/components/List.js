function List(props) {
    const { listItem } = props
    return (
        <div id='textslides'>
            <h4 className='person-name'>{listItem.name.first} {listItem.name.last}</h4>
            <ul className='information'>
                <li>From: {`${listItem.city}, ${listItem.country}`}</li>
                <li>Job Title: {`${listItem.title}`}</li>
                <li>Employer: {`${listItem.employer}`}</li>
            </ul>
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