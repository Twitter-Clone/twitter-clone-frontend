// Component to render the results as bootstrap cards. 

import React from 'react'

/* The following method accepts the contacts state in the App.js file and returns a mapped version of the state.
** It then loops over the bootstrap card to insert the contacts name, email, and catch phrase into a bootstrap card */
const Contacts = ({ contacts }) => {
    return (
        <div>
            <center>
                <h1>Twitter Clone App</h1>
                <div>
                     <form>
                         <label>Enter your email</label>
                         <input type="text"/><br /><br />
                         <label>Enter your twitter handle</label>
                         <input type="text"/><br /><br />
                         <input type="submit" value="Submit" />
                     </form>
                </div>
            </center>
            {contacts.map((contact) => (
                <div class="card">
                    <div class="card-body">
                        <h1>User</h1>
                        <h5 class="card-title">{contact.twitterhandle}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Contacts
