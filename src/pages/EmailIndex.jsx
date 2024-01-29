import { useEffect, useState } from "react"
import { emailService } from "../services/email.service"
import { EmailList } from "../assets/cmps/EmailList"
import { EmailFilter } from "../assets/cmps/EmailFilter"

//This comp will manage the email index page and will doing that by using different function to control the different tasks 

export function EmailIndex() {

    const [emails, setEmails] = useState(null) 
    const [filterBy, setFilterBy] = useState(emailService.getDefaultFilter())

    //Using this hook in order to load the list of emails anytime the filter is being changed 
    useEffect(() => {
        //console.log("Effect")
        loadEmails()
    }, [filterBy])

    //This async function loads the list of emails 
    async function loadEmails() {
        const emails = await emailService.query(filterBy)
        console.log ("emails:", emails)
        setEmails(emails)
    }



    //This async function manages the removal of email from the storage
    async function onRemoveEmail(emailId) {
        try {
            await emailService.remove(emailId)
            setEmails(prevEmails => {
                return prevEmails.filter(email => email.id !== emailId)
            })
        } catch (error) {
            console.log('error:', error)
        }
    }

    //This function manages the filter and sent into the emailFilter comp. It sends the current filter info in order to create a 2 way bonding 
    function onSetFilter(filterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    //IN case the email hasnt been loaded yet, show the user a simple message of "Loading..."
    if (!emails){
        return <div>Loading...</div>
    }
    //Deconstruct the filterby into subject and isRead fields 
    const { subject,isRead } = filterBy
    
    //call the emailFilter and EmailLIst comp with the releveant functions 
    return (
        <section className="emails-index">
            <h1>Emails index</h1>
            <EmailFilter filterBy={{ subject,isRead }} onSetFilter={onSetFilter} />
            <EmailList emails={emails} onRemoveEmail={onRemoveEmail} />
        </section>
    )
}