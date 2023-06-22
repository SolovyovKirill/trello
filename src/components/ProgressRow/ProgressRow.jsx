import React, {useEffect, useState} from "react";
import './ProgressRow.css';

const ProgressRow = ({taskList}) => {

    const [boards, setBoards] = useState([]);

    useEffect(() => {
        setBoards([
            {id: 1, title: "TO DO", items: taskList},
            {id: 2, title: "READY FOR DEV", items: []},
            {id: 3, title: "IN PROGRESS", items: []},
            {id: 4, title: "DONE", items: []},
        ]);
    }, [taskList]);

    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

    function dragOverHandler(e) {
        e.preventDefault()
        if (e.target.className == 'box-container') {
            e.target.style.boxShadow = '0 4px 3px gray'
        }
    }

    function dragLeaveHandler(e) {
        e.target.style.boxShadow = 'none'
    }

    function dragStartHandler(e, board, item) {
        setCurrentBoard(board)
        setCurrentItem(item)
    }

    function dragEndHandler(e) {
        e.target.style.boxShadow = 'none'
    }

    function dropHandler(e, board, item) {
        e.preventDefault();
        const updatedBoards = boards.map((b) => {
            if (b.id === board.id) {
                const currentIndex = currentBoard.items.indexOf(currentItem);
                currentBoard.items.splice(currentIndex, 1);
                const dropIndex = b.items.indexOf(item);
                b.items.splice(dropIndex + 1, 0, currentItem);
                return { ...b, items: [...b.items] }; // Создание новой копии доски с обновленными элементами
            }
            if (b.id === currentBoard.id) {
                return { ...currentBoard, items: [...currentBoard.items] }; // Создание новой копии доски с обновленными элементами
            }
            return b;
        });

        setBoards(updatedBoards);
    }

    function dropCardHandler(e, board) {
        board.items.push(currentItem)
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }

    return (
        <div className="progress-row">
            {boards.map(board =>
                <div
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropCardHandler(e, board)}
                    className="box"
                    key={board.id}
                >
                    <div className="box-progress">
                        {board.title}
                    </div>
                    {board.items.map((item, index) => (
                        <div
                            draggable={true}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDragLeave={(e) => dragLeaveHandler(e)}
                            onDragStart={(e) => dragStartHandler(e, board, item)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDrop={(e) => dropHandler(e, board, item)}
                            className="box-container"
                            key={item.id}
                        >
                            <div className="title">{item.title}</div>
                            <div className="description">{item.description}</div>
                            <div className="user">{item.user}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProgressRow;
