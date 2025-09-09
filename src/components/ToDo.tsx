import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

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
            
            {category !== Categories.TO_DO && <button name={Categories.TO_DO} onClick={onClick}>To Do</button>}
            {category !== Categories.DOING && <button name={Categories.DOING} onClick={onClick}>Doing</button>}
            {category !== Categories.DONE && <button name={Categories.DONE} onClick={onClick}>Done</button>}
        </li>
    );
}

export default ToDo;