import Comment from "./Comment";

function CommentList({comments}) {

    const commentElements = comments.map(comment => {
        return <Comment key={comment.id} user={comment.user} comment={comment.comment} />
    })

    return (
        <div>
            <h2>{comments.length} Comments</h2>
            {commentElements}
        </div>
    )
}

export default CommentList;