import React, { useState } from 'react'
import NavBar from '@/components/NavBar';
import '../App.css';
import '@/assets/styles/Appointments.css'
import therapistAnimation from '@/assets/img/therapist-animation.gif';

const Appointments = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sessionType: '',
    date: '',
    time: ''
  });

  const sessionTypes = [
    { value: '', label: 'Selecciona un tipo de sesión' },
    { value: 'primera-consulta', label: 'Primera Consulta' },
    { value: 'terapia-individual', label: 'Terapia Individual' },
    { value: 'terapia-pareja', label: 'Terapia de Pareja' },
    { value: 'evaluacion', label: 'Evaluación Psicológica' }
  ];

  const availableTimes = [
    { value: '', label: 'Selecciona una hora' },
    { value: '8:00 AM', label: '8:00 AM' },
    { value: '9:00 AM', label: '9:00 AM' },
    { value: '10:00 AM', label: '10:00 AM' },
    { value: '11:00 AM', label: '11:00 AM' },
    { value: '2:00 PM', label: '2:00 PM' },
    { value: '3:00 PM', label: '3:00 PM' },
    { value: '4:00 PM', label: '4:00 PM' },
    { value: '5:00 PM', label: '5:00 PM' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the session type for display
    const sessionTypeLabel = sessionTypes.find(type => type.value === formData.sessionType)?.label || '';

    // Create email content
    const subject = encodeURIComponent(`Nueva solicitud de cita - ${formData.name}`);
    const body = encodeURIComponent(
      `Nueva solicitud de cita:\n\n` +
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Tipo de Sesión: ${sessionTypeLabel}\n` +
      `Fecha Deseada: ${formData.date}\n` +
      `Hora Deseada: ${formData.time}\n\n` +
      `Por favor, confirma la disponibilidad respondiendo a este correo.`
    );

    // Open email client
    window.location.href = `mailto:tatiana@example.com?subject=${subject}&body=${body}`;

    // Optional: Show confirmation message
    alert('Tu solicitud ha sido enviada. Te contactaremos pronto para confirmar tu cita.');

    // Reset form
    setFormData({
      name: '',
      email: '',
      sessionType: '',
      date: '',
      time: ''
    });
  };

  // Get today's date for the date input minimum
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className='main-container'>
      <NavBar/>
      <div className='layout'>
        {[...Array(5)].map((_, i) => (
          <div key={i} className='leaf'>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50 5 Q45 20 50 35 Q40 45 35 60 Q30 75 35 85 Q40 90 50 95 Q60 90 65 85 Q70 75 65 60 Q60 45 50 35 Q55 20 50 5"
                fill={i % 2 === 0 ? '#2d5a2d' : '#4a7c4a'}
              />
              <line x1="50" y1="5" x2="50" y2="95" stroke="#1a3d1a" strokeWidth="2" />
              <line x1="50" y1="35" x2="40" y2="45" stroke="#1a3d1a" strokeWidth="1" />
              <line x1="50" y1="35" x2="60" y2="45" stroke="#1a3d1a" strokeWidth="1" />
              <line x1="50" y1="60" x2="42" y2="70" stroke="#1a3d1a" strokeWidth="1" />
              <line x1="50" y1="60" x2="58" y2="70" stroke="#1a3d1a" strokeWidth="1" />
            </svg>
          </div>
        ))}

        <div className='content appointment-content'>
          {/* Left side - Form */}
          <div className='appointment-form-section'>
            <div className='appointment-form-container'>
              <h1 className='header appointment-header'>Reserva tu Cita</h1>
              <p className='appointment-subtitle'>
                Completa el formulario y te contactaremos para confirmar tu cita.
              </p>

              <form className='appointment-form' onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='name'>Nombre completo *</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder='Tu nombre completo'
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='email'>Correo electrónico *</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder='tu@email.com'
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='sessionType'>Tipo de sesión *</label>
                  <select
                    id='sessionType'
                    name='sessionType'
                    value={formData.sessionType}
                    onChange={handleChange}
                    required
                  >
                    {sessionTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className='form-group'>
                  <label htmlFor='date'>Fecha deseada *</label>
                  <input
                    type='date'
                    id='date'
                    name='date'
                    value={formData.date}
                    onChange={handleChange}
                    min={today}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='time'>Hora preferida *</label>
                  <select
                    id='time'
                    name='time'
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    {availableTimes.map(time => (
                      <option key={time.value} value={time.value}>
                        {time.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button type='submit' className='btn-primary appointment-submit'>
                  Solicitar Cita
                </button>
              </form>

            </div>
          </div>

          <div className='appointment-animation-section'>
            <img
              src={therapistAnimation}
              alt="Terapia animación"
              className='therapist-animation'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointments
