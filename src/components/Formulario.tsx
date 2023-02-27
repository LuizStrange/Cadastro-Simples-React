import Cliente from "@/core/Cliente";
import { useState } from "react";
import Entrada from "./Entrada";
import Botao from '@/components/botao'

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id ?? null
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada somenteLeitura texto="Código" valor={id}></Entrada>
            ) : false}
            <Entrada className="mb-5" texto="Nome" valor={nome} valorMudou={setNome}></Entrada>
            <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade}></Entrada>
        
        <div className="flex justify-end mt-7">
            <Botao cor="blue" className="mr-2" onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                {id ? 'Alterar' : 'Salvar'}
            </Botao>
            <Botao onClick={props.cancelado}>
                Cancelar
            </Botao>
        </div>
        </div>
    )
}