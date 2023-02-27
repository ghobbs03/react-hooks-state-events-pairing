
function Details({url, title, views, date, upvotes, downvotes, handleLike, handleDislike, handleHide}) {



    return (<div>
        <iframe
        width="919"
        height="525"
        src={url}
        allowFullScreen
        title={title}/>
        <h1>{title}</h1>
        <p>{views} views | Uploaded {date}</p>
        <button onClick={handleLike}>{upvotes} 👍</button><button onClick={handleDislike}>{downvotes} 👎</button>
        <div id="hide">
       <button onClick={handleHide}>Hide Comments</button>
       </div>
        </div>
        );

}

export default Details;