import React from "react";
import {
    NodeModel,
    SymbolPalette,
    SymbolInfo,
    SymbolPaletteComponent,
    Inject,
    Diagram,
    DiagramComponent,
    BpmnShape,
    BpmnSubProcessModel,
    BpmnDiagrams,
    BpmnActivityModel,
    BpmnFlowModel,
    ConnectorConstraints, ConnectorEditing
} from "@syncfusion/ej2-react-diagrams";

function SymbolPallete(){
    function getFlowShapes(): NodeModel[] {
        let shapeSize = 75;
        let flowShapes: NodeModel[] = [
            { id: 'Start',width:shapeSize,height:shapeSize, shape: { type: 'Bpmn', shape: 'Event' , event:{event:'Start'}} },
            { id: 'NonInterruptingStart',width:shapeSize,height:shapeSize,shape: { type: 'Bpmn', shape: 'Event',event: { event: 'NonInterruptingStart'}}},
            { id: 'End',width:shapeSize,height:shapeSize,shape: { type: 'Bpmn', shape: 'Event',event: { event: 'End'}}},
            { id: 'Gateway', width:shapeSize,height:shapeSize,shape: {type: 'Bpmn',shape: 'Gateway',gateway: {type: 'None',}},},
            { id: 'Activity', width:100, height:shapeSize, shape:{type:'Bpmn',shape:'Activity',activity:{activity:'Task'}}}
            
        ];
        return flowShapes;
      }
      function getConnectors() {
        let connectorSymbols = [
            {
                id: "Orthogonal",
                type: "Orthogonal",
                sourcePoint: {
                    x: 0,
                    y: 0,
                },
                targetPoint: {
                    x: 40,
                    y: 40,
                },                
                constraints: ConnectorConstraints.Default & ~ConnectorConstraints.DragSegmentThumb,
                segments:[{type:"Orthogonal",direction:"Right",length:10}]
            },
            {
                id: "Straight",
                type: "Straight",
                sourcePoint: {
                    x: 0,
                    y: 0,
                },
                targetPoint: {
                    x: 40,
                    y: 40,
                },
                targetDecorator: {
                    shape: "Arrow",
                },
                segments:[{
                    type:"Straight"
                }],
                
            },
            {
                id: "Bezier",
                type: "Bezier",
                sourcePoint: {
                    x: 0,
                    y: 0,
                },
                targetPoint: {
                    x: 40,
                    y: 40,
                },
                style: {
                    strokeWidth: 2,
                },
                targetDecorator: {
                    shape: "None",
                },
            },
        ];
        return connectorSymbols;
    }
   return(
        <SymbolPaletteComponent id="palette1" 
        expandMode={"Multiple"} 
        palettes={[
            { id: 'Bpmn', expanded: true, symbols: getFlowShapes(), title: 'Bpmn Shapes' },
            { id: 'connectors',expanded:true,symbols:getConnectors(),title:'Connectors'},
        ]} 
        symbolHeight={65} symbolWidth={65} width={400}>
            <Inject services={[BpmnDiagrams]}></Inject>
        </SymbolPaletteComponent>
    );
}
export default SymbolPallete;