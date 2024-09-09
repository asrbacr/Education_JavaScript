// Задание: Список комментариев с удалением.
import 'macro-css';
import { useState } from "react";

// Цель: Комбинирование useState, рендеринга списков и 
// обработки событий для создания интерактивного интерфейса.

// Задача:
// Создать компонент CommentsList, который отображает список комментариев. 
// Каждый комментарий должен иметь кнопку для его удаления. 
// При нажатии на кнопку комментарий должен удаляться из списка.

// Можно использовать заготовку:
export function CommentsList () {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const renderComments = () => {
        return comments.map(comment => (
            <li className="d-flex mb-30" style={{"gap": "25px"}} key={comment.id}>
                <p>{comment.text}</p>
                <button onClick={() => handleDeleteComment(comment.id)}>Удалить</button>
            </li>
        ));
    };

    const handleDeleteComment = (commentId) => {
        const updatedComments = comments.filter(comment => comment.id !== commentId);
        setComments(updatedComments);
    };

    return (
        <ul className='d-flex flex-column'>
            {renderComments()}
        </ul>
    );


}
