import { Link } from "react-router-dom";
//This comp will manage the preview of each indiviual email, it is being called from the EmailList comp. It allows the user, using Link, to press on each email and show the extra details 
export function EmailPreview({ email }) {
    return (
        <article className="email-preview">
            <Link to={`/email/${email.id}`}>
                {/*This will bold only the unread emails*/}
                <h2>{email.userName}</h2>
                <h2 style={email.isRead ? { fontWeight: "bold" } : {}}>
                    {email.subject}
                </h2>
                <h2>{email.imageUrl}23</h2>
                
                
   
            </Link>
        </article>
    );
}