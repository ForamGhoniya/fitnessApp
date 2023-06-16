import '../../dashboard/style/homepage.scss';
import jsonData from '../json/fitness';
import { useNavigate } from "react-router-dom";
import UserLogo from "../../../assets/images/avatar.png";
import running from "../../../assets/images/run.jpg";

const  HomePage= () => {
  const navigate = useNavigate();


    return (
      <>
    <div className="dashboard-wrapper" >
        <div className="fitness-activity-dash">

        <div className="fit-activity">
          <div className='userDataS'>
          <img src={UserLogo} alt="User logo" className='userImg' />
          <p className='userName'>{jsonData.user.name}</p>
          </div>

          
              <p>Track Your Daily Activity</p>
              <div className="activity-img">
              </div>
              </div>
              
              <div className="list-activity">
                <button className="activity-name running" onClick={() => {navigate('/activityInfo')}}>
                {/* <img src={running} className='runImg' /> */}
                {jsonData.activities[0].name}
                </button>
                <button className="activity-name" onClick={() => {navigate('/activityInfo')}}>
                {jsonData.activities[1].name}
                </button>
                <button className="activity-name" onClick={() => {navigate('/activityInfo')}}>
                {jsonData.activities[2].name}
                </button>
                <button className="activity-name" onClick={() => {navigate('/activityInfo')}}>
                {jsonData.activities[3].name}
                </button>
                <button className="activity-name" onClick={() => {navigate('/activityInfo')}}>
                {jsonData.activities[4].name}
                </button>
                <button className="activity-name" onClick={() => {navigate('/activityInfo')}}>
              {jsonData.activities[5].name}
                </button>
              </div>
            </div>
</div>
<jsonData/>
      </>
    );
  };
  
  export default HomePage;