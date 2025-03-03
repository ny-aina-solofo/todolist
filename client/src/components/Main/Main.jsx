import Todolist from "../Todolist/Todolist"
import InputText from "../Input/InputText";
import {Filter} from "../Filter/Filter";

export const Main = () => {
    return (
        <div>
            <div style={{display:'flex'}}>
                <InputText/>
            </div>
            <br />
            <div style={{display:'flex'}}>
                {/* <div>{count} item{count > 1 ? 's' : ''}</div> */}
                <Filter/>
            </div>
            <Todolist />
        </div>
    )
}
