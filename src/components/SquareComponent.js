export default function Square({value, onclick}) {
    
    return <button onClick={onclick} className='square'><span>{value}</span></button>
    
}