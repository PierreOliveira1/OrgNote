import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View<{
	focused: boolean;
}>`
	width: 90%;
	height: 50px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border-radius: 10px;
	border: 1px solid gray;
	shadow-color: rgba(0, 0, 0, 0.12);
	elevation: 5;
	background-color: #FFFFFF;
	margin-top: 20px;
`;

interface ITextInput {
	width: string;
	isFocused: boolean;
}

export const TextInput = styled.TextInput<ITextInput>`
	width: ${({ width }) => width || '100%'};
	height: 50px;
	background-color: transparent;
	border-radius: 10px;
	padding-left: ${({ isFocused }) => isFocused ? '0px' : '10px'};
`;

export const BoxIcon = styled.View`
	width: 10%;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

