import { useState } from "react";

function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    const bind = {
        value,
        onChange:(e) => setValue(e.target.value) 
    }
    return [value, bind];
}

export default useInput;