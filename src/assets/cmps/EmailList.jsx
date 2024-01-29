import { EmailPreview } from "./EmailPreview"
// This function will list all the emails and use the Email Preview comp in order to manage the preview of eaach email. This function will also add the ability to remove any unwanted email from the storage
export function EmailList({ emails, onRemoveEmail }) {
    return (
        <ul className="email-list">
            {emails.map(email =>
                <li key={email.id}>
                    {/* Sending the data to the Email Preview comp to present each email */}
                    <EmailPreview email={email} />
                    <div className="email-actions">
                        {/* This will use the onRemoveEmail functino to remove emails from the storage */}
                        <button onClick={() => onRemoveEmail(email.id)}>X</button>
                    </div>
                </li>
            )}
        </ul>
    )
}
