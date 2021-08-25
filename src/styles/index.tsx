import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	background-color: #fafafa;
`;

export const Box = styled.View<{
	width?: string | number;
	height?: string | number;
}>`
	width: ${(props) => props.width || 'auto'};
	height: ${(props) => props.height || 'auto'};
`;
