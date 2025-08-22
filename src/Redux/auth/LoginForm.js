import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fakeLogin } from '../redux/authSlice'; // thunk

function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fakeLogin(form));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Accesso...' : 'Login'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {user && <p className="text-green-600">Benvenutə, {user.email}!</p>}
    </form>
  );
}

export default LoginForm;
