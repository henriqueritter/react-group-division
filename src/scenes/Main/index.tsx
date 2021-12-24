import * as React from "react";
//import { ServiceOrderNatureSegment } from "../../components/ServiceOrderNatureSegment";
//import { useDashboard } from "../../context/Dashboard";

export const Main: React.FC = () => {
  //  const { allServiceOrders } = useDashboard();

  return (
    <div>
      <header>
        <span>Criar Grupos com itens balanceados</span>
      </header>
      <div>
        <textarea name="itensTextArea" id="itensTextArea"></textarea>
        <select name="groupsQuantity" id="groupsQuantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button name="submitItensButton" id="submitItensButton" onClick={() => alert('Button')} >Gerar grupos</button>
      </div>
    </div>
  )
}