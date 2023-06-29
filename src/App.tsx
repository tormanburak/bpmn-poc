import React from 'react';
import './style/App.css';
import { useState } from 'react';
import {
  Diagram,
  DiagramComponent,
  Inject,
  NodeModel,
  BpmnShape,
  BpmnSubProcessModel,
  BpmnDiagrams,
  BpmnActivityModel,
  BpmnFlowModel,
  SnapConstraints,
  Snapping,
  ConnectorEditing,
  LineRouting
} from "@syncfusion/ej2-react-diagrams";
import SidePanel from './components/SidePanel';
import SymbolPallete from './components/SymbolPallete';


function App() {
  let snapSettings = {
    constraints: SnapConstraints.None,
};
  return (
    <div>
      <SidePanel/>
      <div className='diagram-container'>
    <SymbolPallete/>
    <DiagramComponent id="container" width={'100%'} height={'600px'} snapSettings={snapSettings}>
      <Inject services={[BpmnDiagrams,Snapping,ConnectorEditing]}/>
    </DiagramComponent>
      </div>
    </div>
    );
    
}

export default App;
