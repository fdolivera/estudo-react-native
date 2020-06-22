import styled from 'styled-components/native';

export const BannerContainer = styled.View`
    background: #35df92;
    padding: 15px;
    height: 150px;
    margin: 25px 5px;
    border-radius: 8px;
    align-items: center;
    flex-direction: row;
`;

export const Details = styled.View`
    flex: 1;
`;

export const Option = styled.TouchableOpacity`
    margin-top: 15px;
`;

export const Label = styled.Text`
    color:#fff;
    font-size: 12px;
    font-weight: bold;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const Description = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-top: 15px;
`;

export const Image = styled.Image`
    justify-content: space-between;
`;
