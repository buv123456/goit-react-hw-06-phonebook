import { toast } from 'react-hot-toast';

export function save(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    toast.error('Something goes wrong. Reload page');
  }
}

export function load(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? [] : JSON.parse(serializedState);
  } catch (error) {
    toast.error('Something goes wrong. Reload page');
  }
}
