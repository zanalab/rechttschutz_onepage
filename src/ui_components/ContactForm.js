import React, { useState, useRef } from 'react';
import { generateICS } from '@/utils/ics_generator';
import { TbMailCheck } from 'react-icons/tb';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [showDialog, setShowDialog] = useState(false);
  const [callbackRequested, setCallbackRequested] = useState(false);
  const [errors, setErrors] = useState({});

  // State for dialog fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const validateForm = () => {
    const newErrors = {};

    const formElements = document.forms[0].elements;

    const nameElement = formElements.namedItem('name');
    if (!nameElement || !nameElement.value) {
      newErrors.name = 'Name is required.';
    }

    const emailElement = formElements.namedItem('email');
    if (!emailElement || !emailElement.value) {
      newErrors.email = 'Email is required.';
    }

    if (callbackRequested && !date) {
      newErrors.date = 'Date is required for callback.';
    }

    if (callbackRequested && !time) {
      newErrors.time = 'Time is required for callback.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Calculate today's date to set as the min value for the date input
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formElements = document.forms[0].elements;
  
    const formData = {
      name: formElements.namedItem('name').value,
      email: formElements.namedItem('email').value,
      telephone: formElements.namedItem('telephone')?.value,
      message: formElements.namedItem('message')?.value,
      callback: callbackRequested,
    };
  
    // If callbackRequested is true, also send date and time
    if (callbackRequested) {
      formData.date = date;
      formData.time = time;
  
      const [year, month, day] = date.split('-').map(Number);
      const [hour, minute] = time.split(':').map(Number);
  
      generateICS({
        start: [year, month, day, hour, minute],
        duration: { hours: 1 }, // you can adjust the duration as needed
        title: 'Callback from Your Company Name',
        description: 'We will call you back at this time.',
      })
      .then(icsContent => {
        // Trigger the download of the Blob as an ICS file
        const blob = new Blob([icsContent], { type: 'text/calendar' });
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'callback.ics';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      })
      .catch(error => {
        console.error('Error generating ICS:', error);
      });
    }
  
    console.log(formData);
    setIsSubmitted(true);
  };
  

  return isSubmitted ? (
    <div class="flex w-full  bg-opacity-[15%] px-7 py-8  md:p-9">
      <div class="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center">
        <TbMailCheck
          size={150}
          color="#ffde59"
        />
      </div>
      <div class="w-full">
        <h5 class="mb-3 text-lg font-semibold text-dark">Nachricht erfolgreich gesendet</h5>
        <p class="text-sm font-normal leading-wide text-body-color">
          Danke, dass Sie uns kontaktiert haben, wir werden uns bald bei Ihnen melden.
        </p>
      </div>
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-brand-orange focus-visible:shadow-none"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>
      <div className="mb-6">
        <input
          name="email"
          type="email"
          placeholder="Email Adresse"
          className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-brand-orange focus-visible:shadow-none"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="telephone"
          placeholder="Telefonnummer"
          className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-brand-orange focus-visible:shadow-none"
        />
      </div>
      <div className="mb-6">
        <textarea
          rows="6"
          name="message"
          placeholder="Geben Sie hier Ihre Nachricht ein..."
          className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-brand-orange focus-visible:shadow-none"
        ></textarea>
      </div>

      <div className="mb-6">
        <label className="flex items-center">
          <input
            className="mr-4"
            type="checkbox"
            checked={callbackRequested}
            onChange={(e) => {
              setCallbackRequested(e.target.checked);
              setShowDialog(e.target.checked);
            }}
          />
          Rufen Sie mich zurück
        </label>
      </div>

      {showDialog && (
        <div className="mb-6">
          <div className="mb-2">
            <label>
              Date:
              <input
                type="date"
                value={date}
                // Preventing past dates
                min={today}
                onChange={(e) => setDate(e.target.value)}
                className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-brand-orange focus-visible:shadow-none"
              />
              {errors.date && <p className="text-red-500">{errors.date}</p>}
            </label>
          </div>
          <div className="mb-2">
            <label>
              Time:
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-brand-orange focus-visible:shadow-none"
              />
              {errors.time && <p className="text-red-500">{errors.time}</p>}
            </label>
          </div>
        </div>
      )}

      <div>
        <button
          type="submit"
          class="w-full rounded border border-brand-orange bg-brand-orange font-semibold py-3 text-dark transition hover:bg-opacity-90"
        >
          Jetzt absenden!
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
