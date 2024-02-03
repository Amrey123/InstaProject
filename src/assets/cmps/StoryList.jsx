import { StoryPreview } from "./StoryPreview"
// This function will list all the story and use the Story Preview comp in order to manage the preview of eaach story. This function will also add the ability to remove any unwanted story from the storage
export function StoryList({ stories, onRemoveStory }) {
    return (
        
        <ul className="story-list">
            {stories.map(story =>
                <li key={story.id}>
                    {/* Sending the data to the Story Preview comp to present each story */}
                    <StoryPreview story={story} />
                    <div className="story-actions">
                        {/* This will use the onRemoveStory functino to remove story from the storage */}
                        <button onClick={() => onRemoveStory(story.id)}>X</button>
                    </div>
                </li>
            )}
        </ul>
    )
}
