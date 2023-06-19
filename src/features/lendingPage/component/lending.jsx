import  '../../lendingPage/style/lending.scss'
import '../../lendingPage/style/lendingResponsive.scss'
import { useNavigate } from "react-router-dom";

const Lending = () => {

  const navigate = useNavigate();

    return (
      <>
      <div className="dashboard-wrapper" id="lending-page">
        <div className="first-page">
        </div>
        <div className="text-wrapper">
          <h2>Welcome To The Future of fitness</h2>
          <p>
          Best workouts for you
          </p>
          <p className="description">You will have everything you need to reach your personal fitness goals - for free!</p>
          <div className="button-wrapper">
            <button className="start-button" onClick={()=> {navigate('/home')}}>Get Started <i className="fa-solid fa-person-running"></i></button>
          </div>
          </div>
      </div>
      </>
    );
  };
  
  export default Lending;