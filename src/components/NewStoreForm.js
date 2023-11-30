import React, { useState } from "react"

function NewStoreForm({ addStoreHandler }) {

    // SetUp a onSubmit inside of form which hits a callfucntion 
    // We want onSubmit to take 
    // Set a state of formData that we want to pass back to our our handler 

    return (
        <form onSubmit={addStoreHandler}>
            <input type="text" id="name" placeholder="Store Name" />
            <input type="text" id="image" placeholder="Image URL" />
            <input type="number" id="season" placeholder="Season" step="1" />
            <input type="number" id="episode" placeholder="Episode" step="1" />
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;