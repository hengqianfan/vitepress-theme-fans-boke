```jsx
import { useState } from "react";
function appp() {
    const [value ,setValue] = useState('')
    return (
        <div>
            <input 
            type="text" 
            value={value} 
            onChange={(e)=>setValue(e.target.value)}
            />
        </div>
    )
}
```