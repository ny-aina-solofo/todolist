import Todolist from "../Todolist/Todolist"
import InputText from "../Input/InputText";
import {Filter} from "../Filter/Filter";
import { useTodo } from "../../context/context";
import { DarkModeToggle } from "../DarkModeToggle/DarkModeToggle";

export const Main = () => {
    const todolist = useTodo();
    const count = todolist.length;
    return (
        <div>
            <div style={{display:'flex'}}>
                <InputText/>
                <DarkModeToggle/>                
            </div>
            <br />
            <div style={{display:'flex'}}>
                <div>{count} item{count > 1 ? 's' : ''}</div>
                <Filter/>
            </div>
            <Todolist />
        </div>
    )
}
