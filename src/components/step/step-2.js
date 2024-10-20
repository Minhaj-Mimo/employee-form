import React from "react";

function StepTwo({ formData, handleInputChange, errors, handlePreviousStep, handleNextStep, currentStep }) {
    return (
        <div className="multisteps-form__panel js-active" data-animation="slideHorz">
            <div className="wizard-forms">
                <div className="inner pb-100 clearfix mb-85">
                    <div className="wizard-title text-center">
                        <h3>Arbeidsinformasjon</h3>
                    </div>
                    <div className="wizard-form-field mb-85">
                        <div className="wizard-form-input">
                            <label>Stillingstittel <span className="required-star">*</span> {/* Red star with CSS class */}</label>
                            <input
                                type="text"
                                name="job_title"
                                value={formData.job_title}  // Set the value from formData
                                onChange={handleInputChange} // Use handleInputChange to track the value
                            />
                            {errors.job_title && <p className="error">{errors.job_title}</p>} {/* Display error */}
                        </div>
                        <div className="wizard-form-input select-option-area">
                            <label>Avdeling</label>
                            <select
                                name="department"
                                value={formData.department}  // Set the value from formData
                                onChange={handleInputChange} // Use handleInputChange to track the value
                            >
                                <option value="">Velg en avdeling</option>  {/* Default option */}
                                <option value="Divisjon for sikkerhetsklær">Divisjon for sikkerhetsklær</option>
                                <option value="Avdeling for personlig verneutstyr">Avdeling for personlig verneutstyr</option>
                                <option value="Forskning og utvikling">Forskning og utvikling</option>
                                <option value="Avdeling for IT-løsninger">Avdeling for IT-løsninger</option>
                                <option value="Logistikk og forsyningskjede">Logistikk og forsyningskjede</option>
                                <option value="Kvalitetssikring">Kvalitetssikring</option>
                                <option value="Human Resources">Human Resources</option>
                                <option value="Markedsføring og kommunikasjon">Markedsføring og kommunikasjon</option>
                                <option value="Salg og kundeservice">Salg og kundeservice</option>
                                <option value="Bærekraft og etterlevelse">Bærekraft og etterlevelse</option>
                            </select>
                        </div>

                        <div className="wizard-form-input">
                            <label>Direkte veileder</label>
                            <input
                                type="text"
                                name="direct_supervisor"
                                value={formData.direct_supervisor}  // Set the value from formData
                                onChange={handleInputChange} // Use handleInputChange to track the value
                            />
                        </div>
                        <div className="wizard-form-input">
                            <label>Tilmeldingsdato <span className="required-star">*</span> {/* Red star with CSS class */}</label>
                            <input
                                type="date"
                                name="joining_date"
                                value={formData.joining_date}  // Set the value from formData
                                onChange={handleInputChange} // Use handleInputChange to track the value
                            />
                            {errors.joining_date && <p className="error">{errors.joining_date}</p>} {/* Display error */}
                        </div>
                        <div className="wizard-form-input select-option-area">
                            <label>Ansettelsestype</label>
                            <select
                                name="employment_type"
                                value={formData.employment_type}  // Set the value from formData
                                onChange={handleInputChange} // Use handleInputChange to track the value
                            >
                                <option value="">Velg en ansettelsestype</option>  {/* Default option */}
                                <option value="Heltid">Heltid</option>
                                <option value="Deltid">Deltid</option>
                                <option value="Praksisplass">Praksisplass</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="vector-img-one">
                    <img src={'/assets/img/vb2.png'} alt="" />
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

export default StepTwo;
