import React from 'react';
import foto from './foto.jpg';
import knowledge from './knowledge.png';
import {Routes, Route, NavLink, useLocation} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Book,Phone,FileEarmarkPost, Person, Facebook, Instagram, Linkedin,  HandIndex, SendFill} from 'react-bootstrap-icons';

const Info = ()=>{
  return(
    <div className='Info'>
      <div className='infowrapper'>
      <div className='fotowrapper'>
      <img width='400px' height='400px' className='foto' src={foto} alt='No Available'/>
      </div>
      <div className='wrapper'>
      <h1>Vincenzo Donnarumma</h1>
      <p>Jr. Front End Developer</p>
      </div>
      </div>
      <div className='datawrapper'>
        <span className='title'>Informazioni personali </span>
          <p>Sono una figura in cerca di impiego come front end developer,
         diplomato in informatica, ho frequentato corsi nell'ambito della programmazione web
        sviluppando dimestichezza con javascript ,React, HTML e CSS.
        Automunito residente A C/mare Di Stabia sono disposto anche ad andare fuori sede, Ho 
        esperienza in Riparazioni elettroniche Smartphone e Pc. Sono una persona flessibile con
        tanta voglia di imparare e lavorare, dimestichezza con 'GIT' per il versionamento del codice.
        Esperienza con framework Wordpress e Bootstrap, e db relazionali MYSQL. Basi di 'Ethical Hacking'
        e pentests con 'Ubuntu',comandi base con Win Powershell e Linux Bash.</p>
      </div>
    </div>
  );
}

const Formazione = ()=>{
  return(
    <div className='Knowledges'>
      <div className='knowledgeswrapper' id='first'>
      <h1>Formazione</h1>
      <img className='foto' height='280px' width='calc(350*16/9)' src={knowledge} alt='no available'/>
      </div>
      <div className='grid'>
      <div className='knowledgeswrapper'>
        <span className='title'>Studi</span>
        <p>Mi sono diplomato presso l'istituto tecnico Renato Elia presso C/Mare di Stabia,
           è qui che ho imparato la base della programmazione ad oggetti con C/C++ e PASCAL, e l'utilizzo dei
          DB relazionali MYSQL e in questa scuola ho assistito alla programmazione del processore arduino in assembly.
          Ho una buona conoscenza della lingua Inglese.
        </p>
      </div>
      <div className='knowledgeswrapper'>
        <span className='title'>Lavoro</span>
        <p>Le esperienze lavorative che ho cumulato in questi anni sono varie e partono da tecnico riparatore di Smartphone e PC
          presso SOS Smartphone, a operaio Settore offset presso tipografia La Fenice, ho lavorato persino come aiuto cuoco presso 
          il Maracanà Pub, Ovviamente come già detto sono una figura proiettata verso lo sviluppo web e purtroppo sto cercando il posto giusto
          dove poter finalmente iniziare l'esperienza che desidero.
        </p>
      </div>
      <div id='last' className='knowledgeswrapper'>
        <span className='title'>Volontariato</span>
        <p>Ho frequentato per diversi anni il reparto R.O.S.S. (Reparto Operativo Soccorso Stabia) Di C/Mare di Stabia, ho imparato qui a relazionarmi meglio 
        con le persone e a lavorare di squadra per un unico obiettivo di gruppo.</p>
      </div>
      </div>
    </div>
  );
}

