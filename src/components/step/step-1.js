import React from 'react';

function StepOne({ formData, handleInputChange, errors, handlePreviousStep, handleNextStep, currentStep }) {
    return (
        <div className="multisteps-form__panel js-active" data-animation="slideHorz">
            <div className="wizard-forms">
                <div className="inner clearfix">
                    <div className="wizard-title text-center">
                        <h3>Personlige detaljer</h3>
                    </div>
                    <div className="wizard-form-field mb-85">
                        <div className="wizard-form-input">
                            <label>Fullt navn <span className="required-star">*</span> {/* Red star with CSS class */}</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            {errors.name && <p className="error">{errors.name}</p>} {/* Display error */}
                        </div>
                        <div className="wizard-form-input">
                            <label>Fødselsdato <span className="required-star">*</span> {/* Red star with CSS class */}</label>
                            <input
                                type="date"
                                name="birth_date"
                                value={formData.birth_date}
                                onChange={handleInputChange}
                            />
                            {errors.birth_date && <p className="error">{errors.birth_date}</p>} {/* Display error */}
                        </div>
                        <div className="wizard-form-input">
                            <label>Primært telefonnummer <span className="required-star">*</span> {/* Red star with CSS class */}</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                            {errors.phone && <p className="error">{errors.phone}</p>} {/* Display error */}
                        </div>
                        <div className="wizard-form-input">
                            <label>E-postadresse <span className="required-star">*</span> {/* Red star with CSS class */}</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <p className="error">{errors.email}</p>} {/* Display error */}
                        </div>
                        <div className="wizard-form-input">
                            <div></div>
                        </div>
                        <div className="wizard-form-input">
                            <label>Navn på nødkontakt</label>
                            <input
                                type="text"
                                name="emergency_contact_name"
                                value={formData.emergency_contact_name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="wizard-form-input">
                            <label>Nødkontaktforhold</label>
                            <input
                                type="text"
                                name="emergency_contact_relationship"
                                value={formData.emergency_contact_relationship}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="wizard-form-input">
                            <label>Nødkontakt telefon</label>
                            <input
                                type="text"
                                name="emergency_contact_phone"
                                value={formData.emergency_contact_phone}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <button type="button" onClick={handlePreviousStep} disabled={currentStep === 1}>
                        Previous
                    </button>
                    <button type="button" onClick={() => handleNextStep(currentStep + 1)}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StepOne;
