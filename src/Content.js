const Content = () => {
    const handleNameChange = () => {
        const name = ["Bob", "Kevin", "Hanzalah"];
        const int = Math.floor(Math.random() * 3);
        return name[int];
      }
    return(
        <main>
            <p>
                Hello {handleNameChange()}
            </p>
        </main>
    )
}

export default Content;