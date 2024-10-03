import { useState, useEffect } from 'react';

// Fungsi helper untuk cek apakah string adalah JSON valid
const isJSON = (value) => {
  try {
    JSON.parse(value);
    return true;
  } catch (error) {
    return false;
  }
};

function useLocalStorage(key) {
  // Ambil nilai awal dari localStorage atau nilai default null dengan pengecekan JSON
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      // Cek apakah item adalah JSON valid
      return item && isJSON(item) ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading localStorage', error);
      return null;
    }
  });

  // Fungsi untuk update localStorage dan state
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error setting localStorage', error);
    }
  };

  // useEffect untuk listen perubahan di localStorage
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key && event.newValue && isJSON(event.newValue)) {
        setStoredValue(JSON.parse(event.newValue));
      } else {
        setStoredValue(null); // Atur ke null jika bukan JSON
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue];
}

export default useLocalStorage;
