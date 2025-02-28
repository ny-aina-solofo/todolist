import Todolist from "../Todolist/Todolist"
import InputText from "../Input/InputText";

export const Main = () => {
    return (
        <div>
            <div style={{display:'flex'}}>
                <InputText/>
            </div>
            <Todolist />
        </div>
    )
}
