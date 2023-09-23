// import React from 'react';
// import { fireEvent, render } from '@testing-library/react-native';
// import { SignUp } from '../SignUp';
// import * as service from '../../../services/authService';
//
// jest.mock('@react-native-async-storage/async-storage', () => ({
//   setItem: jest.fn(),
//   // getItem: jest.fn(),
//   removeItem: jest.fn(),
// }));
//
// describe('SignUp', () => {
//   it('should render labels', () => {
//     const { getByText } = render(<SignUp />);
//
//     getByText('Messenger');
//     getByText('Create user');
//   });
//   describe('functionality', () => {
//     it('should create user when press on button', () => {
//       const createUserSpy = jest.spyOn(service, 'createUser');
//       const { getByText } = render(<SignUp />);
//
//       const button = getByText('Create user');
//       fireEvent.press(button);
//
//       expect(createUserSpy).toHaveBeenCalledTimes(1);
//     });
//   });
// });
