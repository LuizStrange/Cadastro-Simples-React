import Layout from "../components/Layout"
import Tabela from "../components/tabela"
import Botao from "../components/botao"
import Formulario from "@/components/Formulario"
import useClientes from "@/hooks/useClientes"

export default function Home() {

  const { tabelaVisivel, cliente, clientes, SelecionarCliente, ExcluirCliente, NovoCliente, salvarCliente, exibirTabela } = useClientes()

  return (
  <div className={`
  flex justify-center items-center h-screen
  bg-gradient-to-r from-blue-500 to-purple-500
  text-white
  `}>
    <Layout titulo="Cadastro Simples">
     {tabelaVisivel ? (
       <>
       <div className="flex justify-end">
         <Botao cor="green" className="mb-4" onClick={NovoCliente}>Novo Cliente</Botao>
       </div>
       <Tabela clientes={clientes} clienteSelecionado={SelecionarCliente} clienteExcluido={ExcluirCliente}></Tabela>
       </>
     ) : (
      <Formulario cliente={cliente} cancelado={exibirTabela} clienteMudou={salvarCliente}></Formulario>
     )}
    </Layout>
  </div>
  )
}
