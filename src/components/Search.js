import React, {useState} from 'react'



const Search = ({search}) => {
    const[text,setText] = useState('')
  
    const onSearch= (q) =>{
        setText(q)
        search(q)

    }


    return (
    
    <section className="search">
       
        <form>
            <input type="text" 
            className="form-control"
            placeholder=""
            autoFocus
            onChange={(e) => onSearch(e.target.value)}
            value={text}/>
        
        <button className='pesquisar'>Pesquisar</button>
    
       
        </form>
       

    </section>
  )
}

export default Search;