import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { emailService } from "../services/email.service"
import { Link } from "react-router-dom"

//This comp will show the details view of the email, it will be reached by clicking on the email from the email list 
export function EmailDetails() {
    const [email, setEmail] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    //The use effect will be able to load the email list
    useEffect(() => {
        loadEmail()
    }, [params.emailId])

    //This async function will pull the indiviual email using the emailId 
    async function loadEmail() {
        try {
            const email = await emailService.getById(params.emailId)
            setEmail(email)
        } catch (error) {
            console.log('error:', error)
        }
    }

    //This function will allow the user an option to go back from the email details preview to the main email list 
    function onBack() {
        navigate('/emails')
    }
    console.log('Render');
    
    //If the email hasnt been loaded yet, show the user a default message 
    if (!email) return <div>Loading...</div>
    return (
        <section className="email-details">
            <h1>Email Details</h1>
            <h3>Subject: {email.subject}</h3>
            <h3>Email's Body: {email.body}</h3>
            {/* Calling the onBack function by clicking on the "back" butoon */}
            <button onClick={onBack}>Back</button>
        </section>
    )
}
