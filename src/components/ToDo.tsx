import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
    // const onClick = (newCategory: IToDo["category"]) => {
    //     console.log("I wanna go to ", newCategory);
    // };

    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget: { name } } = event;
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            //const oldToDo = oldToDos[targetIndex];
            const newToDo = { text, id, category: name as any };

            return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
        });
    };

    return (
        <li>
            <span>{text}</span>
            {/* {category !== "TO_DO" && <button onClick={() => onClick("TO_DO")}>To Do</button>}
            {category !== "DOING" && <button onClick={() => onClick("DOING")}>Doing</button>}
            {category !== "DONE" && <button onClick={() => onClick("DONE")}>Done</button>} */}
            
            {category !== "TO_DO" && <button name="TO_DO" onClick={onClick}>To Do</button>}
            {category !== "DOING" && <button name="DOING" onClick={onClick}>Doing</button>}
            {category !== "DONE" && <button name="DONE" onClick={onClick}>Done</button>}
        </li>
    );
}

export default ToDo;