import React from 'react'

function About() {
  return (
    <>
      <div className='container text-center mb-3' >
        <h1 className='mt-3'>🩺 Medicare Web Application – Project Summary</h1>
        <h4 className='mt-4'>🔍 Overview</h4>
        <pre style={{ fontSize: "1.1em", fontFamily: "'Times New Roman', Times, serif", textAlign: "justify", whiteSpace: "break-spaces" }}>
          The Medicare Web Application is a smart, AI-powered medical assistant designed to provide users with instant, personalized healthcare support. It combines text-based medical advice, voice-to-text interaction, and image recognition to diagnose and guide treatment for common health issues — especially skin-related conditions.
        </pre>


        <h4>💡Key Features</h4>
        <pre style={{ fontSize: "1.1em", fontFamily: "'Times New Roman', Times, serif", textAlign: "justify", whiteSpace: "break-spaces" }}>
          Text-Based Medical Guidance Users can type symptoms or health concerns and receive AI-generated responses including:<br></br><br></br>

          • Possible diagnosis<br></br><br></br>

          • Recommended treatments<br></br><br></br>

          • Medication suggestions<br></br><br></br>

          • Preventive care tips<br></br><br></br>

          • Voice-to-Text Interaction Enables hands-free usage for accessibility and convenience:<br></br><br></br>

          • Patients can speak their symptoms<br></br><br></br>

          • The app transcribes and processes the input<br></br><br></br>

          • Returns relevant advice in real-time<br></br><br></br>

          • Image Recognition for Skin Conditions Users can upload or capture images of skin problems (e.g., rashes, acne, infections).<br></br><br></br>
          --The system:<br></br><br></br>

          • Analyzes the image using AI models<br></br><br></br>

          • Identifies potential conditions<br></br><br></br>

          • Suggests treatment options and medications<br></br><br></br>

          • Flags serious cases for doctor referral.<br></br><br></br>
        </pre>


        <h4>🎯 Objectives</h4>
        <pre style={{ fontSize: "1.1em", fontFamily: "'Times New Roman', Times, serif", textAlign: "justify", whiteSpace: "break-spaces" }}>
          Provide accessible medical support for underserved or remote users,

          Reduce dependency on in-person consultations for minor issues,

          Empower users with early detection and self-care tools,

          Enhance trust through accurate, explainable AI responses.
        </pre>


        <h4>🏁 Conclusion</h4>
        <pre style={{ fontSize: "1.1em", fontFamily: "'Times New Roman', Times, serif", textAlign: "justify", whiteSpace: "break-spaces" }}>
        This Medicare Web Application bridges the gap between users and healthcare by offering instant, AI-driven medical support. With multimodal input (text, voice, image), it ensures accessibility, accuracy, and ease of use — making it a valuable tool for early diagnosis, treatment guidance, and health education.
        </pre>
      </div>
    </>
  )
}

export default About
