const Content = () => {
    const handleNameChange = () => {
        const name = ["Bob", "Kevin", "Hanzalah"];
        const int = Math.floor(Math.random() * 3);
        return name[int];
      }

    const handleClickEvent = () =>{
        console.log("Youi clicked!")
    }

    const handleClick2 = (name) =>{
        console.log(name + ' clicked')
    }

    const handleClick3 = (e) =>{
        console.log(e.target)
    }

    return(
        <main>
            <p onDoubleClick={handleClickEvent}>
                Hello {handleNameChange()}
            </p>
            <button onClick={handleClickEvent}>Click it</button>
            <button onClick={() => handleClick2("Hanzalah")}>Click it</button>
            <button onClick={(e) => handleClick3(e)}>Click it</button>
        </main>
    )
}

export default Content;