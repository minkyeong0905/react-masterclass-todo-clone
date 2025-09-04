//import { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//     const [toDo, setToDo] = useState("");
//     const [toDoError, setToDoError] = useState("");
//     const onChange = (event:React.FormEvent<HTMLInputElement>) => {
//         const {currentTarget : { value }} = event;
//         setToDoError("");
//         setToDo(value);
//     };
//     const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if(toDo.length < 10) {
//             return setToDoError("To do should be longer.");
//         }
//         console.log("submit");
//     };
    
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input value={toDo} placeholder="Write a to do" onChange={onChange} />
//                 <button>Add</button>
//                 {toDoError !== "" ? toDoError : null}
//             </form>
//         </div>
//     );
// }

// interface IForm {
//     toDo?: string;
//     email: string;
//     firstName: string;
//     lastName: string;
//     username: string;
//     password: string;
//     password1: string;
//     extraError?: string;
// }

// function ToDoList() {
//     const { register, handleSubmit, formState: { errors }, setError } = useForm<IForm>({
//         defaultValues: {
//             email: "@naver.com"
//         }
//     });
//     const onValid = (data:IForm) => {
//         if(data.password !== data.password1) {
//             setError("password1", { message: "Passwords are not the same." }, { shouldFocus: true });
//         }

//         //setError("extraError", { message: "Server offline" });
//     };
//     console.log(errors);

//     return (
//         <div>
//             <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
//                 <input {...register("toDo")}  placeholder="Write a to do" />
//                 <input {...register("email", { required: "Email is required.", pattern: { value: /^[A-Za-z0-9._%+-]+@naver.com/, message: "Only naver.com emails allowed." } })}  placeholder="Email" />
//                 <span>
//                     {errors?.email?.message}
//                 </span>
//                 {/* <input {...register("firstName", { required: "First name is required.", validate: (value) => value.includes("nico") ? "no nicos allowed." : true })}  placeholder="First Name" /> */}
//                 <input {...register("firstName", { required: "First name is required.", validate: { noNico: (value) => value.includes("nico") ? "no nicos allowed." : true, noNick: (value) => value.includes("nick") ? "no nicks allowed." : true } })}  placeholder="First Name" />
//                 <span>
//                     {errors?.firstName?.message}
//                 </span>
//                 <input {...register("lastName", { required: "Last name is required." })}  placeholder="Last Name" />
//                 <span>
//                     {errors?.lastName?.message}
//                 </span>
//                 <input {...register("username", { required: "Username is required.", minLength: 10 })}  placeholder="Username" />
//                 <span>
//                     {errors?.username?.message}
//                 </span>
//                 <input {...register("password", { required: "Password is required.", minLength: { value: 5, message: "Your password is too short." } })}  placeholder="Password" />
//                 <span>
//                     {errors?.password?.message}
//                 </span>
//                 <input {...register("password1", { required: "Password comfirmation is required.", minLength: 5 })}  placeholder="Password1" />
//                 <span>
//                     {errors?.password1?.message}
//                 </span>
//                 <button>Add</button>
//                 <span>
//                     {errors?.extraError?.message}
//                 </span>
//             </form>
//         </div>
//     );
// }

interface IForm {
    toDo: string;
}

function ToDoList() {
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = (data:IForm) => {
        console.log("add to do", data.toDo);
        setValue("toDo", "");
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit(handleValid)}>
                <input {...register("toDo", {
                    required: "Please write a To Do."
                })} placeholder="Write a to do" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;