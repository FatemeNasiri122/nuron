import { Link } from "react-router-dom"


const Home = () => {


  return (
      <div className="dark:text-white">
          <p>Home</p>
          <Link to="/user/edit-profile">edit </Link>
      
      </div>
  )
}

export default Home