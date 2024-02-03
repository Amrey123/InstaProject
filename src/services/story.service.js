import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import imgCat1 from '../assets/imgs/Cat1.webp';

//exporting all the functions for further use by the different comps 
export const storyService = {
    query,
    save,
    remove,
    getById,
    createStory,
    getDefaultFilter,
    _createStories,
}




const loggedinUser = { story: 'user@appsus.com', fullname: 'Mahatma Appsus' }

//set the storage key
const STORAGE_KEY = 'stories'
//const date = new Date()
//console.log ('story.service?')

//create stories using the _createStories function 
_createStories()

//This async function is pulling a list of stories using the filterBy parameter 
async function query(filterBy) {
    let stories = await storageService.query(STORAGE_KEY)
    if (filterBy) {
        var {isRead, text} = filterBy
        console.log ("filter"+ isRead)
        //If the isRead isnt empty, consider its value and pull all the matching text with ignoring the case
        if (isRead!== "") {
            stories = stories.filter(story => 
                story.isRead==isRead && story.text.toLowerCase().includes(text.toLowerCase()))
            }
        //If the isRead is empty, ignore its value and pull all the matching text with ignoring the case
        else {
            stories = stories.filter(story => 
                story.text.toLowerCase().includes(text.toLowerCase()))
        }
    }
    return stories
}

//This function will get the story from storage using the storyId
function getById(id) {
    return storageService.get(STORAGE_KEY, id)
}
//This function will remove the story from storage using the storyId
function remove(id) {
    return storageService.remove(STORAGE_KEY, id)
}

//This function will save a new  story to the storage and edit the story if the storyId already existed 
function save(storyToSave) {
    if (storyToSave.id) {
        return storageService.put(STORAGE_KEY, storyToSave)
    } else {
        storyToSave.isOn = false
        return storageService.post(STORAGE_KEY, storyToSave)
    }
}

//This function creates an story 
function createStory(id = '', text = '',isRead=false) {
    return {
        id,
        text,
        isRead,
    }
}

//This function creates a default filter that will later be used by pulling the ifrst intial list of stories
function getDefaultFilter() {
    return {
        isRead: "",
        text: ""

    }
}

//This function creates a list of stories with initial sets of stories, and saves them to the storage
function _createStories() {
    let stories = utilService.loadFromStorage(STORAGE_KEY)
    console.log ('here')
    if (!stories || !stories.length) {
        stories = [
            {_id: "s101",isRead:true, text: "Best trip ever",imgUrl: "http://some-img", by: {_id: "u101",fullname: "Ulash Ulashi",imgUrl: "http://some-img"},loc: {lat: 11.11, lng: 22.22,name: "Tel Aviv"},comments: [{id: "c1001",by: {_id: "u105",fullname: "Bob",imgUrl: "http://some-img"},txt: "good one!",likedBy: [ {"_id": "u105","fullname": "Bob","imgUrl": "http://some-img"}]},{id: "c1002",by: {_id: "u106",fullname: "Dob",imgUrl: "http://some-img"},txt: "not good!",}],likedBy: [{_id: "u105",fullname: "Bob",imgUrl: "http://some-img"},{_id: "u106",fullname: "Dob",imgUrl: "http://some-img"}],tags: ["fun", "romantic"]},
            {_id: "s102",isRead:true, text: "Most aweful day",imgUrl: "http://some-img", by: {_id: "u101",fullname: "Ulash Ulashi",imgUrl: "http://some-img"},loc: {lat: 11.11, lng: 22.22,name: "Tel Aviv"},comments: [{id: "c1001",by: {_id: "u105",fullname: "Bob",imgUrl: "http://some-img"},txt: "good one!",likedBy: [ {"_id": "u105","fullname": "Bob","imgUrl": "http://some-img"}]},{id: "c1002",by: {_id: "u106",fullname: "Dob",imgUrl: "http://some-img"},txt: "not good!",}],likedBy: [{_id: "u105",fullname: "Bob",imgUrl: "http://some-img"},{_id: "u106",fullname: "Dob",imgUrl: "http://some-img"}],tags: ["fun", "romantic"]}
        ]
            utilService.saveToStorage(STORAGE_KEY, stories)
    }
}