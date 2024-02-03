import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { storyService } from "../services/story.service"
import { Link } from "react-router-dom"

//This comp will show the details view of the story, it will be reached by clicking on the story from the story list 
export function StoryDetails() {
    const [story, setStory] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    //The use effect will be able to load the story list
    useEffect(() => {
        loadStory()
    }, [params.storyId])

    //This async function will pull the indiviual story using the storyId 
    async function loadStory() {
        try {
            const story = await storyService.getById(params.storyId)
            setStory(story)
        } catch (error) {
            console.log('error:', error)
        }
    }

    //This function will allow the user an option to go back from the story details preview to the main story list 
    function onBack() {
        navigate('/storys')
    }
    console.log('Render');
    
    //If the story hasnt been loaded yet, show the user a default message 
    if (!story) return <div>Loading...</div>
    return (
        <section className="story-details">
            <h1>Story Details</h1>
            <h3>Text: {story.text}</h3>
            <h3>Story's Body: {story.body}</h3>
            {/* Calling the onBack function by clicking on the "back" butoon */}
            <button onClick={onBack}>Back</button>
        </section>
    )
}
