import { React, useState } from 'react';
import { Feather, MaterialCommunityIcons, Ionicons, Fontisto } from '@expo/vector-icons';
import { Switch } from 'react-native';
import {
    Wrapper,
    Header,
    HeaderContainer,
    Title,
    BalanceContainer,
    Value,
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardBody,
    CardDetails,
    CardTitle,
    CardInfo,
    Img,
    AddButton,
    AddLabel,
    Ticket,
    TicketLabel
} from './styles';

import creditCard from '../../images/credit-card.png'

export default function Wallet() {

    const [isVisible, setIsVisible] = useState(true);

    function handleToggleVisibility() {
        setIsVisible((prevState) => !prevState);
    }

    return (
        <Wrapper>
            <Header colors={['#52e78c', '#1ab563']}>
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>
                    <BalanceContainer>
                        <Value>
                            R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
                        </Value>
                        <EyeButton onPress={handleToggleVisibility}>
                            <Feather name="eye" size={28} color="#fff" />
                        </EyeButton>

                    </BalanceContainer>
                    <Info>
                        Seu saldo está rendendo 100% do CDI
                    </Info>
                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name="cash-usd" size={25} color="#fff" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>
                        <Action>
                            <MaterialCommunityIcons name="bank-outline" size={25} color="#fff" />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>
                    </Actions>
                </HeaderContainer>
            </Header>
            <UseBalance>
                <UseBalanceTitle>
                    Usar saldo ao pagar
                </UseBalanceTitle>
                <Switch />
            </UseBalance>
            <PaymentMethods>
                <PaymentMethodsTitle>
                    Forma de pagamento
                </PaymentMethodsTitle>
                <Card>
                    <CardBody>
                        <CardDetails>
                            <CardTitle>
                                Cadastre o seu cartão de crédito
                        </CardTitle>
                            <CardInfo>
                                Cadastre um cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
                        </CardInfo>
                        </CardDetails>
                        <Img source={creditCard} resizeMode="contain" />
                    </CardBody>
                    <AddButton>
                        <Ionicons name="ios-add-circle-outline" size={40} color="#1ab563" />
                        <AddLabel>Adicionar cartão de crédito</AddLabel>
                    </AddButton>
                </Card>
                <Ticket>
                    <Fontisto name="ticket" size={25} color="#1ab563"/>
                    <TicketLabel>Usar código promocional</TicketLabel>
                </Ticket>
            </PaymentMethods>
        </Wrapper>
    );
}