import imgUrl from '../assets/imgs/Cat1.webp';
import { emailService } from '../services/email.service.js';

//This comp manages the home page. it is creating the initial list of email and show a welcoming message to the user 
export function Home() {

  emailService._createEmails() 

  return (
    <section className="home">
      <h1>Welcome to our React App</h1>
      <img src={imgUrl} alt="" />
    </section>
  );
}