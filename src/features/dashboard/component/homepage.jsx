import "../../dashboard/style/homepage.scss";
import jsonData from "../json/fitness";
import UserLogo from "../../../assets/images/avatar.png";
import React, { useState } from "react";
import ReactModal from "react-modal";
import { Close } from "../../shared/icons/icon";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { App } from "../../shared/charts/fitnessChart/chart";

import running from "../../../assets/images/running.jpg"
import cycling from "../../../assets/images/cycling.jpg"
import strength from "../../../assets/images/Strength-Training.jpg"
import swimming from "../../../assets/images/swimming.jpg"
import Hiking from "../../../assets/images/Hiking.jpg"
import Yoga from "../../../assets/images/Yoga.jpg"

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

    const ImageMapper= {
        'Running' : running,
        'Cycling': cycling,
        'Strength Training': strength,
        'Swimming':swimming,
        'Hiking':Hiking,
        'Yoga':Yoga,
    }

    return (
        <>
            <div className="dashboard-wrapper">
                <div className="fitness-activity-dash">
                    <div className="fit-activity">
                        <div className="headingText">
                            <p>Daily Activities</p>

                            <div className="list-activity">
                                    {jsonData.activities
                                        .slice(0, 6)
                                        .map((activity) => (
                                            <div className="imgWrapper">
                                                <div className="activityImg">

                                                <img src={ImageMapper[activity.name]}/>

                                                </div>
                                            <p
                                                key={activity.id}
                                                onClick={() =>
                                                    handleActivityClick(
                                                        activity
                                                    )
                                                }
                                            >
                                                {activity.name}
                                            </p>
                                            </div>
                                        ))}
                                </div>
                        </div>
                    </div>
                </div>
                <div className="userData">
                    <div className="userProfile">
                    <img
                        src={UserLogo}
                        alt="User logo"
                        className="userImg"
                    />
                    <div className="userInfo-wrapper">
                    <p className="userName">{jsonData.user.name}</p>
                    <p className="userEmail">{jsonData.user.email}</p>
                    </div>
                    </div>

                    <div className="userInfo-main">

                    <div className="userInfo">
                        <div className="Info">
                        <p className="key">Age</p>
                        <p>{jsonData.user.age}</p>
                        </div>

                        <div className="Info">
                        <p className="key">Height</p>
                        <p>{jsonData.user.height}</p>
                        </div>

                        <div className="Info">
                        <p className="key">Width</p>
                        <p>{jsonData.user.weight}</p>
                        </div>
                    </div>
                    <div className="averageData">
                    <div className="averageInfo">
                        <p className="Data">calories burned : </p>
                        <p> {jsonData.user.calories_burned}</p>
                        </div>

                        <div className="averageInfo">
                        <p className="Data">steps : </p>
                        <p> {jsonData.user.steps}</p>
                        </div>

                        <div className="averageInfo">
                        <p className="Data">heart_rate : </p>
                        <p> {jsonData.user.heart_rate}</p>
                        </div>

                    </div>
                    </div>
                </div>

                <div className="About">
                <div className="activity-img"></div>
                <div className="activity-desc">

                    <h2 className="element-heading-title">
                        Fitness Hacks For Life
                    </h2>
                    <p>
                        Do you struggle with “overreactions”? Do you avoid
                        confrontation? Are you quick to fear, anger, or
                        resentment? Are you struggling to let go of people or
                        memories and feeling stuck in the past? You Are Not
                        Alone. So many of us are stuck in suffering after loving
                        an abusive person.
                    </p>
                    <p>Fitness Hacks for Life was created to help those dealing with symptoms of post-traumatic stress disorder, such as anxiety, depression, hypersensitivity, and avoidance behaviors. While these responses stem from trauma and pain, without help, they can spread throughout all the avenues of our lives. Our site was created to offer inspirational content and information so that a life of happiness, peace, and safety could be found.
                    </p>
                </div>
                </div>
            </div>

            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
            >
                {selectedActivity && (
                    <>
                        <h2 className="Activity-title">
                            {selectedActivity.name}
                        </h2>

                        <div className="main-wrapper">
                        <div className="activities-wrapper">
                            calories_burned: <br/> {selectedActivity.calories_burned} kcals
                        </div>
                        <div className="activities-wrapper">steps: <br/> {selectedActivity.steps} min</div>
                        <div className="activities-wrapper">distance: <br/> {selectedActivity.distance} min</div>
                        <div className="activities-wrapper">Duration: <br/> {selectedActivity.duration} min</div>
                        </div>

                        <div className="calendar-wrapper">
                            <Calendar
                                onChange={handleDateChange}
                                value={selectedDate}
                                calendarType="US"
                            />
                        </div>

                        <div
                            className="chart"
                            style={{ height: "300px", width: "400px" }}>
                            <App />
                        </div>
                    </>
                )}

                <div
                    onClick={closeModal}
                    className="closeBtn"
                >
                    <Close />
                </div>
            </ReactModal>
        </>
    );
};

export default HomePage;
