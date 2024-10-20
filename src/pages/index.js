import React, { useState } from 'react';
import Step1 from '../components/step/step-1';
import Step2 from '../components/step/step-2';
import Step3 from '../components/step/step-3';
import Step4 from '../components/step/step-4';
import Step5 from '../components/step/step-5';
import Thanks from '../components/step/thanks';
import { db, collection, addDoc } from "../firebase";

// Define initial form state
const initialFormState = {
  // Step 1: Personal Information
  name: '',
  birth_date: '',
  phone: '',
  email: '',
  emergency_contact_name: '',
  emergency_contact_relationship: '',
  emergency_contact_phone: '',

  // Step 2: Work Information
  job_title: '',
  department: '',
  direct_supervisor: '',
  joining_date: '',
  employment_type: '',

  // Step 3: Address and Legal Information
  street_address_current: '',
  city_current: '',
  postal_code_current: '',
  country_current: 'Norge', // default
  street_address_permanent: '',
  city_permanent: '',
  postal_code_permanent: '',
  country_permanent: 'Norge', // default
  driver_license_number: '',

  // Step 4: Financial Information
  bank_name: '',
  account_number: '',
  routing_number: '',
  salary_amount: '',

  // Step 5: Consent and Submission
  consentGiven: false
};

export default function MyApp() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({ name: '', email: '' });
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear the error message when the user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const handleNextStep = (val) => {
    let newErrors = { name: '', email: '' };

    // Validation errors for Step 1
    if (currentStep === 1) {
      if (!formData.name) {
        newErrors.name = 'Fullt navn er påkrevd.';
      }
      if (!formData.email) {
        newErrors.email = 'E-postadresse er påkrevd.';
      }
      if (!formData.birth_date) {
        newErrors.birth_date = 'Fødselsdato er påkrevd.';
      }
      if (!formData.phone) {
        newErrors.phone = 'Primært telefonnummer er påkrevd.';
      }
    }
    // Validation errors for Step 2
    if (currentStep === 2) {
      if (!formData.job_title) {
        newErrors.job_title = 'Stillingstittel er påkrevd.';
      }
      if (!formData.joining_date) {
        newErrors.joining_date = 'Tilmeldingsdato er påkrevd.';
      }
    }
    // Validation errors for Step 4
    if (currentStep === 4) {
      if (!formData.bank_name) {
        newErrors.bank_name = 'Bankens navn er påkrevd.';
      }
      if (!formData.account_number) {
        newErrors.account_number = 'Kontonummer er påkrevd.';
      }
    }
    if (newErrors.name || newErrors.email || newErrors.birth_date || newErrors.phone || newErrors.job_title
      || newErrors.joining_date || newErrors.bank_name || newErrors.account_number) {
      setErrors(newErrors);
      return; // Prevent moving to the next step
    }
    // Proceed to the next step if no errors
    setCurrentStep(val);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleSubmit = async () => {
    if (!formData.consentGiven) {
      alert("Du må samtykke for å fortsette.");
      return;
    }

    try {
      const doc = await addDoc(collection(db, "employees"), formData);
      console.log("Document written with ID: ", doc.id);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          birth_date: formData.birth_date,
          job_title: formData.job_title,
          joining_date: formData.joining_date,
          bank_name: formData.bank_name,
          account_number: formData.account_number,
        })
      });

      if (!response.ok) {
        alert("Kunne ikke sende e-post");
        throw new Error('Failed to send email');
      }

      // Reset form data by setting it to the initial form state
      setFormData(initialFormState);
      setCurrentStep(6); // Redirect to the thanks page
    } catch (err) {
      console.error("Error", err);
    }
  };



  return (
    <div>
      <div className="wrapper wizard d-flex clearfix multisteps-form">

        <div className="steps order-2 position-relative w-25">
          <div className="multisteps-form__progress">
            <span className={`multisteps-form__progress-btn ${currentStep === 1 ? 'js-active' : ''}`} title="Personlige detaljer">
              <i className="far fa-user"></i><span>Personlige detaljer</span>
            </span>
            <span className={`multisteps-form__progress-btn ${currentStep === 2 ? 'js-active' : ''}`} title="Arbeidsinformasjon">
              <i className="far fa-user"></i><span>Arbeidsinformasjon</span>
            </span>
            <span className={`multisteps-form__progress-btn ${currentStep === 3 ? 'js-active' : ''}`} title="Adresse">
              <i className="far fa-user"></i><span>Adresse</span>
            </span>
            <span className={`multisteps-form__progress-btn ${currentStep === 4 ? 'js-active' : ''}`} title="Finansiell informasjon">
              <i className="far fa-user"></i><span>Finansiell informasjon</span>
            </span>
            <span className={`multisteps-form__progress-btn ${currentStep === 5 ? 'js-active' : ''}`} title="Bekreftelse og samtykker">
              <i className="far fa-user"></i><span>Bekreftelse og samtykker</span>
            </span>
          </div>
        </div>

        <form className="multisteps-form__form w-75 order-1" action="#" id="wizard" style={{ height: '1250px' }}>
          <div className="form-area position-relative">
            {currentStep === 1 && (
              <Step1
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
                handlePreviousStep={handlePreviousStep}
                handleNextStep={handleNextStep}
                currentStep={currentStep}
              />
            )}
            {currentStep === 2 && (
              <Step2
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
                handlePreviousStep={handlePreviousStep}
                handleNextStep={handleNextStep}
                currentStep={currentStep}
              />
            )}
            {currentStep === 3 && (
              <Step3
                formData={formData}
                handleInputChange={handleInputChange}
                handlePreviousStep={handlePreviousStep}
                handleNextStep={handleNextStep}
                currentStep={currentStep}
              />
            )}
            {currentStep === 4 && (
              <Step4
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
                handlePreviousStep={handlePreviousStep}
                handleNextStep={handleNextStep}
                currentStep={currentStep}
              />
            )}
            {currentStep === 5 && (
              <Step5
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                handlePreviousStep={handlePreviousStep}
                handleNextStep={handleNextStep}
                currentStep={currentStep}
              />
            )}
            {currentStep === 6 && (
              <Thanks />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
