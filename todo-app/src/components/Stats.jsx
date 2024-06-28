import React from 'react'

const Stats = ({toDoList}) => {
  let countList = toDoList.length;
    return <div className='stats'>
        <p className = "notify">
            {countList ===0
            ? "Não há itens na sua lista!"
            : `Você tem ${countList} item(s) na sua lista.`}
        </p>
    </div>
  
}

export default Stats
