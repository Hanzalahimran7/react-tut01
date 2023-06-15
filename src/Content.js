import ItemList from './itemList'

const Content = ({items, handleCheck, handleDelete }) => {
    
    return(
        <main>
        {items.length ? (
                <ItemList
                     items={items}
                     handleCheck={handleCheck}
                     handleDelete={handleDelete}
                />
        ) : (
            <p style={{marginTop: '2rem'}}>Empty list</p>
        )}
        </main>
    )
}

export default Content;