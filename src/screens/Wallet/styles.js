import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'

export const Wrapper = styled.View`
    background: black;
    flex: 1;
`;

export const Header = styled(LinearGradient)`
    height: 260px;
`;

export const HeaderContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const BalanceContainer = styled.View`
    flex-direction: row;
    margin: 10px 0;
    align-items: center;
`;

export const Value = styled.Text`
    font-size: 38px;
    color: #fff;
    font-weight: 200;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
    margin-left: 10px;
`;

export const Info = styled.Text`
    color: #fff;
    font-size: 16px;
`;

export const Actions = styled.View`
    flex-direction: row;
    margin-top: 40px;
`;

export const Action = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    width: 150px;
    height: 45px;
    border-radius: 25px;
    margin: 0 10px;
`;

export const ActionLabel = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-left: 5px;
`;

export const UseBalance = styled.View`
    background: #1c1c1e;
    height: 60px;
    flex-direction: row;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: 500;
`;

export const PaymentMethods = styled.View`
    margin-top: 15px;
    padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
    color: #8e8e93;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 200;
`;

export const Card = styled.View`
    background: #1e232a;
    padding: 15px;
    border-radius: 8px;
    margin-top: 10px;
    
`;

export const CardBody = styled.View`
    flex-direction: row;
`;

export const CardDetails = styled.View`
    flex: 1;
    margin-right: 15px;
`;

export const CardTitle = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const CardInfo = styled.Text`
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    margin-top:15px;
`;

export const Img = styled.Image`
    width: 60px;
`;

export const AddButton = styled.TouchableOpacity`
    margin-top: 15px;
    flex-direction: row;
    align-items: center;
`;

export const AddLabel = styled.Text`
    color: #1ab563;
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
`;

export const Ticket = styled.TouchableOpacity`
    flex-direction: row;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
`;

export const TicketLabel = styled.Text`
    color: #1ab563;
    font-size: 16px;
    margin-left: 10px;
    text-decoration: underline;
`;

