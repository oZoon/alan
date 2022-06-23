import React, { useCallback, useState } from 'react';
import { IContactItem } from '../api/models';

interface IForm {
  onAddContact: (data: IContactItem) => void;
}

interface IFormState extends IContactItem {
  isAcceptSubmit: boolean;
}

const Form: React.FC<IForm> = ({ onAddContact }) => {
  const [formState, setFormState] = useState<IFormState>({
    name: '',
    phone: '',
    isAcceptSubmit: false,
  });

  const validateValue = (data: IFormState) => {
    return Boolean(data.name.length > 0 && data.phone.match(/^\+7[0-9]{10}$/));
  };

  const handleChange = useCallback((key: string, value: string) => {
    setFormState((state) => {
      const newState = {
        ...state,
        [key]: value,
      };
      newState.isAcceptSubmit = validateValue(newState);
      return newState;
    });
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onAddContact({ name: formState.name, phone: formState.phone });
      setFormState({ name: '', phone: '', isAcceptSubmit: false });
    },
    [formState.name, formState.phone, onAddContact]
  );

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ФИО
        <input
          type="text"
          value={formState.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
      </label>
      <label>
        телефон
        <input
          type="text"
          value={formState.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
        />
      </label>
      <input
        type="submit"
        value="Отправить"
        disabled={!formState.isAcceptSubmit}
      />
    </form>
  );
};

export default Form;
