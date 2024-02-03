import { useEffect, useState } from "react"
import { storyService } from "/Users/amit.re/Documents/Amit/Studies/Course/InstaProject/Insta-Project/src/services/story.service";

//This function will manage the filters of the StoryIndex page. 
export function StoryFilter ({filterBy, onSetFilter}) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy) //This useState hook is used to determine the filters that are being used and their state 

    console.log (filterByToEdit)
    // This function handles every change in the filter fields and use the setFilterByToEdit from the useState in order to set the new filter state 
    function handleChange(ev) {
        let { name: field, value, type } = ev.target
        console.log (value)
        //This is used to get the string value of the isRead and tranfer it to a boolean value 
        if (field =="isRead") {
            if (value == "true") value = true
            if (value == "false") value = false
        }
        //Setting the new filterByToEdit value and using the ...prevFilter to get the latest values and edit just the requiered one 
        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    //By using this useEffect hook the functinon can response to any change in the filterByToEdit
    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    //Deconstrucsting the filterByToEdit  
    const {text,isRead} = filterByToEdit

    return (
        //Using a form for the filters 
        <form className = "story-filter">
            {/* Setting a text filter for search over the text parameter  */}
            <label htmlFor="text">Text</label>
            <input onChange={handleChange} id="text" value={text} name="text" type="text" />

            {/* Setting a dropdown filter for choosing between the isRead options which are read, unread and all   */}
            <label htmlFor="isRead">Status</label>
            <select onChange={handleChange} id="isRead" value={isRead} name="isRead" type="status">
                <option value="">All</option>
                <option value="true">Read</option>
                <option value="false">Unread</option>
            </select>
        </form>

    )

}
