import { useState } from "react";

function Mesage(){
  const [mess, setMess] = useState([
    {
      user: 'Admin',
      text: 'random english slova',
      coming: 'incoming',
      complete: false,
      id: Math.random().toString(36).substring(2, 9)
    },
    {
      user: 'Ismail',
      text: 'Чё???',
      coming: 'outcoming',
      complete: true,
      id: Math.random().toString(36).substring(2, 9)
    },
    {
      user: 'Admin',
      text: 'London capitalnaya Britaniya',
      coming: 'incoming',
      complete: false,
      id: Math.random().toString(36).substring(2, 9)
    }
  ])
  function removeChat(id){
    setMess(mess.filter(i => i.id !== id))
  }
  function transferChat(id){
    setMess([...mess.map(i => {
      return i.id === id ? 
      {...i, 
      complete: !i.complete, 
      coming: i.coming === 'incoming' ? 'outcoming' : 'incoming',
      user: i.coming === 'outcoming' ? 'Ismail' : 'Admin'}
       : 
      {...i}
    })])
  }
  return(
    <div className="Mesage">
        {mess.map(item => {
          return(
            <div className = {item.complete ? 'row justify-content-end' : 'row'}>
            <div className="col-6" >
              <div className={item.coming + ' d-flex justify-content-between'}>
                <div>
                  <div>
                    {item.user}
                  </div>
                  <div>
                    {item.text}
                  </div>
                </div>
                <div>
                  <div onClick = {() => removeChat(item.id)} className="delete">
                    X
                  </div>
                  <div onClick = {() => transferChat(item.id)} className="transfer">
                    @
                  </div>
                </div>
              </div>
            </div>
          </div>
          )
      })}
     </div>
  )
}
export default Mesage;