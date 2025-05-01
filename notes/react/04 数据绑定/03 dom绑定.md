```jsx
import { useRef } from "react";
function appp() {
    const inputRef = useRef(null)
    const getdom = ()=>{
        console.log(inputRef.current);
    }
    return (
        <div>
            <input type="text" ref={inputRef}
            />
        </div>
    )
}

```