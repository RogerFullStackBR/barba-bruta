import servicos from "@/app/data/constants/servicos";
import ItemServico from "./ItemServico";

export default function NossosServicos() {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {servicos.map(servico => <ItemServico key={servico.id} servico={servico} />)}
    </div>
  )
}