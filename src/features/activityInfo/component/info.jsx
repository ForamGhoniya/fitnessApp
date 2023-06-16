import "../../activityInfo/style/info.scss";
import { App } from "../../shared/charts/fitnessChart/chart.jsx";

const ActivityInfo = () => {
    return (
        <>
            <div className="info-wrapper">
                <div className="Activities">
                    <div className="claries-burn">
                    
                    </div>
                </div>
                    <div className="chart-wrapper">
                    <App />
                </div>
            </div>
        </>
    );
};

export default ActivityInfo;
