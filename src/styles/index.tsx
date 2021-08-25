import styled from 'styled-components/native';

export const Container = styled.View<{
	justifyContent?: string;
	alignItems?: string;
}>`
	flex: 1;
	width: 100%;
	height: 100%;
	justify-content: ${(props) => props.justifyContent || 'flex-start'};
	align-items: ${(props) => props.alignItems || 'flex-start'};
	background-color: #fafafa;
`;
