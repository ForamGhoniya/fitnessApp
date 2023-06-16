import "../../dashboard/style/homepage.scss";
import jsonData from "../json/fitness";
import UserLogo from "../../../assets/images/avatar.png";
import React, { useState } from "react";
import ReactModal from "react-modal";
import { Close } from "../../shared/icons/icon";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { App } from "../../shared/charts/fitnessChart/chart";

const HomePage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [selectedActivity, setSelectedActivity] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleActivityClick = (activity) => {
        setSelectedActivity(activity);
        openModal();
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="dashboard-wrapper">
                <div className="fitness-activity-dash">
                    <div className="fit-activity">
                        <div className="headingText">
                            <p>Daily Activities</p>
                        </div>
                        <div className="userDataS">
                            <img
                                src={UserLogo}
                                alt="User logo"
                                className="userImg"
                            />
                            <p className="userName">{jsonData.user.name}</p>
                        </div>
                    </div>

                    <div className="list-activity">
                        <div className="activity-img"></div>
                        <div className="activity-name">
                            {jsonData.activities.slice(0, 6).map((activity) => (
                                <p
                                    key={activity.id}
                                    onClick={() =>
                                        handleActivityClick(activity)
                                    }
                                >
                                    {activity.name}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
            >
                {selectedActivity && (
                    <>
                        <h2>{selectedActivity.name}</h2>
                        <div>steps: {selectedActivity.steps} minutes</div>
                        <div>
                            calories_burned: {selectedActivity.calories_burned}{" "}
                            kcals
                        </div>
                        <div>distance: {selectedActivity.distance} minutes</div>
                        <div>Duration: {selectedActivity.duration} minutes</div>

                        <div
                            className="chart"
                            style={{ height: "300px", width: "400px" }}
                        >
                            <App />
                        </div>

                        <div className="calendar-wrapper">
                            <Calendar
                                onChange={handleDateChange}
                                value={selectedDate}
                                calendarType="US"
                            />
                        </div>
                    </>
                )}

                <button
                    onClick={closeModal}
                    className="closeBtn"
                    style={{ height: "30px", width: "40px" }}
                >
                    <Close />
                </button>
            </ReactModal>
        </>
    );
};

export default HomePage;
