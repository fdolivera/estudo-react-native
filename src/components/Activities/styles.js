import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 15px;
    padding: 0 5px;
`;

export const Header = styled.View``;

export const Title = styled.Text`
    color: #fff
    margin-left: 15px;
    font-weight: bold;
`;

export const Card = styled.View`
    background: #1e222b;
    border-radius: 8px;
    margin-top: 15px;
    padding: 15px;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.Image``;

export const Description = styled.Text`
    color: #fff;
    font-size: 16px;
    margin-left: 15px;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const CardBody = styled.View`
    margin-top: 20px;
`;

export const UserName = styled.Text`
    color: #fff;
    font-size: 18px;
`;

export const CardFooter = styled.View`
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Details = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Value = styled.Text`
    color: #f75175;
    font-size: 14px;
    font-weight: bold;
`;

export const Divider = styled.View`
    width: 2px;
    height: 15px;
    margin: 0 10px;
    background: rgba(255, 255, 255, 0.8);
`;

export const Date = styled.View`
    flex-direction: row;
`;

export const DateLabel = styled.Text`
    color: #fff;
    font-size: 14px;
    margin: 0 10px;
`;

export const Actions = styled.View`
    flex-direction: row;
`;

export const Options = styled.TouchableOpacity`
    margin-left: 15px;
    flex-direction: row;

`;

export const OptionLabel = styled.Text`
    color: #fff;
    font-size: 15px;
    margin-left: 5px;
`;