import styled from 'styled-components/native';

export const TipsContainer = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingLeft: 16
    },
}))`
    margin-top: 25px;
`;

export const Option = styled.TouchableOpacity`
    background: ${({ bgColor }) => bgColor};
    width: 130px;
    height: 200px;
    margin-right: 16px;
    border-radius: 8px;
    padding: 15px;
    justify-content: space-between;
`;

export const TipsHeader = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;    
`;

export const TipsImage = styled.Image`
   align-self: center;
`;