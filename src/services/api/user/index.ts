import request from '@src/services/request';
// 获取用户信息
export const getAllUserInfo = () => request.get('/users');

export const login = (username: string, password: string) =>
  request.post('/users/signin', {
    username,
    password,
  });
