import React from "react";

function StepThree({ formData, handleInputChange, handlePreviousStep, handleNextStep, currentStep }) {
    return (
        <div className="multisteps-form__panel js-active" data-animation="slideHorz">
            <div className="wizard-forms section-padding">
                <div className="inner pb-500 clearfix">
                    <div className="wizard-title text-center">
                        <h3>Adresse og juridisk informasjon</h3>
                    </div>
                    <div className="wizard-form-field mb-85">
                        {/* Gjeldende adresse section */}
                        <div className="wizard-title text-center mt-5">
                            <p>Gjeldende adresse</p>
                        </div>
                        <div className="row">
                            <div className="col-md-12 wizard-form-input">
                                <label>Gateadresse</label>
                                <input
                                    type="text"
                                    name="current_street_address"
                                    value={formData.current_street_address}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 wizard-form-input">
                                <label>Sted</label>
                                <input
                                    type="text"
                                    name="current_city"
                                    value={formData.current_city}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-md-6 wizard-form-input">
                                <label>Postnummer</label>
                                <input
                                    type="text"
                                    name="current_postal_code"
                                    value={formData.current_postal_code}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 wizard-form-input">
                                <label>Land</label>
                                <select
                                    name="current_country"
                                    value={formData.current_country}
                                    onChange={handleInputChange}
                                >
                                    <option value="Norge">Norge</option>
                                    <option value="Sverige">Sverige</option>
                                    <option value="Danmark">Danmark</option>
                                    <option value="Finland">Finland</option>
                                </select>
                            </div>
                        </div>

                        {/* Permanent adresse section */}
                        <div className="wizard-title text-center mt-5">
                            <p>Permanent adresse</p>
                        </div>
                        <div className="row">
                            <div className="col-md-12 wizard-form-input">
                                <label>Gateadresse</label>
                                <input
                                    type="text"
                                    name="permanent_street_address"
                                    value={formData.permanent_street_address}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 wizard-form-input">
                                <label>Sted</label>
                                <input
                                    type="text"
                                    name="permanent_city"
                                    value={formData.permanent_city}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-md-6 wizard-form-input">
                                <label>Postnummer</label>
                                <input
                                    type="text"
                                    name="permanent_postal_code"
                                    value={formData.permanent_postal_code}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 wizard-form-input">
                                <label>Land</label>
                                <select
                                    name="permanent_country"
                                    value={formData.permanent_country}
                                    onChange={handleInputChange}
                                >
                                    <option value="Norge">Norge</option>
                                    <option value="Sverige">Sverige</option>
                                    <option value="Danmark">Danmark</option>
                                    <option value="Finland">Finland</option>
                                </select>
                            </div>
                        </div>

                        <div className="wizard-form-input">
                            <label>Personnummer</label>
                            <input
                                type="text"
                                name="personal_number"
                                value={formData.personal_number}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="wizard-form-input">
                            <label>Førerkortnummer</label>
                            <input
                                type="text"
                                name="license_number"
                                value={formData.license_number}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="vector-img-one">
                    <img src={'/assets/img/vb3.png'} alt="" />
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

export default StepThree;
