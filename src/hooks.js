import { useState } from 'react'

export const useLocalStorage = (key, defaultValue)=> {
    const local = key => {
        return JSON.parse(window.localStorage.getItem(key)) || defaultValue
    }
    const [ localValue, setLocalValue ] = useState(local(key))
    
    

    const changeLocalValue = value => {
        setLocalValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [ localValue,  changeLocalValue]

    
}

export const useBodyClass = (value, defaultClass) => {
    value? document.querySelector('body').classList.add(defaultClass): document.querySelector('body').classList.remove(defaultClass)
}

export const useFinalHook = (key, defaultValue) => {
    const [loc, changeVal] = useLocalStorage(key, defaultValue)
    useBodyClass(loc, key)
    return [loc, changeVal]
}
