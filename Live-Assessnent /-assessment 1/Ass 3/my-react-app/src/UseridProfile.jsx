import profilePic from './my-react-app/src/beyonce.webp'

function Card (){
  return (
    <div className="card">
<img src={profilePic} alt="profile image"></img>
<h2> Beyonce </h2>
<p>
  <strong>Age:</strong> {37}
</p>
<p>
  <strong>Location:</strong> {LA}
  </p>
    </div>
  )
    
}


export default app;