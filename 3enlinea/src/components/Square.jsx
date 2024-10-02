const Square = ({children, isSelected, updateBoard, index}) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`;
  
    function handleClick(){
      updateBoard(index);
    }
  
    return(
      <div className={className} onClick={handleClick}>
        {children}
      </div>
    )
  }
  export default Square