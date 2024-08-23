import { useState, useEffect } from "react";
import PopUpInput from "./PopUpInput";
import Button from "../Button";

const PopUp = ({ isOpen, onClose }: { isOpen: boolean; onClose: any }) => {
  const [vacationDestination, setVacationDestination] = useState("");
  const [dateRangeStart, setDateRangeStart] = useState("");
  const [dateRangeEnd, setDateRangeEnd] = useState("");
  const [hotelBooking, setHotelBooking] = useState("");
  const [additionalHelp, setAdditionalHelp] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showTravelGuide, setShowTravelGuide] = useState(false);
  const [title, setTitle] = useState("Plan Your Vacation");

  useEffect(() => {
    const allInputsFilled =
      vacationDestination &&
      dateRangeStart &&
      dateRangeEnd &&
      hotelBooking &&
      additionalHelp;
    setIsButtonDisabled(!allInputsFilled);
  }, [
    vacationDestination,
    dateRangeStart,
    dateRangeEnd,
    hotelBooking,
    additionalHelp,
  ]);

  useEffect(() => {
    if (!isOpen) {
      // Reset all state variables when the pop-up is closed
      setVacationDestination("");
      setDateRangeStart("");
      setDateRangeEnd("");
      setHotelBooking("");
      setAdditionalHelp("");
      setIsButtonDisabled(true);
      setIsLoading(false);
      setShowTravelGuide(false);
      setTitle("Plan Your Vacation");
    }
  }, [isOpen]);

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowTravelGuide(true);
      setTitle("Travel Guide");
    }, 500000);
  };

  if (!isOpen) return null;

  return (
    <div className="pop-up-container" onClick={onClose}>
      <div
        className={`pop-up ${showTravelGuide ? "margin" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src="/images/close.svg"
          alt="Close"
          className="close-icon"
          onClick={onClose}
        />
        <div className="title">{title}</div>
        {isLoading ? (
          <div className="loading-container">
            <img
              src="/images/loading.svg"
              alt="Loading"
              className="loading-icon"
            />
            <div className="loading-info">
              Lorem ipsum dolor sit amet consectetur. Turpis lorem congue sed
              viverra id amet.
            </div>
            <Button
              variant="plan-now"
              label="Plan Now"
              disabled={isButtonDisabled}
              onClick={handleButtonClick}
            />
          </div>
        ) : showTravelGuide ? (
          <div className="travel-guide">
            <img
              src="/images/placeholders/placeholder-travelguide-img.svg"
              alt="travel guide image"
              className="guide-image"
            />
            <div className="guide-title">
              Lorem ipsum dolor sit amet consectetur. Etiam ac ut donec amet nec
              sed dignissim pretium vitae.
            </div>
            <div className="guide-description">
              <b>1. Rome:</b> Lorem ipsum dolor sit amet consectetur. Etiam ac
              ut donec amet nec sed dignissim pretium vitae. Morbi nulla proin
              ac integer sit feugiat commodo enim.
              <br />
              <br />
              <b>2. Florence:</b> Lorem ipsum dolor sit amet consectetur. Etiam
              ac ut donec amet nec sed dignissim pretium vitae.
              <br />
              <br />
              <b>3. Venice:</b> Lorem ipsum dolor sit amet consectetur. Etiam ac
              ut donec amet nec sed dignissim pretium vitae. Morbi nulla proin
              ac integer sit feugiat commodo enim.
            </div>
            <div className="travel-guide-card">
              <div className="title">
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <div className="info">
                Lorem ipsum dolor sit amet consectetur.
                <br />
                <br />
                Bibendum commodo eget quisque lacinia morbi felis. Id massa
                adipiscing facilisis fusce ullamcorper id in amet aliquam.
              </div>
              <div className="actions">
                <Button variant="explore-now" label="Explore Now" />
                <img
                  src="/images/placeholders/placeholder-turkishairlines-img.svg"
                  alt="turkish airlines logo"
                />
              </div>
            </div>
          </div>
        ) : (
          <>
            <PopUpInput
              type="text"
              title="Where do you want to go on vacation?"
              value={vacationDestination}
              onChange={(e) => setVacationDestination(e.target.value)}
            />
            <PopUpInput
              type="date"
              title="Which date ranges are suitable for you?"
              valueStart={dateRangeStart}
              valueEnd={dateRangeEnd}
              onChangeStart={(e) => setDateRangeStart(e.target.value)}
              onChangeEnd={(e) => setDateRangeEnd(e.target.value)}
            />
            <PopUpInput
              type="text"
              title="Would you also like to book a hotel?"
              value={hotelBooking}
              onChange={(e) => setHotelBooking(e.target.value)}
            />
            <PopUpInput
              type="text"
              title="Do you need help with anything else about your vacation?"
              value={additionalHelp}
              onChange={(e) => setAdditionalHelp(e.target.value)}
            />
            <Button
              variant="plan-now"
              label="Plan Now"
              disabled={isButtonDisabled}
              onClick={handleButtonClick}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default PopUp;
