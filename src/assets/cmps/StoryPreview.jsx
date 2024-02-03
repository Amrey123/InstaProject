import { Link } from "react-router-dom";
//This comp will manage the preview of each indiviual story, it is being called from the StoryList comp. It allows the user, using Link, to press on each story and show the extra details 
export function StoryPreview({ story }) {
    return (
        <article className="story-preview">
            <Link to={`/story/${story.id}`}>
                {/*This will bold only the unread storys*/}
                <h2>{story.userName}</h2>
                <h2 style={story.isRead ? { fontWeight: "bold" } : {}}>
                    {story.text}
                </h2>
                <img src={story.imageUrl} alt="Story Image" />
                
                
   
            </Link>
        </article>
    );
}