const Contatti = ()=>{
  return(
    <div className='Contacts'>
      <h1>Contatti</h1>
      <div className='wrapper'>
        <div className='socialmedia'>
        <Facebook color='#385898' className='socialicon' onClick={()=> window.open("https://www.facebook.com/vincenzo.donnarumma.92/", "_blank")}/>
        <Instagram color='#E1306C' className='socialicon' onClick={()=> window.open("https://www.instagram.com/vincenzodnm/", "_blank")}/>
        <Linkedin color='#0a66c2' className='socialicon' onClick={()=> window.open("https://www.linkedin.com/in/vincenzo-donnarumma-2625a51a2/", "_blank")}/>
        </div>
        <p>Clicca su una delle icone di sopra per trovarmi sui social</p>
      </div>
      <div className='contactfoo'>
        <span className='email' style={{background:'rgb(21, 62, 197)',fontVariant:'all-small-caps',fontFamily:'sans-serif',padding:'5px',fontSize:'20px',textShadow:'0.5px 0.5px black,0.5px -0.5px black,-0.5px -0.5px black,-0.5px 0.5px black',color:'rgb(240,240,240)'}}>E-mail e Cellulare</span>
        <div className='grid'>
      <div className='sectionemail'>
      <p>Invia una mail</p>
      <button className='send' onClick={()=>{window.location='mailto:vincenzodnm@outlook.it'}} style={{transition:'ease-in-out 0.6s all',filter:'brightness(0.35)',cursor:'pointer',width:'120px',height:'32px',padding:'5px',background:'rgb(21, 62, 197)',color:'white',borderRadius:'5px'}}><SendFill/></button>
      </div>
      <div className='sectionphone'>
      <p>Chiama Cellulare</p>
      <span style={{height:'32px'}} className='call'>+393458800962</span>
      </div>
      </div>
      </div>
    </div>
  );
}

const Progetti = ()=>{
  return(
    <div className='Projects'>
      <h1>Progetti</h1>
      <div className='wrapper'>
      </div>
    </div>
  );
}
const Expandcheck=()=>{
  console.log('nav has been clicked');
 document.getElementsByTagName('nav')[0].style.width==='350px'?console.log('nav already expanded'):Expand();
}
const Expand=()=>{
 document.getElementById('touch').style.opacity='0';
 document.getElementsByTagName('nav')[0].style.width='350px'
  for(let i=0;i<document.getElementsByTagName('a').length;i++){
    document.getElementsByTagName('a')[i].style.display='flex';
    document.getElementsByTagName('a')[i].style.justifyContent='center';
    document.getElementsByTagName('a')[i].style.opacity='1';
    document.getElementsByTagName('a')[i].style.transition='all ease-in-out 0.3s';
}
console.log('nav expanded');
}
const Hide=()=>{
  console.log('nav not clicked');
  document.getElementsByTagName('nav')[0].style.width='75px';
  document.getElementById('touch').style.opacity='1';
   for(let i=0;i<document.getElementsByTagName('a').length;i++){
     document.getElementsByTagName('a')[i].style.opacity='0';
   }
   setTimeout(() => {
    for(let i=0;i<document.getElementsByTagName('a').length;i++){
      document.getElementsByTagName('a')[i].style.display='none';
    }
    console.log('nav has been hidden')
   }, 300);
}
const Navhandleclick=(ev)=>{
  ev.target===document.getElementsByTagName('nav')[0]?
  Expandcheck():
  document.getElementsByTagName('nav')[0].style.width==='75px'?
  console.log('nav is already hidden'):
  Hide();
}
function App() {
  const location = useLocation();
  return (
    <div className="App" onClick={(e)=>{Navhandleclick(e);}}>
      <nav>
        <HandIndex id='touch' ></HandIndex>
        <NavLink to='/'><Person/></NavLink>
        <NavLink to='/Formazione'><Book/></NavLink>
        <NavLink to='/Contatti'><Phone/></NavLink>
        <NavLink to='/Progetti'><FileEarmarkPost/></NavLink>
      </nav>
      <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
      <Routes location={location}>
        <Route path='/' element={<Info/>}/>
        <Route path='/Formazione' element={<Formazione/>}/>
        <Route path='/Contatti' element={<Contatti/>}/>
        <Route path='/Progetti' element={<Progetti/>}/>
       </Routes>
       </CSSTransition>
       </TransitionGroup>
    </div>
  );
}

export default App;
