import React, { useEffect, useRef } from "react";

function StepFive({ formData, handleInputChange, handleSubmit, handlePreviousStep, currentStep }) {
    const ref_input = useRef(null);

    useEffect(() => {
        const input = ref_input.current;

        const handleChange = () => {
            handleInputChange({
                target: {
                    name: input.name,
                    checked: input.checked,
                    type: input.type
                }
            });
        };

        // Add event listener
        if (input) {
            input.addEventListener("change", handleChange);
        }

        // Cleanup the event listener
        return () => {
            if (input) {
                input.removeEventListener("change", handleChange);
            }
        };
    }, [handleInputChange]);

    return (
        <div className="multisteps-form__panel js-active" data-animation="slideHorz">
            <div className="wizard-forms">
                <div className="inner pb-100 clearfix mb-85">
                    <div className="wizard-title text-center">
                        <h3>Bekreftelse og samtykker</h3>
                    </div>
                    <div className="wizard-form-field mb-85" style={{ display: 'flex', flexDirection: 'column' }}>
                        
                        <p style={{ marginBottom: '20px' }}>  {/* Increased bottom margin for better spacing */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at consectetur ante, et consequat lectus. Etiam sapien urna, 
                        volutpat ut luctus vel, semper nec dui. Vivamus et consequat ipsum. Nullam molestie metus ac nisl 
                        ullamcorper, in ornare sapien porta. Integer et leo turpis. Proin aliquet, mauris sed vehicula gravida,
                         dolor lectus varius ligula, sed pellentesque justo lacus ullamcorper ante. Donec iaculis quam at 
                         turpis porta viverra. Curabitur interdum augue porttitor, fermentum turpis vitae, suscipit lorem. 
                         Proin pellentesque, dolor hendrerit pulvinar accumsan, justo nisl luctus leo, scelerisque auctor 
                         purus felis a diam. In dignissim, quam quis bibendum semper, est libero venenatis nulla, eget mollis 
                         eros lacus sit amet risus.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        
                        <input
                            ref={ref_input}
                            type="checkbox"
                            id="consentCheckbox"
                            name="consentGiven"
                            defaultChecked={formData.consentGiven || false}  // Default to false if undefined
                            style={{ transform: "scale(1.5)", marginRight: "10px" }}
                        />
                        <label htmlFor="consentCheckbox" style={{ fontSize: '16px', margin: '0' }}>
                            I consent to the processing of my personal data as described in the Privacy Policy.
                        </label>
                        
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <button type="button" onClick={handlePreviousStep} disabled={currentStep === 1}>
                        Previous
                    </button>
                    <button type="button" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StepFive;
