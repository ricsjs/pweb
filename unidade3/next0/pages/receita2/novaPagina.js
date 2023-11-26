import {Button} from "./button.js"

export default function Principal (){
    return (
        <div>
            <h1>
                Nova Página
            </h1>
            <MariaPrea nome="Prea"/>
            <Button/>
        </div>
    )
}

export function MariaPrea({nome}){
    return(
        <h2>{`Morreu Maria ${nome}...`}</h2>
    )
}
