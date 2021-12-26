import * as React from "react";
import '../../styles/Main.css';

export const Main: React.FC = () => {

  return (
    <div id="mainContainer">
      <header id="mainHeader">
        <span id="mainHeaderSpan">Cria Grupos com itens balanceados</span>
      </header>
      <div>
        <div id="labelInputContainer">
          <span>Insira os itens separados por vírgula</span>
        </div>
        <div id="inputContainer">
          <textarea name="itensTextArea" id="itensTextArea"></textarea>
          <select name="groupsQuantity" id="groupsQuantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button name="submitItensButton" id="submitItensButton" onClick={() => alert('Button')} >Gerar grupos</button>
        </div>
        <div id="responseContainer">
          <div id="groupedItems">
            <span>Grupo 1</span>
            <p>Test</p>
            <p>Test</p>
            <p>Test</p>
          </div>
          <div id="groupedItems">
            <span>Grupo 2</span>
            <p>Test</p>
            <p>Test</p>
            <p>Test</p>
          </div>
          <div id="groupedItems">
            <span>Grupo 3</span>
            <p>Test</p>
            <p>Test</p>
            <p>Test</p>
          </div>
        </div>
      </div>
    </div>
  )
}