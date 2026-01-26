"use client";

import { useEffect } from "react";
import ContactForm from "@/components/ContactForm/ContactForm";
import ScheduleModal from "@/components/ScheduleModal/ScheduleModal";
import "./contact.css";
import { 
  HiOutlineMail, 
  HiOutlinePhone, 
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineOfficeBuilding,
  HiOutlineArrowRight,
  HiOutlineChatAlt2,
  HiOutlineGlobe,
  HiOutlineCalendar,
  HiOutlineVideoCamera
} from "react-icons/hi";
import { 
  FiCheckCircle,
  FiCalendar,
  FiClock
} from "react-icons/fi";
import { 
  MdCheckCircle,
  MdAccessTime
} from "react-icons/md";
import { useState } from "react";

export default function ContactPage() {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Handle hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="contact-page loading">Loading...</div>;
  }
  
  const availableSlots = [
    { 
      id: 1, 
      day: "Today", 
      date: new Date(), 
      times: ["14:00", "16:30"],
      available: true 
    },
    { 
      id: 2, 
      day: "Tomorrow", 
      date: new Date(Date.now() + 86400000), 
      times: ["10:00", "15:00", "17:00"],
      available: true 
    },
    { 
      id: 3, 
      day: "Day After", 
      date: new Date(Date.now() + 172800000), 
      times: ["11:00", "14:00", "16:00"],
      available: true 
    }
  ];

  const callTypes = [
    {
      id: "discovery",
      icon: <HiOutlineChatAlt2 />,
      title: "Discovery Call",
      duration: 15,
      price: "Free",
      description: "Quick chat to discuss your project needs",
      features: ["Project discussion", "Initial consultation", "Q&A session"]
    },
    {
      id: "strategy",
      icon: <HiOutlineVideoCamera />,
      title: "Strategy Session",
      duration: 30,
      price: "Free",
      description: "Deep dive into your project requirements",
      features: ["Detailed planning", "Technical review", "Project roadmap"],
      popular: true
    },
    {
      id: "review",
      icon: <HiOutlineOfficeBuilding />,
      title: "In-depth Review",
      duration: 60,
      price: "Custom",
      description: "Comprehensive analysis of existing systems",
      features: ["Deep dive analysis", "Architecture review", "Team collaboration"]
    }
  ];

  return (
    <>
      <section className="contact-page">
        <div className="contact-container">
          {/* Header Section */}
          <div className="contact-header">
            <div className="header-badge">
              <HiOutlineChatAlt2 className="header-badge-icon" />
              <span>Schedule a Call</span>
            </div>
            <h1 className="page-title">
              Let's <span className="highlight">Connect</span>
            </h1>
            <p className="page-subtitle">
              Book a call directly or send a message. Choose what works best for you.
            </p>
          </div>

          <div className="contact-layout">
            {/* Left Column - Contact Information */}
            <div className="contact-info-wrapper">
              <div className="contact-info">
                {/* Main Info Card */}
                <div className="info-card">
                  <div className="info-card-header">
                    <div className="info-card-icon">
                      <HiOutlineVideoCamera className="icon" />
                    </div>
                    <div>
                      <h2 className="info-title">Schedule a Call</h2>
                      <p className="info-tagline">Book your perfect time slot</p>
                    </div>
                  </div>

                  <p className="info-description">
                    Choose from available time slots that fit your schedule. 
                    All calls include video conferencing and screen sharing.
                  </p>

                  {/* Quick Booking Preview */}
                  <div className="quick-booking-preview">
                    <div className="quick-booking-header">
                      <FiCalendar className="quick-booking-icon" />
                      <h4>Quick Book This Week</h4>
                    </div>
                    <div className="time-slots-preview">
                      {availableSlots.map((slot) => (
                        <div key={slot.id} className="time-slot-preview">
                          <div className="slot-day">
                            <span className="day-name">{slot.day}</span>
                            <span className="slot-count">{slot.times.length} slots</span>
                          </div>
                          <div className="slot-times-preview">
                            {slot.times.map((time, idx) => (
                              <span key={idx} className="time-badge">
                                {time}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="info-cta">
                    <button 
                      className="cta-button primary"
                      onClick={() => setIsScheduleModalOpen(true)}
                    >
                      <HiOutlineCalendar className="cta-icon" />
                      Schedule a Call
                    </button>
                    
                    <button 
                      className="cta-button secondary"
                      onClick={() => window.open('https://meet.google.com/new', '_blank')}
                    >
                      <HiOutlineVideoCamera className="cta-icon" />
                      Instant Google Meet
                    </button>
                  </div>
                </div>

                {/* Contact Details Card */}
                <div className="info-card">
                  <div className="info-card-header">
                    <div className="info-card-icon">
                      <HiOutlinePhone className="icon" />
                    </div>
                    <div>
                      <h2 className="info-title">Direct Contact</h2>
                      <p className="info-tagline">Get in touch instantly</p>
                    </div>
                  </div>

                  <div className="contact-details">
                    <div className="detail-item">
                      <div className="detail-icon email">
                        <HiOutlineMail className="detail-icon-svg" />
                      </div>
                      <div className="detail-content">
                        <span className="detail-label">Email Address</span>
                        <a href="mailto:bemioryisa@gmail.com" className="detail-value">
                          bemioryisa@gmail.com
                        </a>
                        <span className="detail-note">Typically replies within 4 hours</span>
                      </div>
                    </div>

                    <div className="detail-item">
                      <div className="detail-icon phone">
                        <HiOutlinePhone className="detail-icon-svg" />
                      </div>
                      <div className="detail-content">
                        <span className="detail-label">Phone & WhatsApp</span>
                        <a href="tel:+23424115768" className="detail-value">
                          +234 (912) 411-5768
                        </a>
                        <span className="detail-note">Available 9AM - 6PM WAT</span>
                      </div>
                    </div>

                    <div className="detail-item">
                      <div className="detail-icon location">
                        <HiOutlineLocationMarker className="detail-icon-svg" />
                      </div>
                      <div className="detail-content">
                        <span className="detail-label">Location & Timezone</span>
                        <span className="detail-value">Benue, Nigeria (WAT)</span>
                        <span className="detail-note">Remote & On-site projects</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="contact-form-wrapper">
              <div className="form-header">
                <h2 className="form-title">Send a Message</h2>
                <p className="form-subtitle">
                  Prefer to email? Fill out this form and I'll respond within 24 hours
                </p>
              </div>
              <ContactForm />
              
              {/* Form Footer */}
              <div className="form-footer">
                <div className="assurance-item">
                  <MdCheckCircle className="assurance-icon" />
                  <span>100% Response Guarantee</span>
                </div>
                <div className="assurance-item">
                  <FiCheckCircle className="assurance-icon" />
                  <span>No spam, ever</span>
                </div>
                <div className="assurance-item">
                  <MdAccessTime className="assurance-icon" />
                  <span>24-hour response time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-full-width">
            <div className="map-container">
              <div className="map-header">
                <HiOutlineGlobe className="map-icon" />
                <h3 className="map-title">Our Location</h3>
              </div>
              <div className="map-content">
                <div className="map-info">
                  <p className="map-description">
                    Based in the heart of Benue, Nigeria. Serving clients worldwide with remote development 
                    and consultation services.
                  </p>
                  <div className="map-details">
                <div className="map-box">
                  <iframe
                    src="https://maps.google.com/maps?q=Benue,Nigeria&z=8&output=embed"
                    loading="lazy"
                    title="Office Location Map"
                    allowFullScreen
                    className="map-iframe"
                  />
                  <div className="map-overlay">
                    <div className="map-marker">
                      <HiOutlineLocationMarker className="marker-icon" />
                    </div>
                  </div>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Modal */}
      <ScheduleModal 
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
        callTypes={callTypes}
        availableSlots={availableSlots}
      />
    </>
  );
}