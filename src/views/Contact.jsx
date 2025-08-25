import React from 'react'
import NavBar from '../components/NavBar';
import '../App.css';
import '@/assets/styles/Contact.css'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Create mailto link
    const subject = encodeURIComponent(data.subject || 'Consulta desde la web');
    const body = encodeURIComponent(
      `Nombre: ${data.name}\nEmail: ${data.email}\nTeléfono: ${data.phone || 'No proporcionado'}\n\nMensaje:\n${data.message}`
    );

    window.location.href = `mailto:tatiana101sas@gmail.com?subject=${subject}&body=${body}`;
  };

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

        <div className='content contact-content'>
          {/* Left side - Contact Form */}
          <div className='contact-form-section'>
            <h1 className='header contact-header'>Contáctame</h1>
            <p className='contact-subtitle'>
              ¿Tienes alguna pregunta o te gustaría agendar una sesión?
              Completa el formulario y me pondré en contacto contigo pronto.
            </p>

            <form className='contact-form' onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Nombre completo *</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  placeholder='Tu nombre'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='email'>Correo electrónico *</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  placeholder='tu@email.com'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='phone'>Teléfono</label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  placeholder='+57 300 123 4567'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='subject'>Asunto</label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  placeholder='¿En qué puedo ayudarte?'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='message'>Mensaje *</label>
                <textarea
                  id='message'
                  name='message'
                  rows='5'
                  required
                  placeholder='Cuéntame más sobre lo que necesitas...'
                ></textarea>
              </div>

              <button type='submit' className='btn-primary contact-submit'>
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Right side - Contact Information */}
          <div className='contact-info-section'>
            <div className='contact-info-content'>
              <h2 className='info-header'>Información de contacto</h2>
              <p className='info-text'>
                También puedes contactarme directamente a través de estos medios:
              </p>

              <div className='contact-info-item'>
                <svg className='contact-icon' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:tatiana101sas@gmail.com">tatiana101sas@gmail.com</a>
                </div>
              </div>

              <div className='contact-info-item'>
                <svg className='contact-icon' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H8.37C8.56769 3.00005 8.76102 3.05603 8.92718 3.16107C9.09333 3.26612 9.22536 3.41551 9.308 3.591L10.826 7.001C10.9048 7.16831 10.9378 7.35339 10.9215 7.53811C10.9051 7.72282 10.84 7.90063 10.733 8.053L9.208 10.253C9.095 10.415 9.035 10.61 9.046 10.81C9.274 14.93 12.072 17.728 16.192 17.956C16.392 17.966 16.586 17.907 16.748 17.794L18.948 16.269C19.1003 16.1618 19.2781 16.0966 19.4628 16.0801C19.6476 16.0636 19.8328 16.0966 20.001 16.176L23.411 17.694C23.5865 17.7766 23.7359 17.9086 23.8409 18.0747C23.946 18.2409 24.0021 18.4344 24.002 18.632V21C24.002 21.5304 23.7913 22.0391 23.4162 22.4142C23.0411 22.7893 22.5324 23 22.002 23H20.002C10.612 23 3 15.388 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <h3>Teléfono</h3>
                  <a href="tel:+573126256538">+57 3126256538</a>
                </div>
              </div>

              <div className='contact-info-item'>
                <svg className='contact-icon' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <h3>LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/tatiana-loaiza-valencia-672591187/?trk=opento_sprofile_goalscard" target="_blank" rel="noopener noreferrer">
                    /in/tatiana-loaiza
                  </a>
                </div>
              </div>

              <div className='contact-hours'>
                <h3>Horarios de atención</h3>
                <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                <p>Sábados: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
