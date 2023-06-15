import '../../dashboard/style/homepage.scss';
import jsonData from '../json/fitness';
import { useNavigate } from "react-router-dom";


const  HomePage= () => {
  const navigate = useNavigate();


    return (
      <>
    <div className="dashboard-wrapper" >
        <div className="fitness-activity-dash">
            <div className="fit-activity">
              <p>Track Your Daily Activity</p>
              <div class="activity-img">
              </div>
              </div>
              
              <div class="list-activity">
                <button class="activity-name" onClick={() => {navigate('/activityInfo')}}>
                <i class="fa-solid fa-person-running"></i> {jsonData.activities[0].name}
                </button>
                <button class="activity-name" onClick={() => {navigate('/activityInfo')}}>
                <i class="fa-solid fa-person-biking"></i> {jsonData.activities[1].name}
                </button>
                <button class="activity-name" onClick={() => {navigate('/activityInfo')}}>
                <i class="fa-solid fa-person-running-fast"></i> {jsonData.activities[2].name}
                </button>
                <button class="activity-name" onClick={() => {navigate('/activityInfo')}}>
                <i class="fa-solid fa-person-swimming"></i> {jsonData.activities[3].name}
                </button>
                <button class="activity-name" onClick={() => {navigate('/activityInfo')}}>
                <i class="fa-solid fa-person-hiking"></i> {jsonData.activities[4].name}
                </button>
                <button class="activity-name" onClick={() => {navigate('/activityInfo')}}>
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