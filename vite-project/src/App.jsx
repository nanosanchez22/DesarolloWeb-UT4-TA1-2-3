import Card from './Card/Card'
import CardChildren from './Card/CardChildren'
import Input from './Card/Input'
import './App.css'

function App() {

  return (
    <>
    <div className='card-container'>
      <Card title={'Titulo 1'} description={'Esta card esta usando props'} name={'nombre'} dateStart={'18 de setiembrte'} dateEnd={'20 de setiembre'}></Card>
      <Card title={'Titulo 2'} description={'Esta card esta usando props'} name={'nombre'} dateStart={'18 de setiembrte'} dateEnd={'20 de setiembre'}></Card>
      <Card title={'Titulo 3'} description={'Esta card esta usando props'} name={'nombre'} dateStart={'18 de setiembrte'} dateEnd={'20 de setiembre'}></Card>
    </div>

    <div className='card-container'>
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
    </div>
    <div>
      <Input></Input>
    </div>
      
    </>
  )
}

export default App
