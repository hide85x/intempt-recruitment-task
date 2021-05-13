import axios from 'axios'
export  const collectPosts=async ()=> {
    try {
      const res = await axios('https://jsonplaceholder.typicode.com/posts')
      console.log(res.data)
      return res.data

    }
    catch (err) { console.log(err) }
  }