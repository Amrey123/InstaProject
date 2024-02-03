import imgUrl from '../assets/imgs/Cat1.webp';
import { storyService } from '../services/story.service';

//This comp manages the home page. it is creating the initial list of story and show a welcoming message to the user 
export function Home() {

  storyService._createStories() 

  return (
    <section className="home">
      <h1>Welcome to our React App</h1>
      <img src={imgUrl} alt="" />
    </section>
  );
}