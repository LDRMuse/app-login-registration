import './Form.css'

export default () => `<form>

<div><label class="screen-reader-text" for="firstName">firstname</label><input placeholder="First Name" type="text"
    id="firstName"></div>

<div><label class="screen-reader-text" for="lastName">lastname</label><input placeholder="Last Name" type="text"
    id="lastName"></div>

<div><label class="screen-reader-text" for="email">email</label><input placeholder="info@email.com" type="email"
    id="email"></div>

<div><label class="screen-reader-text" for="phone">phone</label><input placeholder="(xxx) xxx-xxx" type="tel"
    id="phone"></div>

<div><label class="screen-reader-text" for="userName">username</label><input placeholder="username" type="text"
    id="userName"></div>

<div><label class="screen-reader-text" for="password">password</label><input placeholder="password" type="password"
    id="password"></div>

<button type="Submit">Click here to register!</button>

</form>`
