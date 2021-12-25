import * as React from "react";

export const Main: React.FC = () => {

  return (
    <div id="mainContainer">
      <header id="mainHeader">
        <span id="mainHeaderSpan">Criar Grupos com itens balanceados</span>
      </header>
      <div>
        <div id="inputContainer">
          <textarea name="itensTextArea" id="itensTextArea"></textarea>
          <select name="groupsQuantity" id="groupsQuantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button name="submitItensButton" id="submitItensButton" onClick={() => alert('Button')} >Gerar grupos</button>
        </div>
        <div id="responseContainer"></div>
      </div>
    </div>
  )
}