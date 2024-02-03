import { useEffect, useState } from "react"
import { storyService } from "../services/story.service"
import { StoryList } from "../assets/cmps/StoryList"
import { StoryFilter } from "../assets/cmps/StoryFilter"

//This comp will manage the story index page and will doing that by using different function to control the different tasks 

export function StoryIndex() {

    const [stories, setStories] = useState(null) 
    const [filterBy, setFilterBy] = useState(storyService.getDefaultFilter())

    //Using this hook in order to load the list of stories anytime the filter is being changed 
    useEffect(() => {
        //console.log("Effect")
        loadStories()
    }, [filterBy])

    //This async function loads the list of stories 
    async function loadStories() {
        const stories = await storyService.query(filterBy)
        console.log ("stories:", stories)
        setStories(stories)
    }



    //This async function manages the removal of story from the storage
    async function onRemoveStory(storyId) {
        try {
            await storyService.remove(storyId)
            setStories(prevStories => {
                return prevStories.filter(story => story.id !== storyId)
            })
        } catch (error) {
            console.log('error:', error)
        }
    }

    //This function manages the filter and sent into the storyFilter comp. It sends the current filter info in order to create a 2 way bonding 
    function onSetFilter(filterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    //IN case the story hasnt been loaded yet, show the user a simple message of "Loading..."
    if (!stories){
        return <div>Loading...</div>
    }
    //Deconstruct the filterby into text and isRead fields 
    const { text,isRead } = filterBy
    
    //call the storyFilter and StoryLIst comp with the releveant functions 
    return (
        <section className="stories-index">
            <h1>Stories index</h1>
            <StoryFilter filterBy={{ text,isRead }} onSetFilter={onSetFilter} />
            <StoryList stories={stories} onRemoveStory={onRemoveStory} />
        </section>
    )
}