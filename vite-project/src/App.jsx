import Card from './Components/Card'
import CardChildren from './Components/CardChildren'
import Input from './Components/Input'
import ContButton from './Components/ContButton'
import TextButton from './Components/TextButton'
import './App.css'
import TaskList from './Components/TaskList'
import TA10 from './Components/TA10'
import TA11 from './Components/TA11'
import TA12 from './Components/TA12'
import TA13 from './Components/TA13'
import TA14 from './Components/TA14'
import { UserProvider, ThemeProvider, LangProvider } from './Components/TA12Context'
import React, {useState} from 'react'
import TA15 from './Components/TA15'

//export const UserContext = React.createContext();

function App() {
  //const [user, setUser] = React.useState('');

  const [darkMode, setDarkMode] = useState(false);
  

  return (
    <UserProvider>
      <ThemeProvider>
        <LangProvider>
        <div className={darkMode ? 'darkMode' : 'lightMode'}>
          <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? 'Modo oscuro general' : 'Modo claro general'}
            </button>
            <br />

        

    <>
     {/* TA1 */}
    {/* <div className='card-container'>
      <Card title={'Titulo 1'} description={'Esta card esta usando props'} name={'nombre'} dateStart={'18 de setiembrte'} dateEnd={'20 de setiembre'}></Card>
      <Card title={'Titulo 2'} description={'Esta card esta usando props'} name={'nombre'} dateStart={'18 de setiembrte'} dateEnd={'20 de setiembre'}></Card>
      <Card title={'Titulo 3'} description={'Esta card esta usando props'} name={'nombre'} dateStart={'18 de setiembrte'} dateEnd={'20 de setiembre'}></Card>
    </div> */}

      {/* TA2 */}
    {/* <div className='card-container'>
      <CardChildren>
        <h1>Titulo 1</h1>
        <p>Esta card esta usando props children</p>
        <h3>nombre</h3>
        <h5>18 de setiembre</h5>
        <h5>20 de setiembre</h5>
      </CardChildren>
      <CardChildren>
        <h1>Titulo 2</h1>
        <p>Esta card esta usando props children</p>
        <h3>nombre</h3>
        <h5>18 de setiembre</h5>
        <h5>20 de setiembre</h5>
      </CardChildren>
      <CardChildren>
        <h1>Titulo 3</h1>
        <p>Esta card esta usando props children</p>
        <h3>nombre</h3>
        <h5>18 de setiembre</h5>
        <h5>20 de setiembre</h5>
      </CardChildren>
    </div> */}


    {/* TA3 */}
    {/* <div>
      <Input></Input>
    </div> */}

    {/* TA4 y 9*/}
    {/* <ContButton></ContButton> */}

    {/* TA5 */}
    {/* <TextButton></TextButton> */}

    {/* TA6 7 y 8*/}
    {/* <TaskList></TaskList> */}

    {/* TA10 */}
    {/* <TA10></TA10> */}

    {/* TA11 */}
    {/* <TA11></TA11> */}

    {/* TA12 */}  

      {/* <TA12/> */}

      {/* TA13 */}
      <TA13/>
      
      {/* TA14 */}
      <TA14/>

      {/* TA15 */}
      <TA15/>
    </>
      </div>
      </LangProvider>
      </ThemeProvider>
    </UserProvider>

    
  )
}

export default App
