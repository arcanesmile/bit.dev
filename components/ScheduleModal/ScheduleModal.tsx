"use client";

import { useState, useEffect } from "react";
import "./ScheduleModal.css";
import {
  HiOutlineX,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineVideoCamera,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineCheckCircle,
  HiOutlinePhone,
  HiOutlineChat,
  HiOutlineOfficeBuilding,
  HiOutlineArrowRight
} from "react-icons/hi";
import { FiCalendar, FiClock, FiUsers } from "react-icons/fi";

interface CallType {
  id: string;
  icon: React.ReactNode;
  title: string;
  duration: number;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

interface TimeSlot {
  id: number;
  day: string;
  date: Date;
  times: string[];
  available: boolean;
}

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  callTypes: CallType[];
  availableSlots: TimeSlot[];
  preselectedSlot?: TimeSlot | null;
  preselectedTime?: string | null;
}

// (Removed duplicate interface and misplaced useEffec

export default function ScheduleModal({ 
  isOpen, 
  onClose, 
  callTypes, 
  availableSlots,
  preselectedSlot = null,
  preselectedTime = null
}: ScheduleModalProps) {
  const [step, setStep] = useState<"type" | "date" | "time" | "details" | "confirm">("type");
  const [selectedCallType, setSelectedCallType] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Preselect slot and time if provided
  useEffect(() => {
    if (preselectedSlot) {
      setSelectedDate(preselectedSlot.date);
      // Auto-advance to time selection step
      setStep("time");
    }
    if (preselectedTime) {
      setSelectedTime(preselectedTime);
    }
  }, [preselectedSlot, preselectedTime]);

  // Filter available slots for selected day
  const filteredSlots = availableSlots.find(slot => 
    slot.date.toDateString() === selectedDate?.toDateString()
  );

  // Get selected call type details
  const callTypeDetails = callTypes.find(type => type.id === selectedCallType);

  const handleNextStep = () => {
    switch (step) {
      case "type":
        if (selectedCallType) setStep("date");
        break;
      case "date":
        if (selectedDate) setStep("time");
        break;
      case "time":
        if (selectedTime) setStep("details");
        break;
      case "details":
        if (userDetails.name && userDetails.email) {
          setStep("confirm");
          handleSubmitBooking();
        }
        break;
    }
  };

  const handlePrevStep = () => {
    switch (step) {
      case "date":
        setStep("type");
        break;
      case "time":
        setStep("date");
        break;
      case "details":
        setStep("time");
        break;
      case "confirm":
        setStep("details");
        break;
    }
  };

  const handleSubmitBooking = async () => {
    if (!selectedCallType || !selectedDate || !selectedTime) return;

    setIsSubmitting(true);

    // Use requestAnimationFrame for better performance
    const submitBooking = () => {
      // Simulate API call with timeout
      setTimeout(() => {
        setIsSubmitting(false);
        setIsBookingConfirmed(true);
        
        if (isMounted && selectedDate) {
          // Create Google Calendar event URL
          const eventTime = `${selectedDate.toISOString().split('T')[0]}T${selectedTime}:00`;
          const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${eventTime}/${eventTime}&text=Call with ${encodeURIComponent(userDetails.name)}&details=Call type: ${encodeURIComponent(callTypeDetails?.title || '')}%0ANotes: ${encodeURIComponent(userDetails.notes)}&location=Google Meet`;
          
          // Open Google Calendar in new tab after a short delay
          setTimeout(() => {
            window.open(googleCalendarUrl, "_blank", "noopener,noreferrer");
          }, 500);
        }
      }, 1500);
    };

    // Use requestAnimationFrame to avoid blocking
    if (typeof window !== 'undefined') {
      requestAnimationFrame(submitBooking);
    } else {
      submitBooking();
    }
  };

  const handleStartCall = () => {
    // Generate Google Meet link
    const meetLink = `https://meet.google.com/new?${Date.now()}`;
    window.open(meetLink, "_blank", "noopener,noreferrer");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
  };

  // Don't render on server
  if (!isMounted || !isOpen) return null;

  return (
    <div className="schedule-modal-overlay" onClick={onClose}>
      <div className="schedule-modal no-scrollbar" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-content">
            <div className="modal-icon">
              <HiOutlineCalendar />
            </div>
            <div>
              <h2 className="modal-title">Schedule a Call</h2>
              <p className="modal-subtitle">Book your perfect time slot</p>
            </div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <HiOutlineX />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="progress-steps">
          <div className={`step ${step === "type" ? "active" : ""} ${step !== "type" ? "completed" : ""}`}>
            <div className="step-icon">1</div>
            <span className="step-label">Call Type</span>
          </div>
          <div className="step-connector"></div>
          <div className={`step ${step === "date" ? "active" : ""} ${["time", "details", "confirm"].includes(step) ? "completed" : ""}`}>
            <div className="step-icon">2</div>
            <span className="step-label">Date</span>
          </div>
          <div className="step-connector"></div>
          <div className={`step ${step === "time" ? "active" : ""} ${["details", "confirm"].includes(step) ? "completed" : ""}`}>
            <div className="step-icon">3</div>
            <span className="step-label">Time</span>
          </div>
          <div className="step-connector"></div>
          <div className={`step ${step === "details" ? "active" : ""} ${step === "confirm" ? "completed" : ""}`}>
            <div className="step-icon">4</div>
            <span className="step-label">Details</span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="modal-content">
          {isBookingConfirmed ? (
            <div className="confirmation-screen">
              <div className="confirmation-icon">
                <HiOutlineCheckCircle />
              </div>
              <h3 className="confirmation-title">Call Scheduled Successfully!</h3>
              <p className="confirmation-message">
                Your {callTypeDetails?.duration}-minute {callTypeDetails?.title.toLowerCase()} 
                has been scheduled for {selectedDate?.toLocaleDateString()} at {selectedTime}.
              </p>
              
              <div className="booking-summary">
                <div className="summary-item">
                  <HiOutlineVideoCamera className="summary-icon" />
                  <div>
                    <span className="summary-label">Call Type</span>
                    <span className="summary-value">{callTypeDetails?.title}</span>
                  </div>
                </div>
                <div className="summary-item">
                  <FiCalendar className="summary-icon" />
                  <div>
                    <span className="summary-label">Date & Time</span>
                    <span className="summary-value">
                      {selectedDate?.toLocaleDateString()} at {selectedTime}
                    </span>
                  </div>
                </div>
                <div className="summary-item">
                  <HiOutlineUser className="summary-icon" />
                  <div>
                    <span className="summary-label">Guest</span>
                    <span className="summary-value">{userDetails.name}</span>
                  </div>
                </div>
              </div>

              <div className="confirmation-actions">
                <button 
                  className="cta-button primary"
                  onClick={handleStartCall}
                >
                  <HiOutlineVideoCamera className="cta-icon" />
                  Start Call Now (Test)
                </button>
                <button 
                  className="cta-button secondary"
                  onClick={() => window.open('https://calendar.google.com', '_blank')}
                >
                  <HiOutlineCalendar className="cta-icon" />
                  Add to Calendar
                </button>
                <button 
                  className="cta-button outline"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Step 1: Call Type Selection */}
              {step === "type" && (
                <div className="step-content">
                  <h3 className="step-title">Choose Call Type</h3>
                  <p className="step-description">
                    Select the type of call that best fits your needs
                  </p>
                  
                  <div className="call-types-grid">
                    {callTypes.map((callType) => (
                      <div 
                        key={callType.id}
                        className={`call-type-card ${selectedCallType === callType.id ? 'selected' : ''} ${callType.popular ? 'popular' : ''}`}
                        onClick={() => setSelectedCallType(callType.id)}
                      >
                        {callType.popular && (
                          <div className="popular-badge">Most Popular</div>
                        )}
                        <div className="call-type-icon">
                          {callType.icon}
                        </div>
                        <h4 className="call-type-title">{callType.title}</h4>
                        <div className="call-type-meta">
                          <span className="duration">
                            <FiClock className="meta-icon" />
                            {callType.duration} min
                          </span>
                          <span className="price">
                            {callType.price}
                          </span>
                        </div>
                        <p className="call-type-description">{callType.description}</p>
                        <ul className="call-type-features">
                          {callType.features.map((feature, idx) => (
                            <li key={idx}>
                              <HiOutlineCheckCircle className="feature-icon" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Date Selection */}
              {step === "date" && (
                <div className="step-content">
                  <h3 className="step-title">Select Date</h3>
                  <p className="step-description">
                    Choose a day that works for you
                  </p>
                  
                  <div className="date-grid">
                    {availableSlots.map((slot) => (
                      <div 
                        key={slot.id}
                        className={`date-card ${selectedDate?.toDateString() === slot.date.toDateString() ? 'selected' : ''}`}
                        onClick={() => setSelectedDate(slot.date)}
                      >
                        <div className="date-day">{slot.day}</div>
                        <div className="date-number">
                          {slot.date.getDate()}
                        </div>
                        <div className="date-month">
                          {slot.date.toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                        <div className="slot-count">
                          <FiClock className="count-icon" />
                          {slot.times.length} slots
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Time Selection */}
              {step === "time" && selectedDate && (
                <div className="step-content">
                  <h3 className="step-title">Select Time</h3>
                  <p className="step-description">
                    Choose your preferred time slot for {selectedDate.toLocaleDateString()}
                  </p>
                  
                  <div className="time-grid">
                    {filteredSlots?.times.map((time, index) => (
                      <div 
                        key={index}
                        className={`time-card ${selectedTime === time ? 'selected' : ''}`}
                        onClick={() => setSelectedTime(time)}
                      >
                        <div className="time-display">{time}</div>
                        <div className="time-zone">WAT</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: User Details */}
              {step === "details" && (
                <div className="step-content">
                  <h3 className="step-title">Your Details</h3>
                  <p className="step-description">
                    Enter your information to confirm the booking
                  </p>
                  
                  <div className="details-form">
                    <div className="form-group">
                      <label className="form-label">
                        <HiOutlineUser className="label-icon" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={userDetails.name}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">
                        <HiOutlineMail className="label-icon" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={userDetails.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">
                        <HiOutlinePhone className="label-icon" />
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={userDetails.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">
                        <HiOutlineChat className="label-icon" />
                        Notes (Optional)
                      </label>
                      <textarea
                        name="notes"
                        value={userDetails.notes}
                        onChange={handleInputChange}
                        className="form-textarea"
                        placeholder="Any specific topics you'd like to discuss?"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Confirmation */}
              {step === "confirm" && (
                <div className="step-content">
                  <h3 className="step-title">Confirm Booking</h3>
                  <p className="step-description">
                    Review your booking details before confirming
                  </p>
                  
                  <div className="booking-review">
                    <div className="review-card">
                      <div className="review-section">
                        <h4>Call Details</h4>
                        <div className="review-item">
                          <span className="review-label">Type:</span>
                          <span className="review-value">{callTypeDetails?.title}</span>
                        </div>
                        <div className="review-item">
                          <span className="review-label">Duration:</span>
                          <span className="review-value">{callTypeDetails?.duration} minutes</span>
                        </div>
                        <div className="review-item">
                          <span className="review-label">Price:</span>
                          <span className="review-value">{callTypeDetails?.price}</span>
                        </div>
                      </div>
                      
                      <div className="review-section">
                        <h4>Schedule</h4>
                        <div className="review-item">
                          <span className="review-label">Date:</span>
                          <span className="review-value">{selectedDate?.toLocaleDateString()}</span>
                        </div>
                        <div className="review-item">
                          <span className="review-label">Time:</span>
                          <span className="review-value">{selectedTime} (WAT)</span>
                        </div>
                      </div>
                      
                      <div className="review-section">
                        <h4>Your Information</h4>
                        <div className="review-item">
                          <span className="review-label">Name:</span>
                          <span className="review-value">{userDetails.name}</span>
                        </div>
                        <div className="review-item">
                          <span className="review-label">Email:</span>
                          <span className="review-value">{userDetails.email}</span>
                        </div>
                        {userDetails.phone && (
                          <div className="review-item">
                            <span className="review-label">Phone:</span>
                            <span className="review-value">{userDetails.phone}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Modal Footer */}
          <div className="modal-footer">
            {!isBookingConfirmed && (
              <>
                <button 
                  className="modal-button secondary"
                  onClick={step === "type" ? onClose : handlePrevStep}
                  disabled={isSubmitting}
                >
                  {step === "type" ? "Cancel" : "Back"}
                </button>
                
                <button 
                  className="modal-button primary"
                  onClick={handleNextStep}
                  disabled={
                    (step === "type" && !selectedCallType) ||
                    (step === "date" && !selectedDate) ||
                    (step === "time" && !selectedTime) ||
                    (step === "details" && (!userDetails.name || !userDetails.email)) ||
                    isSubmitting
                  }
                >
                  {isSubmitting ? (
                    <span className="loading">Processing...</span>
                  ) : step === "details" ? (
                    "Confirm Booking"
                  ) : (
                    <>
                      Next
                      <HiOutlineArrowRight className="button-icon" />
                    </>
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}