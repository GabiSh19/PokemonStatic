import { createSignal } from "solid-js"

interface Props {
    initValue: number,
}


export const Counter = (props: Props) => {

    const [ counter, setCounter ] = createSignal(10);


    return (
        <>
            <h1 class = 'text-4xl'>Counter</h1>
            <h1 class = 'text-xl'>Value: { counter() }</h1>
        
            <button 
            onclick={ () => setCounter((prev) => --prev) }
            class= "bg-blue-500 p-2 mr-2 rounded" >-1</button>

            
            <button 
            onclick={ () => setCounter((prev) => ++prev) }
            class= "bg-blue-500 p-2 mr-2 rounded" >+1</button>


        </>

    )

}