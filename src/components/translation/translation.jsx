import React from 'react'

const url = 'https://mm-assignment-api.herokuapp.com/translations'
const apiKey = 'T/wnxnVqkS3YQnMBM70eag=='
var userTranslations = [];


async function translationUpdateApi(translation){
  
  await fetch('https://mm-assignment-api.herokuapp.com/translations/1')
  .then(res => res.json())
  .then(data => userTranslations = data.translations)

  userTranslations.push(translation)
  
    fetch(`https://mm-assignment-api.herokuapp.com/translations/1`, {
      method: 'PATCH', // NB: Set method to PATCH
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          // Provide new highScore to add to user with id 1
          translations: userTranslations
      })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Could not update high score')
        }
        return response.json()
      })
      .then(updatedUser => {
        // updatedUser is the user with the Patched data
      })
      .catch(error => {
      })  

}
export default translationUpdateApi

 