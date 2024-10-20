import React from "react";

function StepFour({ formData, handleInputChange, errors, handlePreviousStep, handleNextStep, currentStep }) {
    return (
        <div className="multisteps-form__panel js-active" data-animation="slideHorz">
            <div className="wizard-forms">
                <div className="inner pb-100 clearfix mb-85">
                    <div className="wizard-title text-center">
                        <h3>Finansiell informasjon</h3>
                    </div>
                    <div className="wizard-form-field mb-85">
                        <div className="wizard-form-input">
                            <label>
                                Bankens navn <span className="required-star">*</span> {/* Red star with CSS class */}
                            </label>
                            <input
                                type="text"
                                name="bank_name"
                                value={formData.bank_name}
                                onChange={handleInputChange}
                            />
                            {errors.bank_name && <p className="error">{errors.bank_name}</p>} {/* Display error */}
                        </div>

                        <div className="wizard-form-input">
                            <label>Kontonummer <span className="required-star">*</span> {/* Red star with CSS class */}</label>
                            <input
                                type="text"
                                name="account_number"
                                value={formData.account_number}
                                onChange={handleInputChange}
                            />
                            {errors.account_number && <p className="error">{errors.account_number}</p>} {/* Display error */}
                        </div>
                        <div className="wizard-form-input">
                            <label>Rutingnummer</label>
                            <input
                                type="text"
                                name="routing_number"
                                value={formData.routing_number}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="wizard-form-input">
                            <label>Lønnsbeløp</label>
                            <input
                                type="text"
                                name="salary_amount"
                                value={formData.salary_amount}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="vector-img-one">
                    <img src={'/assets/img/vb4.png'} alt="" />
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

export default StepFour;
