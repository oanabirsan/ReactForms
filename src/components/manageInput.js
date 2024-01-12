import React, { useState } from "react"

export default function ManageInput({ buttonName, handleSubmit }) {
    const [newInput, setNewInput] = useState()

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(newInput)
                setNewInput("")
            }
            }>
                <input
                    type='text'
                    value={newInput}
                    onChange={e => setNewInput(e.target.value)}
                    id='item'
                />
                <button >
                    {buttonName}
                </button>
            </form>
        </div>
    )
}