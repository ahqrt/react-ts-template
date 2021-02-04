import { ForwardRefComponent, HTMLMotionProps, motion } from 'framer-motion';
import React, { FC, useState } from 'react';
import { login } from '../../services/api/user/index';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axiosInstance from '@src/services/request';

const CellPhoneInput: ForwardRefComponent<HTMLInputElement, HTMLMotionProps<'input'>> = styled(motion.input)`
  width: 300px;
  border: 1px solid #ccc;
  height: 30px;
  padding-left: 4px;
  border-radius: 5px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
`;

const Button: ForwardRefComponent<HTMLButtonElement, HTMLMotionProps<'button'>> = styled(motion.button)`
  width: 300px;
  height: 30px;
  background-color: #de6449;
  border-radius: 10px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
  }
  &:focus {
    transform: scale(0.95);
    outline: none;
  }
`;

const Login: FC = () => {
  const history = useHistory();
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const handleLogin = async () => {
    const data = await login(username, password);
    const token = data.headers['x-access-token'];
    if (token) {
      window.localStorage.setItem('X-Access-Token', token);
    }
    if (data.data.code === 200) {
      setTimeout(() => {
        history.push('/home');
      }, 500);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div>Login</div>
      <CellPhoneInput
        type="text"
        placeholder="请输入用户名"
        value={username}
        onChange={e => setusername(e.target.value)}
      ></CellPhoneInput>
      <CellPhoneInput
        type="password"
        placeholder="请输入密码"
        value={password}
        onChange={e => setpassword(e.target.value)}
      ></CellPhoneInput>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
