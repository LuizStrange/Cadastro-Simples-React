import ClienteRepositorio from "@/backend/ClienteRepositorio"
import ColecaoCliente from "@/backend/db/ColecaoCliente"
import Cliente from "@/core/Cliente"
import { useEffect, useState } from "react"
import useTabelaouForm from "./useTabelaouForm"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const { exibirFormulario, exibirTabela, formularioVisivel, tabelaVisivel } = useTabelaouForm    ()

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
        })
    }

    function SelecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }
    async function ExcluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    function NovoCliente() {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    return {
        tabelaVisivel,
        cliente,
        clientes,
        NovoCliente,
        salvarCliente,
        ExcluirCliente,
        SelecionarCliente,
        obterTodos,
        exibirTabela
    }
}