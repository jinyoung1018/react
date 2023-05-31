import React from "react";
import Comment from "./Comment";

// function CommentList(props){
//     return (
//         <div>
//             <Comment name={"백진영"} comment={"안녕하세요, 백진영입니다."} />
//             <Comment name={"두부"} comment={"안녕하세요, 두부입니다."} />

//         </div>
//     );
// }

const comments = [
    {
        name: "백진영",
        comment: "안녕하세요, 백진영입니다."
    },
    {
        name: "두부",
        comment: "리액트 재미있어용"
    },
    {
        name: "초코",
        comment: "안녕하세요, 초코입니다."
    },
]

function CommentList(props){
    return (
        <div>
           {comments.map((comment) => {
            return (
                <Comment name={comment.name} comment={comment.comment} />
            );
           })

           }

        </div>
    );
}

export default CommentList;