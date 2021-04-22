import React, { useState, useEffect } from "react";
import "./DivP.css";
import { getListaNOME, getListaID , getMeuID, getMeuNome, setMeuNome } from './lista';
import { JitsiConference } from '../../../lib-jitsi-meet/JitsiConference.js';
import {
    getLocalParticipant , getParticipantDisplayName
} from '../base/participants';
import { RiCloseCircleLine } from 'react-icons/ri';
import { BsPersonSquare } from 'react-icons/bs';
import { IoIosMicOff } from 'react-icons/io'

import { constructor } from "../../../lib-jitsi-meet/modules/transcription/transcriptionServices/SphinxTranscriptionService";
import { APP_LINK_SCHEME } from "../base/util";
import APP from '../app/components/index'
import '../../../conference';
import conference from "../../../conference";
// import enviar from '../toolbox/components/web/Toolbox';




let dado;
let eu = getMeuNome();
let faro = [];
let chuchu = [];
let paraID = [];
let paraName = [];





export function setaDiv(props){
    dado = props;
    console.log("dado");
    console.log(dado);
}
// constructor (props) {
//     super(props);
//     this.state={
//         inform = 'axul'
//     };
// }


function DivParticipantes() {

    const [inform, setInform] = useState('azul');


    const fechar = document.querySelector("#part_header");
    const containerP = document.querySelector("#sideToolbarContainerP");
    const [listados, setListados] = useState([]);
    const [Meunome, setMeunome] = useState([]);
    let informar;


    let list = listados;
    let meuObj = new Object();








    for(let i=0; i<listados.length -1 ; i++ ){
        if(i ===0 ){
        meuObj[listados[i]] = listados[i+1]

        }
        else

         if( (i%2) !== 0 ){

          meuObj[listados[i+1]] = listados[i+2]

        }else if((i != 0) && ((i%2) === 0)){


        }

      }



//         function dadosListados(){
//             Object.keys(dado).forEach((key) => {
//               farofa= dado[key]._id;
//               chuchu= dado[key]._displayName
//             });
//             console.log("teste farofa");
//             console.log(farofa);
//             console.log("teste chuchu");
//             console.log(chuchu);
//             let j = 0;
//             for(let i=0; i<dado.length; i++){
//                 paraID[j] =  dado[i]._id;
//                 paraName[j] = dado[i]._displayName;
//                 j++;
//                };
//                console.log("paraId "+paraID);
//                console.log("paraName "+paraName);
//         }
//         console.log("teste farofa fora");
//             console.log(farofa);
//             console.log("teste chuchu fora");
//             console.log(chuchu);

// function KickDado(){
//     Object.keys(dado).forEach((key) => {

//         APP.conference._room.kickParticipant(dado[key]._id);

//     });
// }
// function informaDado(){
//     Object.keys(dado).forEach((key) => {
//         console.log("teste informa "+key); //column01...
//         console.log(key); //column01...
//         console.log(dado[key]._id); //Coluna 01...
//         console.log(dado[key]._displayName); //Coluna 01...
//     });
// }

//     const DadoExibidos = chuchu.map((parti) => {
//         return (<p className='todo-row'  >{parti}</p>)
//         console.log("DadoExibido ");
//         console.log(DadoExibidos);
//     })

//         console.log("DadoExibido Fora");
//         console.log(DadoExibidos);

    function uniqBy(a, key) {
        let visto = {};
        return a.filter(function(item) {
            let k = key(item);
            return visto.hasOwnProperty(k) ? false : (visto[k] = true);
        })
    }

    list = uniqBy(listados, JSON.stringify);

    // if(dado != null || dado != undefined){
    // informar = dado.map((participantes)=>{
    //     return <p key={participantes.id} className='todo-row' ><RiCloseCircleLine className='icons' onClick={()=> (KickDado(),alert("Participante Excluído"))} /> {participantes} </p>
    // })}else {
    //     informar = "null";
    // }



    const trataLista = list.map((participante, index)=>{

        return <p key={index} className='todo-row' > <BsPersonSquare/>{participante}<IoIosMicOff/> <RiCloseCircleLine  /></p>
    });




    return (
        <div>

        {/* <container id="sideT" >
          <header id='chat-header' >

           <p  >Participantes</p>
           <p id='barra' ></p>
                      <p className='jitsi-icon ' id='xfechar'></p>
            <svg height='22' width='22' viewBox='0 0 24 24'>
              <path d='M18.984 6.422L13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z'></path>
            </svg>
          </header>
          <container id='para'>

            <p  className='bt-row'><BsPersonSquare/>  {eu}</p>
            <input type="button" value="Exibir" onClick={()=>setListados(getListaNOME)}/>
            <input type="button" value="Exibir" onClick={()=>setMeunome(getMeuNome)}/>

            </container>
            {trataLista}


        </container> */}
         <header id="exibir" >
                <container id="sideToolbarContainerPX">
                    <p id="part_header" className="jitsi-icon " >
                        <svg height="22" width="22" viewBox="0 0 24 24">
                            <path d="M18.984 6.422L13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z" />
                        </svg>
                    </p>

                    <container id="sideToolbarPanel" >

                    <input
                        type='button'
                        value= 'getLista'
                        onClick={()=> setListados(getListaNOME)}
                    />

                    <input
                        type='button'
                        value= 'KickDado'
                        onClick={()=> setMeunome(getMeuNome)

                        }
                    />
                    {Meunome}
                    {trataLista}
                </container>
                </container>
            </header>
        </div>
    );
}

export default DivParticipantes
