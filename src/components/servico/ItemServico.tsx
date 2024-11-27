import Servico from "@/core/servico/Servico"
import Image from "next/image"

export interface ItemServicoProps {
  servico: Servico
}
export default function ItemServico({servico}: ItemServicoProps) {
  return (
    <div className="flex rounded-xl bg-zinc-800 overflow-hidden">
      <Image className="object-cover" src={servico.imagemURL} alt={servico.nome} width={150} height={150} />
      <div className="p-5 flex flex-col justify-center gap-2">
        <span className="text-xl font-black">{servico.nome}</span>
        <span className="text-xs text-zinc-400 flex-1">{servico.descricao}</span>
        <span className="text-lg font-bold">{servico.preco.toFixed(2)}</span>
      </div>
    </div>
  )
}