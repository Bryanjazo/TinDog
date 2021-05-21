
function profile(){
  let d = document.createElement('h1')
    d.innerHTML = "test2"
    userHome.append(d)
    d.style.display = "none"
  return d
}

//
// const PostForm = props => {
//
//   const handleSubmit = event => {
//     event.preventDefault()
//     const formData = new FormData(event.target)
//     API.submitPost(formData)
//       .then(data => props.setPost(data.post))
//       .catch(console.error);
//   }
//
//   const submitPost = formData => {
//   const config = {
//     method: "POST",
//     headers: {
//       "Authorization": localStorage.getItem("token"),
//       "Accept": "application/json"
//     },
//     body: formData
//   }
//   return fetch('http://localhost:3000/user_profiles', config)
//     .then(res => res.json());
// }
//
//   return (
//     `<form onSubmit={handleSubmit}>
//       <label htmlFor="caption">
//         Name
//         <input type="text" name="name" />
//       </label>
//       <label htmlFor="image" >
//         Upload image
//         <input type="file" name="image" accept="image/*" />
//       </label>
//       <label htmlFor="bio">
//         Name
//         <input type="text" name="bio" />
//       </label>
//       <label htmlFor="age">
//         Name
//         <input type="text" name="age" />
//       </label>
//       <label htmlFor="gender">
//         Name
//         <input type="text" name="gender" />
//       </label>
//       <label htmlFor="interest">
//         Name
//         <input type="text" name="interest" />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>`
//   );
//
// }
