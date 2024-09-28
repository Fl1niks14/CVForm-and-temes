import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import './cvForm'

interface CVFormData {   /* Форма типов */
  name: string;
  email: string;
  phone: string;
  experience: string;
  skills: string;
}

const CVForm: React.FC = () => {
  const [formData, setFormData] = useState<CVFormData>({ /* Форма */
    name: '',
    email: '',
    phone: '',
    experience: '',
    skills: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { /* обращаемся к input в константу e  */
    const { name, value } = e.target; /* Вытаскиваем из e : name , value */
    setFormData({ ...formData, [name]: value }); /* oбновляем значение формы  */
  }; 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { /* обращаемся к handleSubmit и закупориваем input в константу e  */
    e.preventDefault();/* Отмена перезагрузки */
    console.log(formData);/* Вывод обновленной формы */
  };

  return (
    <form onSubmit={handleSubmit} className="cv-form">
      <Typography variant="h5"  color='black'>
        Заполните ваше резюме
      </Typography>
      <TextField
        label="Имя"
        name="name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        variant="outlined"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Телефон"
        name="phone"
        variant="outlined"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Опыт работы"
        name="experience"
        variant="outlined"
        multiline
        rows={4}
        value={formData.experience}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Навыки"
        name="skills"
        variant="outlined"
        multiline
        rows={4}
        value={formData.skills}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Отправить
      </Button>
    </form>
  );
};

export default CVForm;