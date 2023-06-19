import {FaPlus} from 'react-icons/fa'

const AddItem = () => {
    return(
        <form className="addForm">
            <label htmlFor='additem'>
                AddItem
            </label>
            <input
                autoFocus
                id='addItem'
                type='text'
                placeholder='Add Item'
                required
                />
            <button
                type='submit'
                arial-label='Add Ite,'>
                    <FaPlus/>
            </button>

        </form>
    );
}

export default AddItem;