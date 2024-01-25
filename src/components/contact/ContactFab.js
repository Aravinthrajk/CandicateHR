import React from 'react';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import { styled } from '@mui/system';

const ButtonWrapper = styled('div')({
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
});

const FabButton = styled(Fab)({
  margin: '0.5rem',
});

const ContactButtons = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '9566893366';
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, '_blank');
  };

  const handlePhoneClick = () => {
    const phoneNumber = '9566893366';
    const phoneURL = `tel:${phoneNumber}`;
    window.open(phoneURL, '_blank');
  };

  return (
    <ButtonWrapper>
      <FabButton color="success" aria-label="WhatsApp" onClick={handleWhatsAppClick}>
        <WhatsAppIcon />
      </FabButton>
      <FabButton color="secondary" aria-label="Phone" onClick={handlePhoneClick}>
        <PhoneIcon />
      </FabButton>
    </ButtonWrapper>
  );
};

export default ContactButtons;
