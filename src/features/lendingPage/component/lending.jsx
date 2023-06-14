import  '../../lendingPage/style/lending.scss'
import '../../lendingPage/style/lendingResponsive.scss'
import { useNavigate } from "react-router-dom";

const Lending = () => {

  const navigate = useNavigate();

    return (
      <>
      <div class="dashboard-wrapper" id="lending-page">
        <div class="first-page">
        </div>
        <div class="text-wrapper">
          <h2>Welcome To The Future of fitness</h2>
          <p>
            Fitness App
          </p>
          <div class="button-wrapper">
            <button class="start-button" onClick={()=> {navigate('/home')}}>Start<i class="fa-solid fa-person-running"></i></button>
          </div>
          </div>
      </div>
      </>
    );
  };
  
  export default Lending;