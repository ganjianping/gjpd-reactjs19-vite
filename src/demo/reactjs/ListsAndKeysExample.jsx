import { useState } from 'react';

function ListsAndKeysExample() {
    const [items, setItems] = useState([
        { id: 1, text: 'Learn React' },
        { id: 2, text: 'Build something awesome' },
        { id: 3, text: 'Share with the community' }
    ]);

    const [newItemText, setNewItemText] = useState('');

    const addItem = () => {
        if (newItemText.trim()) {
            setItems([
                ...items,
                {
                    id: items.length + 1,
                    text: newItemText.trim()
                }
            ]);
            setNewItemText('');
        }
    };

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Lists and Keys Example</h2>
            
            <div className="mb-4">
                <h3 className="text-xl mb-2">Todo List</h3>
                <div className="flex gap-2 mb-4">
                    <input
                        type="text"
                        value={newItemText}
                        onChange={(e) => setNewItemText(e.target.value)}
                        placeholder="Add new item"
                        className="border p-2 rounded"
                    />
                    <button
                        onClick={addItem}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Add
                    </button>
                </div>

                <ul className="space-y-2">
                    {items.map(item => (
                        <li
                            key={item.id}
                            className="flex justify-between items-center bg-gray-100 p-2 rounded"
                        >
                            <span>{item.text}</span>
                            <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 hover:text-red-700"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-8">
                <h3 className="text-xl mb-2">Key Concepts Explained:</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Each item in the list has a unique <code>key</code> prop (using item.id)</li>
                    <li>The <code>key</code> helps React identify which items have changed</li>
                    <li>We use <code>map()</code> to transform the data array into list elements</li>
                    <li>The list is dynamic - you can add and remove items</li>
                </ul>
            </div>
        </div>
    );
}

export default ListsAndKeysExample;