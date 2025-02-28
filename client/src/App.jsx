import { Main } from "./components/Main/Main"
import { TodoContextProvider } from "./context/context"

// import './style.css'

export default function TodoListApp() {
    return (
        <TodoContextProvider>
            <Main/>            
        </TodoContextProvider>
    )
}
